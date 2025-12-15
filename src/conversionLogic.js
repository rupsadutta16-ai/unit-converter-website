
export const unitValues = {
  length: {
    km: 1000,
    m: 1,
    cm: 0.01,
    mm: 0.001,
    mi: 1609.34,
    ft: 0.3048,
    in: 0.0254,
    yd: 0.9144,
    nm: 1e-9,
    µm: 1e-6,
    pm: 1e-12,
    ly: 9.461e15,
    Å: 1e-10,
  },
  weight: {
    kg: 1,
    g: 0.001,
    mg: 0.000001,
    dag: 0.01,
    cg: 0.0001,
    lb: 0.453592,
    oz: 0.0283495,
    t: 1000
  },
  area: {
    "m²": 1,
    "km²": 1e6,
    "cm²": 0.0001,
    "mm²": 1e-6,
    ha: 10000,
    "ft²": 0.092903,
    "yd²": 0.836127,
    ac: 4046.86
  },
  volume: {
    kl: 1000,
    L: 1,
    ml: 0.001,
    "m³": 1000,
    "cm³": 0.001,
    "mm³": 1e-6,
    gal: 3.78541,
    qt: 0.946353,
    pt: 0.473176,
    cup: 0.24,
    oz: 0.0295735
  },
  temperature: {
    "°C": { toBase: v => v, fromBase: v => v },          
    "°F": { toBase: v => (v - 32) * 5 / 9, fromBase: v => v * 9 / 5 + 32 },
    "K": { toBase: v => v - 273.15, fromBase: v => v + 273.15 }
  },
  speed: {
    "m/s": 1,
    "km/h": 0.277778,  
    "mph": 0.44704,    
    "ft/s": 0.3048,    
    "kn": 0.514444     
  },
  time: {
    "ms": 0.001,   
    "s": 1,
    "min": 60,
    "h": 3600,
    "d": 86400,
    "wk": 604800,
    "mo": 2629800,   
    "yr": 31557600,   
    "dec": 315576000, 
    "c": 3155760000  
  },
  angle: {
    "°": 1,                  
    "rad": 180 / Math.PI,      
    "grad": 0.9              
  },
  fuel: {
    "L/100km": 1,              
    "mpg (US)": 235.215 / 1,   
    "mpg (UK)": 282.481 / 1,    
    "km/L": 100 / 1           
  },
  pressure: {
    "Pa": 1,
    "kPa": 1000,
    "bar": 100000,
    "atm": 101325,
    "psi": 6894.76,
    "mmHg": 133.322,
    "Torr": 133.322
  },
  energy: {
    "J": 1,
    "kJ": 1000,
    "cal": 4.184,
    "kcal": 4184,
    "Wh": 3600,
    "kWh": 3600000,
    "BTU": 1055.06
  },
  power: {
    "W": 1,
    "kW": 1000,
    "MW": 1000000,
    "hp": 745.7
  },
  force: {
    "N": 1,
    "kN": 1000,
    "lbf": 4.44822,
    "dyn": 1e-5
  },
  density: {
    "kg/m³": 1,
    "g/cm³": 1000,
    "lb/ft³": 16.0185
  },
  torque: {
    "N·m": 1,
    "kg·m": 9.80665,
    "lb·ft": 1.35582
  },
  flow: {
    "m³/s": 1,
    "L/s": 0.001,
    "L/min": 0.001 / 60,
    "gal/min": 0.00378541 / 60,
    "ft³/s": 0.0283168
  },
  viscosity: {
    "Pa·s": 1,
    "cP": 0.001,
    "P": 0.1
  },
  thermalConductivity: {
    "W/(m·K)": 1,
    "kcal/(m·h·°C)": 1.163,
    "BTU/(h·ft·°F)": 1.730735
  },
  specificHeat: {
    "J/(kg·K)": 1,
    "kJ/(kg·K)": 1000,
    "cal/(g·°C)": 4186.8
  },
  heatTransfer: {
    "W/(m²·K)": 1,
    "BTU/(h·ft²·°F)": 5.678
  },
  acceleration: {
    "m/s²": 1,
    "ft/s²": 0.3048,
    "g": 9.80665
  },
  angularVelocity: {
    "rad/s": 1,
    "°/s": Math.PI / 180,
    "rpm": 2 * Math.PI / 60
  },
  momentOfInertia: {
    "kg·m²": 1,
    "g·cm²": 1e-7,
    "lb·ft²": 0.0421401
  },
  dataStorage: {
    bit: 1,
    B: 8,
    KB: 8192,
    MB: 8388608,
    GB: 8589934592,
    TB: 8796093022208
  },

  fontSizes: {
    px: 1,
    pt: 1.3333333333,
    pc: 16,
    cm: 37.79527559,
    mm: 3.779527559
  },

 

  

  "data-storage": {
    bit: 1,
    B: 8,
    KB: 8_192,
    MB: 8_388_608,
    GB: 8_589_934_592,
    TB: 8_796_093_022_208
  },

  "font-sizes": {
    px: 1,
    pt: 1.333333,
    pc: 16,
    cm: 37.795275,
    mm: 3.7795275
  },

  cooking: {
    tsp: 1,
    tbsp: 3,
    cup: 48,
    mL: 4.92892,
    L: 4928.92,
    gal: 768
  },

  gold: {
    g: 1,
    kg: 1000,
    mg: 0.001,
    ozt: 31.1035,
    ct: 0.2
  },

  "textile-weight": {
    GSM: 1,
    "oz/yd²": 33.906
  },


  "screen-density": {
    PPI: 1,
    DPI: 1,
    DPCM: 2.54
  },
  illumination: {
    "lx": 1,
    "m*c": 1,
    "cm*c": 10000,
    "ft*c": 10.7639104167,
    "flame": 43.0556416668,
    "ph": 10000,
    "nox": 0.001,
    "cd·sr/m²": 1,
    "lm/m²": 1,
    "lm/cm²": 10000,
    "lm/ft²": 10.7639104167,
    "W/cm²-555nm": 6830000
  }


};

export const convert = (category, value, from, to) => {
  if (category === 'temperature') {
   
    const base = unitValues.temperature[from].toBase(value);
    return unitValues.temperature[to].fromBase(base);
  } else if (category === 'sound') {
    let base;
    if (from === "dB") base = value;
    else if (from === "B") base = value * 10;
    else if (from === "Np") base = value * 8.6858896;
    else throw new Error("Invalid sound unit");

    if (to === "dB") return base;
    else if (to === "B") return base / 10;
    else if (to === "Np") return base / 8.6858896;
    else throw new Error("Invalid sound unit");
  } else {
   
    const baseValue = value * unitValues[category][from];
    return baseValue / unitValues[category][to];
  }
};
