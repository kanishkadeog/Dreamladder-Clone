"use client";
import { useState } from "react";

export default function WealthBuilder() {

  const [mode, setMode] = useState("monthly");
  const [amount, setAmount] = useState(50000);

  const min = mode === "monthly" ? 500 : 10000;
  const max = mode === "monthly" ? 500000 : 10000000;
  const step = mode === "monthly" ? 500 : 10000;

  const percentage = ((amount - min) / (max - min)) * 100;

  const handleModeChange = (type) => {
    setMode(type);
    if (type === "monthly") {
      setAmount(50000);
    } else {
      setAmount(1000000);
    }
  };

  return (
    <section className="py-6 md:py-12 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-24 text-center">

        <h2 className="text-[24px] md:text-[32px] font-thin text-black/70 mb-2">
          Time Reveals the True Wealth Builder
        </h2>

        <p className="text-[16px] md:text-[20px] text-slate-900 font-medium mb-6">
          Compounding power over 25 years
        </p>

        {/* CARD */}
        <div className="max-w-3xl mx-auto mb-6 bg-white/90 p-4 rounded-2xl shadow-xl">

          {/* TOGGLE */}
          <div className="flex justify-center mb-4">
            <div className="bg-gray-50 p-0.5 rounded-full border inline-flex">

              <button
                onClick={() => handleModeChange("monthly")}
                className={`px-4 py-1 rounded-full font-bold transition-all ${
                  mode === "monthly"
                    ? "bg-red-600 text-white shadow-md"
                    : "text-gray-500"
                }`}
              >
                Monthly (SIP)
              </button>

              <button
                onClick={() => handleModeChange("onetime")}
                className={`px-4 py-1 rounded-full font-bold transition-all ${
                  mode === "onetime"
                    ? "bg-red-600 text-white shadow-md"
                    : "text-gray-500"
                }`}
              >
                One-time
              </button>

            </div>
          </div>

          {/* INPUT */}
          <div className="relative flex items-center justify-center mb-3">
            <span className="absolute left-1/2 -translate-x-[60px] text-red-800 font-bold text-lg">
              ₹
            </span>

            <input
              className="w-40 border-2 border-red-600 text-red-700 text-xl font-bold py-1.5 px-4 rounded-lg text-center"
              value={amount.toLocaleString()}
              readOnly
            />
          </div>

          {/* SLIDER */}
          <div className="relative w-full h-3 bg-gray-200 rounded-full mt-2">

            <input
              type="range"
              min={min}
              max={max}
              step={step}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full h-full appearance-none bg-transparent absolute top-0 left-0 z-20 cursor-pointer opacity-0"
            />

            {/* RED PROGRESS */}
            <div
              className="absolute top-0 left-0 h-full bg-red-600 rounded-full transition-all duration-300"
              style={{ width: `${percentage}%` }}
            />

            {/* THUMB */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-red-600 rounded-full shadow-md transition-all duration-300"
              style={{ left: `calc(${percentage}% - 12px)` }}
            />

          </div>

          {/* LABELS */}
          <div className="flex justify-between text-xs text-gray-500 mt-2 font-bold uppercase">
            <span>₹{min.toLocaleString()}</span>
            <span>
              {mode === "monthly" ? "₹5 Lakh" : "₹1 Cr"}
            </span>
          </div>

        </div>

        {/* RESULT TEXT */}
        <h3 className="text-[18px] md:text-[20px] font-medium text-slate-900 mb-6">
          After 25 years, it would have accumulated to
        </h3>

        {/* (Your existing investment cards remain unchanged below) */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-6">
                    <div className="flex flex-col items-center group relative">
                        <div className="relative w-28 h-28 md:w-48 md:h-48 rounded-full bg-white border border-gray-200 shadow-[0_15px_40px_-5px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:scale-105 z-10">
                            <div className="w-full h-full rounded-full bg-white p-[3px]">
                                <div className="w-full h-full rounded-full bg-slate-50 flex flex-col items-center justify-evenly py-2 md:py-3 shadow-inner">
                                    <div className="flex flex-col items-center leading-none mt-1">
                                        <span className="text-[16px] md:text-[26px] font-bold tracking-tight text-slate-600">
                                            ₹12.22
                                        </span>
                                        <span className="text-[10px] md:text-sm font-bold uppercase mt-0.5 text-slate-600">
                                            Cr
                                        </span>
                                    </div>
                                    <div className="relative w-16 h-16 md:w-32 md:h-32 flex items-center justify-center -my-3">
                                        <img alt="FD" className="w-full h-full object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110 -translate-x-1" 
                                         src="/FD.png"/>
                                    </div>
                                    <span className="text-[12px] md:text-[20px] font-medium tracking-widest text-slate-400 mb-1">
                                        FD
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="-mt-3 text-[12px] md:text-[18px] font-medium px-3 md:px-4 py-1 md:py-1.5 rounded-full border shadow-md z-20 bg-white text-slate-600 border-gray-100 group-hover:translate-y-1 transition-transform">
                            @7% Return
                        </div>
                    </div>
                    <div className="flex flex-col items-center group relative">
                        <div className="relative w-28 h-28 md:w-48 md:h-48 rounded-full bg-white border border-gray-200 shadow-[0_15px_40px_-5px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:scale-105 z-10">
                            <div className="w-full h-full rounded-full bg-white p-[3px]">
                                <div className="w-full h-full rounded-full bg-slate-50 flex flex-col items-center justify-evenly py-2 md:py-3 shadow-inner">
                                    <div className="flex flex-col items-center leading-none mt-1">
                                        <span className="text-[16px] md:text-[26px] font-bold tracking-tight text-slate-600">
                                            ₹14.36
                                        </span>
                                        <span className="text-[10px] md:text-sm font-bold uppercase mt-0.5 text-slate-600">
                                            Cr
                                        </span>
                                    </div>
                                    <div className="relative w-16 h-16 md:w-32 md:h-32 flex items-center justify-center -my-3">
                                        <img alt="Bonds" className="w-full h-full object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110 " 
                                          src="/bond.png"/>
                                    </div>
                                    <span className="text-[12px] md:text-[20px] font-medium tracking-widest text-slate-400 mb-1">
                                        Bonds
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="-mt-3 text-[12px] md:text-[18px] font-medium px-3 md:px-4 py-1 md:py-1.5 rounded-full border shadow-md z-20 bg-white text-slate-600 border-gray-100 group-hover:translate-y-1 transition-transform">
                            @8% Return
                        </div>
                    </div>
                    <div className="flex flex-col items-center group relative">
                        <div className="relative w-28 h-28 md:w-48 md:h-48 rounded-full bg-white border border-gray-200 shadow-[0_15px_40px_-5px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:scale-105 z-10">
                            <div className="w-full h-full rounded-full bg-white p-[3px]">
                                <div className="w-full h-full rounded-full bg-slate-50 flex flex-col items-center justify-evenly py-2 md:py-3 shadow-inner">
                                    <div className="flex flex-col items-center leading-none mt-1">
                                        <span className="text-[16px] md:text-[26px] font-bold tracking-tight text-slate-600">
                                            ₹20.07
                                        </span>
                                        <span className="text-[10px] md:text-sm font-bold uppercase mt-0.5 text-slate-600">
                                           Cr
                                        </span>
                                    </div>
                                    <div className="relative w-16 h-16 md:w-32 md:h-32 flex items-center justify-center -my-3">
                                        <img alt="Real Estate" className="w-full h-full object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110 " 
                                         src="realestate.png"/>
                                    </div>
                                    <span className="text-[12px] md:text-[20px] font-medium tracking-widest text-slate-400 mb-1">
                                        Real Estate
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="-mt-3 text-[12px] md:text-[18px] font-medium px-3 md:px-4 py-1 md:py-1.5 rounded-full border shadow-md z-20 bg-white text-slate-600 border-gray-100 group-hover:translate-y-1 transition-transform">
                            @10% Return
                        </div>
                    </div>
                    <div className="flex flex-col items-center group relative">
                        <div className="relative w-28 h-28 md:w-48 md:h-48 rounded-full bg-white border border-gray-200 shadow-[0_15px_40px_-5px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:scale-105 z-10">
                            <div className="w-full h-full rounded-full bg-white p-[3px]">
                                <div className="w-full h-full rounded-full bg-slate-50 flex flex-col items-center justify-evenly py-2 md:py-3 shadow-inner">
                                    <div className="flex flex-col items-center leading-none mt-1">
                                        <span className="text-[16px] md:text-[26px] font-bold tracking-tight text-slate-600">
                                            ₹23.86
                                        </span>
                                        <span className="text-[10px] md:text-sm font-bold uppercase mt-0.5 text-slate-600">
                                            Cr
                                        </span>
                                    </div>
                                    <div className="relative w-16 h-16 md:w-32 md:h-32 flex items-center justify-center -my-3">
                                        <img alt="Gold" className="w-full h-full object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110 " 
                                        src="/gold.png"/>
                                    </div>
                                    <span className="text-[12px] md:text-[20px] font-medium tracking-widest text-slate-400 mb-1">
                                        Gold
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="-mt-3 text-[12px] md:text-[18px] font-medium px-3 md:px-4 py-1 md:py-1.5 rounded-full border shadow-md z-20 bg-white text-slate-600 border-gray-100 group-hover:translate-y-1 transition-transform">
                            @11% Return
                        </div>
                    </div>
                    <div className="flex flex-col items-center group relative">
                        <div className="relative w-28 h-28 md:w-48 md:h-48 rounded-full bg-white border border-gray-200 shadow-[0_15px_40px_-5px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:scale-105 z-10">
                            <div className="w-full h-full rounded-full bg-white p-[3px]">
                                <div className="w-full h-full rounded-full bg-slate-50 flex flex-col items-center justify-evenly py-2 md:py-3 shadow-inner">
                                    <div className="flex flex-col items-center leading-none mt-1">
                                        <span className="text-[16px] md:text-[26px] font-bold tracking-tight text-slate-600">
                                            ₹49.26
                                        </span>
                                        <span className="text-[10px] md:text-sm font-bold uppercase mt-0.5 text-slate-600">
                                            Cr
                                        </span>
                                    </div>
                                    <div className="relative w-16 h-16 md:w-32 md:h-32 flex items-center justify-center -my-3">
                                        <img alt="Equity" className="w-full h-full object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110 " 
                                        src="/equity.png"/>
                                    </div>
                                    <span className="text-[12px] md:text-[20px] font-medium tracking-widest text-slate-400 mb-1">
                                        Equity
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="-mt-3 text-[12px] md:text-[18px] font-medium px-3 md:px-4 py-1 md:py-1.5 rounded-full border shadow-md z-20 bg-white text-slate-600 border-gray-100 group-hover:translate-y-1 transition-transform">
                            @15% Return
                        </div>
                    </div>
                </div>

      </div>
    </section>
  );
}


