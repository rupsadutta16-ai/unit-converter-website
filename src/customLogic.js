
export const cssUnitLogic = ({ value, fromUnit, toUnit, parentSize, rootSize, viewportWidth, viewportHeight }) => {


  const v = parseFloat(value);

  const getPx = (val, unit) => {
    switch (unit) {
      case "px": return val;
      case "em": return val * parentSize;
      case "rem": return val * rootSize;
      case "vw": return (val / 100) * viewportWidth;
      case "vh": return (val / 100) * viewportHeight;
      case "%": return (val / 100) * parentSize;
      default: return val;
    }
  };

  const pxValue = getPx(v, fromUnit);

  const toValue = (() => {
    switch (toUnit) {
      case "px": return pxValue;
      case "em": return pxValue / parentSize;
      case "rem": return pxValue / rootSize;
      case "vw": return (pxValue / viewportWidth) * 100;
      case "vh": return (pxValue / viewportHeight) * 100;
      case "%": return (pxValue / parentSize) * 100;
      default: return pxValue;
    }
  })();

  return toValue;
};


export const profitLossLogic = ({ costPrice, sellingPrice }) => {
  const cp = parseFloat(costPrice);
  const sp = parseFloat(sellingPrice);

  if (cp === 0) return "Invalid Cost Price";

  const profit = sp - cp;
  const profitPercent = (profit / cp) * 100;

  return {
    profitOrLoss: profit >= 0 ? "Profit" : "Loss",
    amount: Math.abs(profit),
    percent: Math.abs(profitPercent.toFixed(2)) + "%"
  };
};


const hexToRgb = (hex) => {
  if (typeof hex !== "string") return null;

  let h = hex.trim();
  if (!h.startsWith("#")) return null;

  h = h.slice(1);
  if (h.length === 3) {
    h = h.split("").map(c => c + c).join("");
  }

  if (!/^[0-9a-fA-F]{6}$/.test(h)) return null;

  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
};


const parseRgb = (value) => {
  if (typeof value !== "string") return null;

  const cleaned = value
    .toLowerCase()
    .replace(/^rgb\s*\(|\)$/g, "")
    .trim();

  const match = cleaned.match(
    /^(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})$/
  );

  if (!match) return null;

  const r = Number(match[1]);
  const g = Number(match[2]);
  const b = Number(match[3]);

  if ([r, g, b].some(v => v < 0 || v > 255)) return null;

  return [r, g, b];
};


const rgbToHex = ([r, g, b]) => {
  return (
    "#" +
    [r, g, b]
      .map(v => v.toString(16).padStart(2, "0"))
      .join("")
  );
};


const rgbToHsl = ([r, g, b]) => {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h *= 60;
  }

  return [
    Math.round(h),
    Math.round(s * 100),
    Math.round(l * 100),
  ];
};


export const colorLogic = ({ value, from, to }) => {
  if (typeof value !== "string") return "";

  let rgb = null;

  if (from === "hex") {
    rgb = hexToRgb(value);
  }

  if (from === "rgb") {
    rgb = parseRgb(value);
  }

  
  if (!rgb) return "";

  if (to === "rgb") {
    return `rgb(${rgb.join(",")})`;
  }

  if (to === "hex") {
    return rgbToHex(rgb);
  }

  if (to === "hsl") {
    const [h, s, l] = rgbToHsl(rgb);
    return `hsl(${h},${s}%,${l}%)`;
  }

  return "";
};


export const interestLogic = ({ p, r, t }) => {
  p = Number(p)
  t = Number(t)
  r = Number(r)
  const interest = (p * r * t) / 100;
  const total = p + interest;

  return {
    interest: interest.toFixed(2),
    total: total.toFixed(2)
  };
};

export const emiLogic = ({ pe, re, n }) => {
  pe = Number(pe)
  n = Number(n)
  re = Number(re)
  const monthlyRate = re / (12 * 100);
  const months = n;

  const emi =
    (pe * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  const totalPayable = emi * months;
  const totalInterest = totalPayable - pe;

  return {
    emi: emi.toFixed(2),
    totalPayable: totalPayable.toFixed(2),
    totalInterest: totalInterest.toFixed(2)
  };
};


export const currencyLogic = async ({ amount, from, to }) => {
  
  if (!amount || !from || !to) return "Enter all fields";

  const numericAmount = parseFloat(amount);
  if (isNaN(numericAmount) || numericAmount < 0) return "Invalid amount";

 
  if (from === to) return Number(numericAmount.toFixed(2));

  const url = `https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}&amount=${numericAmount}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`API returned status ${res.status}`);

    const data = await res.json();

   
    if (!data.rates || typeof data.rates[to] !== "number") {
      return `Conversion for ${to} unavailable`;
    }

   
    return Number(data.rates[to]);
  } catch (err) {
   
    return { error: err.message || "API error" };
  }
};
