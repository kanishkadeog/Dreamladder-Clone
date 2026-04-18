export default function Calculator() {
    return(

        <section className="py-6 md:py-16">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="font-syne text-[24px] md:text-[32px] font-thin text-black/70 mb-2 md:mb-4 leading-[1.1] whitespace-pre-line tracking-tighter">
                      Calculators
                    </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
                    <div className="group cursor-pointer relative overflow-hidden rounded-2xl md:rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 aspect-[5/4]">
                      <div className="absolute inset-0 bg-white transition-transform duration-700">
                      </div>
                      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-2 md:p-4">
                         <img alt="Lumpsum" className="w-20 h-20 md:w-44 md:h-44 object-contain mb-2 md:mb-4 drop-shadow-md group-hover:scale-110 transition-transform duration-300" 
                         src="/lumpsum.png"/>
                         <h3 className="text-[14px] md:text-[26px] font-medium text-slate-900 tracking-wider text-center drop-shadow-sm px-2">
                            Lumpsum
                         </h3>
                      </div>
                    </div>
                    <div className="group cursor-pointer relative overflow-hidden rounded-2xl md:rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 aspect-[5/4]">
                      <div className="absolute inset-0 bg-white transition-transform duration-700">
                      </div>
                      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-2 md:p-4">
                         <img alt="SIP" className="w-24 h-24 md:w-56 md:h-56 object-contain mb-2 md:mb-4 drop-shadow-md group-hover:scale-110 transition-transform duration-300" 
                           src="/sip1.png"/>
                         <h3 className="text-[14px] md:text-[26px] font-medium text-slate-900 tracking-wider text-center drop-shadow-sm px-2">
                            SIP
                         </h3>
                      </div>
                    </div>
                    <div className="group cursor-pointer relative overflow-hidden rounded-2xl md:rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 aspect-[5/4]">
                       <div className="absolute inset-0 bg-white transition-transform duration-700">
                        </div>
                        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-2 md:p-4">
                             <img alt="SIP Step Up" className="w-20 h-20 md:w-44 md:h-44 object-contain mb-2 md:mb-4 drop-shadow-md group-hover:scale-110 transition-transform duration-300" 
                               src="/sipstepup.png"/>
                              <h3 className="text-[14px] md:text-[26px] font-medium text-slate-900 tracking-wider text-center drop-shadow-sm px-2">
                                SIP Step Up
                              </h3>
                         </div>
                    </div>
                    <div className="group cursor-pointer relative overflow-hidden rounded-2xl md:rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 aspect-[5/4]">
                      <div className="absolute inset-0 bg-white transition-transform duration-700">
                      </div>
                      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-2 md:p-4">
                          <img alt="SIP Delay" className="w-20 h-20 md:w-44 md:h-44 object-contain mb-2 md:mb-4 drop-shadow-md group-hover:scale-110 transition-transform duration-300" 
                           src="sipdelay.png"/>
                          <h3 className="text-[14px] md:text-[26px] font-medium text-slate-900 tracking-wider text-center drop-shadow-sm px-2">
                            SIP Delay
                          </h3>
                      </div>
                  </div>
                  <div className="group cursor-pointer relative overflow-hidden rounded-2xl md:rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 aspect-[5/4]">
                     <div className="absolute inset-0 bg-white transition-transform duration-700">
                     </div>
                     <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-2 md:p-4">
                          <img alt="Retirement" className="w-20 h-20 md:w-44 md:h-44 object-contain mb-2 md:mb-4 drop-shadow-md group-hover:scale-110 transition-transform duration-300" 
                           src="/retire.png"/>
                           <h3 className="text-[14px] md:text-[26px] font-medium text-slate-900 tracking-wider text-center drop-shadow-sm px-2">
                             Retirement
                           </h3>
                       </div>
                  </div>
                  <div className="group cursor-pointer relative overflow-hidden rounded-2xl md:rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 aspect-[5/4]">
                    <div className="absolute inset-0 bg-white transition-transform duration-700">
                    </div>
                    <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-2 md:p-4">
                         <img alt="Marriage" className="w-20 h-20 md:w-44 md:h-44 object-contain mb-2 md:mb-4 drop-shadow-md group-hover:scale-110 transition-transform duration-300" 
                         src="/marrige.png"/>
                         <h3 className="text-[14px] md:text-[26px] font-medium text-slate-900 tracking-wider text-center drop-shadow-sm px-2">
                            Marriage
                         </h3>
                        </div>
                    </div>
                    <div className="group cursor-pointer relative overflow-hidden rounded-2xl md:rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 aspect-[5/4]">
                      <div className="absolute inset-0 bg-white transition-transform duration-700">
                      </div>
                      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-2 md:p-4">
                          <img alt="Education" className="w-20 h-20 md:w-44 md:h-44 object-contain mb-2 md:mb-4 drop-shadow-md group-hover:scale-110 transition-transform duration-300" 
                            src="/education.png"/>
                            <h3 className="text-[14px] md:text-[26px] font-medium text-slate-900 tracking-wider text-center drop-shadow-sm px-2">
                                Education
                            </h3>
                        </div>
                    </div>
                    <div className="group cursor-pointer relative overflow-hidden rounded-2xl md:rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 aspect-[5/4]">
                       <div className="absolute inset-0 bg-white transition-transform duration-700">
                        </div>
                        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-2 md:p-4">
                             <img alt="EMI / Loan" className="w-20 h-20 md:w-44 md:h-44 object-contain mb-2 md:mb-4 drop-shadow-md group-hover:scale-110 transition-transform duration-300" 
                             src="/loanemi.png"/>
                             <h3 className="text-[14px] md:text-[26px] font-medium text-slate-900 tracking-wider text-center drop-shadow-sm px-2">
                                EMI / Loan
                             </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

       
    );
}