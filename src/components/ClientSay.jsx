"use client";
import { useState, useEffect } from "react";

export default function ClientSay() {

  const [index, setIndex] = useState(0);
  const totalSlides = 2;

  // ✅ Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 md:py-20 bg-white">

      <div className="max-w-7xl mx-auto px-4 md:px-6 sm:px-12 lg:px-24">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-16">
          <h3 className="text-[24px] md:text-[40px] font-[450] text-gray-900 tracking-tight">
            What clients say about us
          </h3>
          <div className="w-20 h-1 bg-purple-600 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

          {/* LEFT IMAGE */}
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
            <img
              src="/testiSideImg.png"
              className="w-[280px] md:w-[450px] lg:w-full max-w-[520px]"
            />
          </div>

          {/* SLIDER */}
          <div className="w-full lg:w-[60%] relative">

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >

                {/* SLIDE 1 */}
                {/* <div className="w-full flex-shrink-0 px-2">
                  <div className="bg-white border shadow-2xl rounded-2xl p-8 md:p-12 min-h-[480px] flex flex-col justify-center">

                    <p className="italic mb-6 text-slate-700 leading-8">
                      "Associated with DreamLadder Capital since inception, I value their disciplined asset allocation, consistent reviews, and transparent communication that bring clarity and confidence to my investments."
                    </p>

                    <h4 className="font-bold text-xl">Puja Rai</h4>
                    <p className="text-purple-600">CXO & Author | Mumbai</p>

                  </div>
                </div> */}

                <div className="w-full flex-shrink-0 px-2">
                                    <div className="bg-white border border-gray-100 shadow-2xl rounded-2xl p-8 md:p-12 min-h-[480px] flex flex-col justify-center">
                                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                                            <div className="md:col-span-7">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                                                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                                                 className="lucide lucide-quote w-12 h-12 text-purple-600 opacity-20 mb-4" aria-hidden="true">
                                                    <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                                                    <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                                                </svg>
                                                <div className="min-h-[160px] md:min-h-[200px]">
                                                    <p className="text-[16px] md:text-[19px] text-slate-700 leading-relaxed italic mb-8">
                                                        "Associated with DreamLadder Capital since inception, I value their disciplined asset allocation, consistent reviews, and transparent communication that bring clarity and confidence to my investments."
                                                    </p>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 text-[20px] md:text-[24px]">
                                                        Puja Rai
                                                    </h4>
                                                    <p className="font-medium text-purple-600 text-[14px] md:text-[16px] uppercase tracking-wide mt-1">
                                                        CXO &amp; Author | Mumbai
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="md:col-span-5 flex flex-col items-center justify-center pt-8 md:pt-0">
                                                <div className="relative p-1 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl mb-4">
                                                   <img alt="Puja Rai" 
                                                     className="w-32 h-32 md:w-44 md:h-44 lg:w-48 lg:h-48 object-cover rounded-xl border-4 border-white shadow-md" 
                                                     src="/puja.jpeg"/>
                                                </div>
                                                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-bold text-base md:text-lg group">
                                                    Meet Puja
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" 
                                                       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                                                       className="lucide lucide-arrow-right ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true">
                                                        <path d="M5 12h14"></path>
                                                        <path d="m12 5 7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                {/* SLIDE 2 */}
                {/* <div className="w-full flex-shrink-0 px-2">
                  <div className="bg-white border shadow-2xl rounded-2xl p-8 md:p-12 min-h-[480px] flex flex-col justify-center">

                    <p className="italic mb-6 text-slate-700 leading-8">
                      "What I appreciate most is their focus on long-term wealth creation rather than short-term noise. The team ensures my portfolio remains aligned with my financial goals and life stage."
                    </p>

                    <h4 className="font-bold text-xl">Ravi Shekhar</h4>
                    <p className="text-purple-600">Radiologist & HOD | NCR</p>

                  </div>
                </div> */}

                <div className="w-full flex-shrink-0 px-2">
                                    <div className="bg-white border border-gray-100 shadow-2xl rounded-2xl p-8 md:p-12 min-h-[480px] flex flex-col justify-center">
                                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                                            <div className="md:col-span-7">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                                                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                                                  className="lucide lucide-quote w-12 h-12 text-purple-600 opacity-20 mb-4" aria-hidden="true">
                                                    <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                                                    <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                                                </svg>
                                                <div className="min-h-[160px] md:min-h-[200px]">
                                                    <p className="text-[16px] md:text-[19px] text-slate-700 leading-relaxed italic mb-8">
                                                        "What I appreciate most is their focus on long-term wealth creation rather than short-term noise. The team ensures my portfolio remains aligned with my financial goals and life stage."
                                                    </p>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 text-[20px] md:text-[24px]">
                                                        Ravi Shekhar
                                                    </h4>
                                                    <p className="font-medium text-purple-600 text-[14px] md:text-[16px] uppercase tracking-wide mt-1">
                                                        Radiologist &amp; HOD | NCR
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="md:col-span-5 flex flex-col items-center justify-center pt-8 md:pt-0">
                                                <div className="relative p-1 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl mb-4">
                                                  <img alt="Ravi Shekhar" className="w-32 h-32 md:w-44 md:h-44 lg:w-48 lg:h-48 object-cover rounded-xl border-4 border-white shadow-md" 
                                                    src="/ravi.jpeg"/>
                                                </div>
                                                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-bold text-base md:text-lg group">
                                                    Meet Ravi
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" 
                                                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                                                      className="lucide lucide-arrow-right ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true">
                                                        <path d="M5 12h14"></path>
                                                        <path d="m12 5 7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

              </div>
            </div>

            {/* DOT BUTTONS */}
            <div className="flex justify-center mt-8 md:mt-10 gap-2">

              <button
                onClick={() => setIndex(0)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === 0
                    ? "w-10 bg-purple-700"
                    : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />

              <button
                onClick={() => setIndex(1)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === 1
                    ? "w-10 bg-purple-700"
                    : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

