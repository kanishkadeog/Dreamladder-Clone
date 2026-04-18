export default function Subscribe() {
    return(
     
             <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                    <div className="relative rounded-xl overflow-hidden py-10 px-6 text-center shadow-sm border border-slate-100 bg-gray-400/70" >
                        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] -z-10">
                        </div>
                        <h4 className="text-[20px] md:text-[24px] text-slate-900 font-medium mb-6">
                            Subscribe to KnowledgeBytes
                        </h4>
                        <div className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3">
                            <div className="relative flex-grow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" 
                                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                                  className="lucide lucide-mail absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true">
                                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                </svg>
                                <input placeholder="Email Address" 
                                  className="w-full pl-11 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all text-[15px]" type="email"/>
                            </div>
                            <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-red-700 transition-colors shadow-md text-[15px]" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" 
                                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                                  className="lucide lucide-check" aria-hidden="true">
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>

    );
}