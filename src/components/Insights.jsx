export default function Insights() {
    return(
       
        <section className="py-6 relative overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
                <div className="text-center mb-6">
                    <h3 className="text-[24px] md:text-[40px] font-[450] text-gray-900 tracking-tight">
                        Latest Insights
                    </h3>
                    <p className="text-[14px] md:text-[18px] text-gray-600 mt-1 font-medium">
                        Market perspective and Financial wisdom to keep you ahead.
                    </p>
                </div>
                <div className="mb-6">
                    <h3 className="text-lg font-medium text-slate-800 mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-5 bg-red-600 rounded-full">
                        </span>
                        Featured Videos
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="relative rounded-xl overflow-hidden shadow-md border border-gray-200 bg-black aspect-video group hover:scale-[1.02] transition-transform duration-300">
                            <iframe className="w-full h-full" 
                            src="https://www.youtube.com/embed/JGNfq2gg-vo?mute=1&amp;loop=1&amp;playlist=JGNfq2gg-vo&amp;rel=0" 
                            title="DreamLadder Capital - Why Should You Invest Through Us" allow="accelerometer; 
                            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="">
                            </iframe>
                        </div>
                        <div className="relative rounded-xl overflow-hidden shadow-md border border-gray-200 bg-black aspect-video group hover:scale-[1.02] transition-transform duration-300">
                            <iframe className="w-full h-full" 
                            src="https://www.youtube.com/embed/nuj8ZoFbGEM?mute=1&amp;loop=1&amp;playlist=nuj8ZoFbGEM&amp;rel=0" 
                            title="DreamLadder Equity Market View" allow="accelerometer; 
                            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="">
                            </iframe>
                        </div>
                        <div className="relative rounded-xl overflow-hidden shadow-md border border-gray-200 bg-black aspect-video group hover:scale-[1.02] transition-transform duration-300">
                            <iframe className="w-full h-full" 
                            src="https://www.youtube.com/embed/xEqbYSU3F_I?mute=1&amp;loop=1&amp;playlist=xEqbYSU3F_I&amp;rel=0" 
                            title="DreamLadder Equity Market View: Oct 2024" allow="accelerometer; 
                            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="">
                            </iframe>
                        </div>
                        <div className="relative rounded-xl overflow-hidden shadow-md border border-gray-200 bg-black aspect-video group hover:scale-[1.02] transition-transform duration-300">
                            <iframe className="w-full h-full" 
                            src="https://www.youtube.com/embed/22glfK-1098?mute=1&amp;loop=1&amp;playlist=22glfK-1098&amp;rel=0" 
                            title="DreamLadder Equity Market View: Oct 2024 (Duplicate)" allow="accelerometer; 
                            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="">
                            </iframe>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-medium text-slate-800 mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-5 bg-red-600 rounded-full">
                        </span>
                        Latest Blogs
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 group cursor-pointer flex flex-col h-full">
                           <div className="h-32 overflow-hidden relative">
                              <img alt="Are you confused about owning Large Cap or Mid/Small Cap..." 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                src="/blog1.png"/>
                            </div>
                            <div className="p-4 flex flex-col flex-1">
                                <div className="flex items-center text-[12px] text-gray-500 mb-2 space-x-3 font-normal tracking-wide">
                                    <span className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" 
                                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                                          className="lucide lucide-calendar mr-1 text-red-500" aria-hidden="true">
                                            <path d="M8 2v4"></path>
                                            <path d="M16 2v4"></path>
                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                            <path d="M3 10h18"></path>
                                        </svg> 
                                        July 5, 2022
                                    </span>
                                    <span className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" 
                                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                                          className="lucide lucide-folder mr-1 text-red-500" aria-hidden="true">
                                            <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                        </svg> 
                                        Mutual Funds
                                    </span>
                                </div>
                                <h4 className="font-normal text-slate-800 text-[18px] leading-tight group-hover:text-red-600 transition-colors line-clamp-2">
                                    Are you confused about owning Large Cap or Mid/Small Cap...
                                </h4>
                            </div>
                        </div>
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 group cursor-pointer flex flex-col h-full">
                          <div className="h-32 overflow-hidden relative">
                             <img alt="Mutual Funds: Foundations of smart investing" 
                             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                             src="/blog2.png"/>
                         </div>
                         <div className="p-4 flex flex-col flex-1">
                            <div className="flex items-center text-[12px] text-gray-500 mb-2 space-x-3 font-normal tracking-wide">
                                <span className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" 
                                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                                      className="lucide lucide-calendar mr-1 text-red-500" aria-hidden="true">
                                        <path d="M8 2v4"></path>
                                        <path d="M16 2v4"></path>
                                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                        <path d="M3 10h18"></path>
                                    </svg> 
                                    April 27, 2022
                                </span>
                                <span className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" 
                                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                                     className="lucide lucide-folder mr-1 text-red-500" aria-hidden="true">
                                        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                    </svg> 
                                    Mutual Funds
                                </span>
                            </div>
                            <h4 className="font-normal text-slate-800 text-[18px] leading-tight group-hover:text-red-600 transition-colors line-clamp-2">
                                Mutual Funds: Foundations of smart investing
                            </h4>
                        </div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 group cursor-pointer flex flex-col h-full">
                      <div className="h-32 overflow-hidden relative">
                         <img alt="Power of Compounding: 8th Wonder of the world" 
                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                         src="/blog3.png"/>
                      </div>
                      <div className="p-4 flex flex-col flex-1">
                        <div className="flex items-center text-[12px] text-gray-500 mb-2 space-x-3 font-normal tracking-wide">
                            <span className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" 
                                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                                 className="lucide lucide-calendar mr-1 text-red-500" aria-hidden="true">
                                    <path d="M8 2v4"></path>
                                    <path d="M16 2v4"></path>
                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                    <path d="M3 10h18"></path>
                                </svg> 
                                March 4, 2022
                            </span>
                            <span className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" 
                                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                                  className="lucide lucide-folder mr-1 text-red-500" aria-hidden="true">
                                    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                </svg>
                                 Mutual Funds
                            </span>
                        </div>
                        <h4 className="font-normal text-slate-800 text-[18px] leading-tight group-hover:text-red-600 transition-colors line-clamp-2">
                            Power of Compounding: 8th Wonder of the world
                        </h4>
                    </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 group cursor-pointer flex flex-col h-full">
                  <div className="h-32 overflow-hidden relative">
                     <img alt="Will &amp; Estate Planning: The Foundation of Legacy" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      src="/blog4.png"/>
                 </div>
                 <div className="p-4 flex flex-col flex-1">
                     <div className="flex items-center text-[12px] text-gray-500 mb-2 space-x-3 font-normal tracking-wide">
                         <span className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" 
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                             className="lucide lucide-calendar mr-1 text-red-500" aria-hidden="true">
                                <path d="M8 2v4"></path>
                                <path d="M16 2v4"></path>
                                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                <path d="M3 10h18"></path>
                            </svg> 
                            March 4, 2022
                         </span>
                         <span className="flex items-center">
                             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" 
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                               className="lucide lucide-folder mr-1 text-red-500" aria-hidden="true">
                                <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                             </svg> 
                             Mutual Funds
                          </span>
                     </div>
                     <h4 className="font-normal text-slate-800 text-[18px] leading-tight group-hover:text-red-600 transition-colors line-clamp-2">
                        Will &amp; Estate Planning: The Foundation of Legacy
                     </h4>
                 </div>
             </div>
         </div>
     </div>
 </div>
</section>
       
    );
}