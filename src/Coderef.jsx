import { useState, useEffect } from "react";
import { convert } from "./conversionLogic";
import { profitLossLogic, cssUnitLogic, colorLogic, interestLogic, emiLogic, currencyLogic } from "./customLogic";
import { FaTimes } from "react-icons/fa";
import { FiCopy, FiHeart, FiCheck, FiX } from "react-icons/fi";
import { MdOutlineSwapHoriz } from "react-icons/md";

const ConverterBlock = ({ dark, categoryId, converter, onToggleFavourite, isFavourite, onClose, targetref }) => {
  if (!converter || !converter.units || converter.units.length === 0) {
    return null;
  }

  const [value, setValue] = useState("");
  const [from, setFrom] = useState(converter.units?.[0]?.short || "");
  const [to, setTo] = useState(converter.units?.[1]?.short || converter.units?.[0]?.short || "");
  const [copied, setCopied] = useState(false);

  const [parentSize, setParentSize] = useState(16);
  const [rootSize, setRootSize] = useState(16);
  const [viewportWidth, setViewportWidth] = useState(1440);
  const [viewportHeight, setViewportHeight] = useState(900);
  const [amount, setAmount] = useState("");
  const [costPrice, setCostPrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [p, setP] = useState("");
  const [r, setR] = useState("");
  const [t, setT] = useState("");
  const [currencyResult, setCurrencyResult] = useState("");
  const [pe, setPe] = useState("");
  const [re, setRe] = useState("");
  const [n, setN] = useState("");
  const [precision, setPrecision] = useState(4);

  let result = "";

  if (converter.customLogic === "css") {
    result = cssUnitLogic({ value, fromUnit: from, toUnit: to, parentSize, rootSize, viewportWidth, viewportHeight });
  } else if (converter.customLogic === "profitLoss") {
    if (costPrice && sellingPrice) {
      result = profitLossLogic({ costPrice, sellingPrice });
    }
    // } else if (converter.customLogic === "color") {
    //   result = colorLogic({ value, from, to });
  } else if (converter.customLogic === "interest") {
    if (p && r && t) {
      result = interestLogic({ p, r, t });
    }
  } else if (converter.customLogic === "emi") {
    if (pe && re && n) {
      result = emiLogic({ pe, re, n });
    }
  } else if (converter.customLogic === "currency") {
    
  } else {
    if (value) result = convert(converter.id, parseFloat(value), from, to);
  }
  const formatNumber = (val) => {
    const num = typeof val === "number" ? val : Number(val);
    if (!Number.isFinite(num)) return val;

    return precision === "full"
      ? num
      : Number(num.toFixed(precision));
  };

  useEffect(() => {
    if (converter.customLogic === "currency" && amount && from && to) {
      currencyLogic({ amount, from, to }).then(res => {
        setCurrencyResult(res);
      });
    }
  }, [amount, from, to, converter.customLogic]);
  const copyText = async (text) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      return true;
    } catch {
      return false;
    }
  };


  return (

    <div ref={targetref} className={`relative rounded-xl ${dark ? "bg-gray-800 border" : "bg-gray-100 border-blue-500/30 shadow-[0_2px_8px_rgba(41,92,173,0.3)] border"} w-[90%] md:w-[65%] mx-auto px-5 md:px-10 py-4 md:py-8 md:px-20`} >
      <FiHeart
        onClick={onToggleFavourite}
        className={`absolute right-12 md:right-14 top-4 cursor-pointer text-xl transition
    ${isFavourite ? "text-red-600" : "text-gray-400"}
  `}
      />
      <FiX onClick={onClose} className={`absolute ${dark? "text-gray-200": "text-gray-600"} right-4 top-4 cursor-pointer text-xl transition hover:text-red-700`} />

      <h3 className="text-xl font-semibold mt-8 md:mt-5 flex gap-2 md:text-2xl mb-7">
        <span>{converter.name}</span>
        <span>Converter</span>
      </h3>

     
      {converter.customLogic === "css" && (
        <>
         
          <div className="flex flex-col md:flex-row md:items-center w-full md:space-x-4 my-2">
            <div className="md:gap-4 flex md:flex-col md:w-[40%] w-full">
              <input
                type="number"
                placeholder="Enter value"
                value={value}
                onChange={e => setValue(e.target.value)}
                className="outline-none w-[40%] md:w-full border rounded-md h-8 pl-2 mb-2 md:mb-0"
              />
              <select
                value={from}
                onChange={e => setFrom(e.target.value)}
                className="text-center text-black md:ml-0 ml-[5%] w-[55%] md:w-full bg-white rounded h-8 outline-none"
              >
                {converter.units.map(u => (
                  <option key={u.short} value={u.short}>{u.short} - {u.name}</option>
                ))}
              </select>
            </div>

            <div className="flex justify-center md:w-[20%] items-center my-1 md:my-0">
              <MdOutlineSwapHoriz
                className="text-4xl cursor-pointer"
                onClick={() => {
                  const temp = from;
                  setFrom(to);
                  setTo(temp);
                }}
              />
            </div>

            <div className="md:gap-4 flex md:flex-col mb-6 mt-2 md:w-[40%] w-full">
              <input
                type="number"
                placeholder="Result"
                value={formatNumber(result) || ""}
                readOnly
                className="outline-none w-[40%] md:w-full border rounded-md h-8 pl-2 mb-2 md:mb-0"
              />
              <select
                value={to}
                onChange={e => setTo(e.target.value)}
                className="text-center md:ml-0 ml-[5%] w-[55%] md:w-full bg-white rounded h-8 outline-none text-black"
              >
                {converter.units.map(u => (
                  <option key={u.short} value={u.short}>{u.short} - {u.name}</option>
                ))}
              </select>
            </div>
          </div>

        
          <div className="space-y-3 mt-4">
            <div className="flex items-center gap-4">
              <span className="w-[160px]">Parent size:</span>
              <input
                type="number"
                value={parentSize}
                onChange={e => setParentSize(e.target.value)}
                className="outline-none border rounded-md h-8 pl-2 w-full"
              />
            </div>

            <div className="flex items-center gap-4">
              <span className="w-[160px]">Root size:</span>
              <input
                type="number"
                value={rootSize}
                onChange={e => setRootSize(e.target.value)}
                className="outline-none border rounded-md h-8 pl-2 w-full"
              />
            </div>

            <div className="flex items-center gap-4">
              <span className="w-[160px]">Viewport width:</span>
              <input
                type="number"
                value={viewportWidth}
                onChange={e => setViewportWidth(e.target.value)}
                className="outline-none border rounded-md h-8 pl-2 w-full"
              />
            </div>

            <div className="flex items-center gap-4">
              <span className="w-[160px]">Viewport height:</span>
              <input
                type="number"
                value={viewportHeight}
                onChange={e => setViewportHeight(e.target.value)}
                className="outline-none border rounded-md h-8 pl-2 w-full"
              />
            </div>
          </div>

         
          <div className="flex items-center mt-4 gap-12 texl-lg font-semibold mb-4">
            <span className="text-blue-500">{formatNumber(value)} {from} = {formatNumber(result)} {to}</span>
            {copied ? (
              <FiCheck className=" text-xl" />
            ) : (
              <FiCopy
                className="cursor-pointer text-xl"
                onClick={async () => {
                  const ok = await copyText(
                    `${formatNumber(value)} ${from} = ${formatNumber(result)} ${to}`
                  );
                  if (ok) {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1500);
                  }
                }}
              />
            )}
          </div>
        </>
      )}


      
      {converter.customLogic === "profitLoss" && (
        <div className="mb-3 flex flex-col gap-3">
          <input
            type="number"
            placeholder="Cost Price"
            value={costPrice}
            onChange={e => setCostPrice(e.target.value)}
            className="outline-none border rounded-md h-10 pl-2 w-full"
          />

          <input
            type="number"
            placeholder="Selling Price"
            value={sellingPrice}
            onChange={e => setSellingPrice(e.target.value)}
            className="outline-none border rounded-md h-10 pl-2 w-full"
          />

         
          <div className="mt-3 space-y-1">
            <div>
              <strong>Profit/Loss:</strong> {formatNumber(result?.profitOrLoss) || ""}
            </div>
            <div>
              <strong>Amount:</strong> {formatNumber(result?.amount) || ""}
            </div>
            <div>
              <strong>Percent:</strong> {formatNumber(result?.percent) || ""}
            </div>
          </div>
        </div>
      )}



      
      {converter.customLogic === "interest" && (
        <div className="mb-3 flex flex-col gap-3">
          <input
            type="number"
            placeholder="Principal Amount"
            value={p}
            onChange={e => setP(e.target.value)}
            className="outline-none border rounded-md h-10 pl-2 w-full"
          />

          <input
            type="number"
            placeholder="Rate of Interest (% per year)"
            value={r}
            onChange={e => setR(e.target.value)}
            className="outline-none border rounded-md h-10 pl-2 w-full"
          />

          <input
            type="number"
            placeholder="Time (years)"
            value={t}
            onChange={e => setT(e.target.value)}
            className="outline-none border rounded-md h-10 pl-2 w-full"
          />

        

          <div className="mt-3 space-y-1">
            <div>
              <strong>Interest:</strong> {formatNumber(result?.interest) || ""}
            </div>
            <div>
              <strong>Total Amount:</strong> {formatNumber(result?.total) || ""}
            </div>
          </div>
        </div>
      )}


     
      {converter.customLogic === "emi" && (
        <div className="mb-3 flex flex-col gap-3">
          <input
            type="number"
            placeholder="Principal Amount"
            value={pe}
            onChange={e => setPe(e.target.value)}
            className="outline-none border rounded-md h-10 pl-2 w-full"
          />

          <input
            type="number"
            placeholder="Rate of Interest (% per year)"
            value={re}
            onChange={e => setRe(e.target.value)}
            className="outline-none border rounded-md h-10 pl-2 w-full"
          />

          <input
            type="number"
            placeholder="Number of Months"
            value={n}
            onChange={e => setN(e.target.value)}
            className="outline-none border rounded-md h-10 pl-2 w-full"
          />

        
          <div className="mt-3 space-y-1">
            <div>
              <strong>EMI:</strong> {formatNumber(result?.emi) || ""}
            </div>
            <div>
              <strong>Total Payable:</strong> {formatNumber(result?.totalPayable) || ""}
            </div>
            <div>
              <strong>Total Interest:</strong> {formatNumber(result?.totalInterest) || ""}
            </div>
          </div>
        </div>
      )}


     
      {/* {converter.customLogic === "color" && (
  <div className="flex flex-col md:flex-row md:items-center w-full md:space-x-4 my-2">
    <div className="md:gap-4 flex md:flex-col md:w-[40%] w-full">
      <input
        placeholder="Enter value"
        value={value}
        onChange={e => setValue(e.target.value)}
        className="outline-none w-[40%] md:w-full border rounded-md h-8 pl-2 mb-2 md:mb-0"
      />
      <select
        value={from}
        onChange={e => setFrom(e.target.value)}
        className="text-center text-black md:ml-0 ml-[5%] w-[55%] md:w-full bg-white rounded h-8 outline-none"
      >
        {converter.units.map(u => (
          <option key={u.short} value={u.short}>{u.name}</option>
        ))}
      </select>
    </div>

    <div className="flex justify-center md:w-[20%] items-center my-1 md:my-0">
     <MdOutlineSwapHoriz
  className="text-4xl " onClick={() => {
  const temp = from;
  setFrom(to);
  setTo(temp);
  setValue("");
}}

/>

    </div>

    <div className="md:gap-4 flex md:flex-col mb-6 mt-2 md:w-[40%] w-full">
      <input
        placeholder="Result"
        value={result || ""}
        
        className="outline-none w-[40%] md:w-full border rounded-md h-8 pl-2 mb-2 md:mb-0"
      />
      <select
        value={to}
        onChange={e => setTo(e.target.value)}
        className="text-center text-black md:ml-0 ml-[5%] w-[55%] md:w-full bg-white rounded h-8 outline-none"
      >
        {converter.units.map(u => (
          <option key={u.short} value={u.short}>{u.name}</option>
        ))}
      </select>
    </div>
  </div>
)}
 */}

     
      {converter.customLogic === "currency" && (
        <div className="flex flex-col md:flex-row md:items-center w-full md:space-x-4 my-2">
          <div className="md:gap-4 flex md:flex-col md:w-[40%] w-full">
            <input
              type="number"
              placeholder="Enter Value"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              className="outline-none w-[40%] md:w-full border rounded-md h-8 pl-2 mb-2 md:mb-0"
            />
            <select
              value={from}
              onChange={e => setFrom(e.target.value)}
              className="text-center md:ml-0 ml-[5%] text-black w-[55%] md:w-full bg-white rounded h-8 outline-none"
            >
              {converter.units.map(u => (
                <option key={u.short} value={u.short}>{u.short} - {u.name}</option>
              ))}
            </select>
          </div>

          <div className="flex justify-center md:w-[20%] items-center my-1 md:my-0">
            <MdOutlineSwapHoriz
              className="text-4xl cursor-pointer"
              onClick={() => {
                const temp = from;
                setFrom(to);
                setTo(temp);
              }}
            />
          </div>

          <div className="md:gap-4 flex md:flex-col mb-6 mt-2 md:w-[40%] w-full">
            <input
              placeholder="Result"
              value={formatNumber(currencyResult) || ""}
              readOnly
              className="outline-none w-[40%] md:w-full border rounded-md h-8 pl-2 mb-2 md:mb-0"
            />
            <select
              value={to}
              onChange={e => setTo(e.target.value)}
              className="text-center text-black md:ml-0 ml-[5%] w-[55%] md:w-full bg-white rounded h-8 outline-none"
            >
              {converter.units.map(u => (
                <option key={u.short} value={u.short}>{u.short} - {u.name}</option>
              ))}
            </select>
          </div>
        </div>
      )}

     
      {!converter.customLogic && (
        <>
          <div className="flex flex-col md:flex-row md:items-center w-full md:space-x-4 my-2">
            <div className="md:gap-4 flex md:flex-col md:w-[40%] w-full">
              <input
                type="number"
                placeholder="Enter value"
                value={value}
                onChange={e => setValue(e.target.value)}
                className="outline-none w-[40%] md:w-full border rounded-md h-8 pl-2 mb-2 md:mb-0"
              />
              <select
                value={from}
                onChange={e => setFrom(e.target.value)}
                className="text-center text-black md:ml-0 ml-[5%] w-[55%] md:w-full bg-white rounded h-8 outline-none"
              >
                {converter.units.map(u => (
                  <option key={u.short} value={u.short}>{u.short} - {u.name}</option>
                ))}
              </select>
            </div>

            <div className="flex justify-center md:w-[20%] items-center my-1 md:my-0">
              <MdOutlineSwapHoriz
                className="text-4xl cursor-pointer"
                onClick={() => { const temp = from; setFrom(to); setTo(temp); }}
              />
            </div>

            <div className="md:gap-4 flex md:flex-col md:mb-6 mb-2 mt-2 md:w-[40%] w-full">
              <input
                type="number"
                placeholder="Result"
                readOnly
                value={
                  typeof result === "number"
                    ? formatNumber(result)
                    : ""
                }
                onChange={e => setValue(e.target.value)}
                className={`  outline-none w-[40%]  md:w-full border rounded-md h-8 pl-2 mb-2 md:mb-0`}
              />
              <select
                value={to}
                onChange={e => setTo(e.target.value)}
                className="text-center text-black md:ml-0 ml-[5%] w-[55%] md:w-full bg-white rounded h-8 outline-none "
              >
                {converter.units.map(u => (
                  <option key={u.short} value={u.short}>{u.short} - {u.name}</option>
                ))}
              </select>
            </div>
          </div>

         
          <div className="flex  items-center mt-2 gap-12 texl-lg font-semibold mb-4 ">
            <span className="text-blue-500">{formatNumber(value)} {from} = {formatNumber(result)} {to}</span>
            {copied ? (
              <FiCheck className=" text-xl" />
            ) : (
              <FiCopy
                className="cursor-pointer text-xl"
                onClick={async () => {
                  const ok = await copyText(
                    `${formatNumber(value)} ${from} = ${formatNumber(result)} ${to}`
                  );
                  if (ok) {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1500);
                  }
                }}
              />
            )}


          </div>
        </>
      )}


      {/* {converter.customLogic === "color" && (
        <div className="flex items-center mt-2 gap-12 texl-lg font-semibold mb-4">
          <span>{value} {from} = {result} {to}</span>
          <FiCopy
            className="cursor-pointer"
            onClick={() => navigator.clipboard.writeText(`${value} ${from} = ${result} ${to}`)}
          />
        </div>
      )} */}

      
      {converter.customLogic === "currency" && (
        <div className="flex items-center mt-2 gap-12 texl-lg font-semibold mb-4">
          <span className="text-blue-500">{formatNumber(amount)} {from} = {formatNumber(currencyResult)} {to}</span>
          {copied ? (
            <FiCheck className=" text-xl" />
          ) : (
            <FiCopy
              className="cursor-pointer text-xl"
              onClick={async () => {
                const ok = await copyText(
                  `${formatNumber(amount)} ${from} = ${formatNumber(currencyResult)} ${to}`
                );
                if (ok) {
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1500);
                }
              }}
            />
          )}
        </div>
      )}

      {/*  
      {converter.customLogic === "currency" ? (
        <div className="mt-2">
          <strong>Result:</strong>{" "}
          {typeof currencyResult === "object" ? JSON.stringify(currencyResult) : currencyResult}
        </div>
      ) : (
        <div className="mt-2">
          <strong>Result:</strong>{" "}
          {typeof result === "object" ? JSON.stringify(result) : result}
        </div>
      )} */}
      {converter.customLogic != "emi" && converter.customLogic != "interest" && converter.customLogic != "profitLoss" && (<div className="mt-6 mb-6 flex gap-3 items-center flex-wrap">
        <span className="font-semibold">Precision:</span>

        {[2, 4, 6].map(p => (
          <button
            key={p}
            onClick={() => setPrecision(p)}
            className={`px-3 py-1 rounded border 
        ${precision === p ? "bg-gray-900 text-white" : "bg-white text-black"}`}
          >
            {p}
          </button>
        ))}

        <button
          onClick={() => setPrecision("full")}
          className={`px-3 py-1 rounded border 
      ${precision === "full" ? "bg-gray-900 text-white" : "bg-white text-black"}`}
        >
          Full
        </button>
      </div>)}

    </div>
  );
};

export default ConverterBlock;
