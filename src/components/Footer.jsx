export default function Footer() {
  return (
    // <footer className="bg-black text-white p-10 text-center">
    //   DreamLadder © 2026
    // </footer>

      <footer className="bg-[#faf9f6] text-gray-700 pt-16 pb-8 text-[18px] font-sans border-t border-gray-200 pr-10">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            <div className="flex flex-col items-start">
              <div className="w-40 mb-6">
                 <a className="flex-shrink-0 cursor-pointer pt-2 pb-1" href="/" >
                    <img alt="DreamLadder" className="h-24  w-auto" src="/logo.png"/>
                    <h1 className="font-bold text-red-600 ml-2 text-[16px]">clone</h1>
                 </a>
              </div>

              <div className="flex space-x-3 mb-6 text-gray">
                
                 {/* <!-- Facebook --> */}
                <a href="https://www.facebook.com/DreamLadderCapital" target="_blank" rel="noopener noreferrer"> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                    className="lucide lucide-facebook cursor-pointer hover:text-[#f88f2e]" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z">
                    </path>
                 </svg> 
                </a>

                {/* <!-- Linkedin --> */}
                <a href="https://www.linkedin.com/company/dreamladder-capital/" target="_blank" rel="noopener noreferrer"> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                    className="lucide lucide-linkedin cursor-pointer hover:text-[#f88f2e]" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                    </path>
                    <rect width="4" height="12" x="2" y="9">
                    </rect>
                    <circle cx="4" cy="4" r="2">
                    </circle>
                  </svg>
               </a>

                  {/* <!-- Youtube --> */}
                <a href="https://www.youtube.com/@DreamLadderCapital" target="_blank" rel="noopener noreferrer">
                   <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" 
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                     className="lucide lucide-youtube cursor-pointer hover:text-[#f88f2e]" aria-hidden="true">
                     <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17">
                     </path>
                     <path d="m10 15 5-3-5-3z">
                     </path>
                    </svg> 
                 </a>
                
                  {/* <!-- Twitter --> */}
                <a href="https://x.com/SadaySinha15" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                    className="lucide lucide-twitter cursor-pointer hover:text-[#f88f2e]" aria-hidden="true">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z">
                    </path>
                  </svg> 
               </a>

                  {/* <!-- Instagram --> */}
               <a href="https://www.instagram.com/dreamladdercapital" target="_blank" rel="noopener noreferrer">
                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                    className="lucide lucide-instagram cursor-pointer hover:text-[#f88f2e]" aria-hidden="true">
                   <rect width="20" height="20" x="2" y="2" rx="5" ry="5">
                   </rect>
                   <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z">
                   </path>
                   <line x1="17.5" x2="17.51" y1="6.5" y2="6.5">
                   </line>
                  </svg>
               </a>

              </div>

              <div className="flex gap-3">
                <a 
                  href="https://play.google.com/store/search?q=dreamladder+capital&amp;&amp;pli=1&amp;c=apps#038;c=apps&amp;hl=en_IN" 
                  target="_blank" rel="noopener noreferrer">
                  <img alt="Google Play" className="h-6 cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"/>
                </a>
                
                <a 
                  href="https://apps.apple.com/in/app/dreamladder-capital/id1527793478" 
                  target="_blank" rel="noopener noreferrer">
                  <img alt="App Store" className="h-6 cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"/>
                </a>
              </div>

            </div>

            <div>
              <h3 className="text-[19px] font-semibold text-gray-900 mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li className="footer-btn">
                  <a href="https://dreamladdercapital.my-portfolio.co.in/app/#/login" target="_blank" rel="noopener noreferrer" 
                    className="text-[16px] hover:text-red-600 transition-colors">
                     Client Login
                  </a>
                </li>
                <li className="text-[16px] hover:text-red-600 footer-btn cursor-pointer flex items-center gap-2 relative">
                  Download
                </li>
                <li className="text-[16px] hover:text-red-600 footer-btn cursor-pointer flex items-center gap-2 relative">
                  Blogs
                </li>
                <li>
                  <a className="text-[16px] hover:text-red-600 footer-link" href="/calculator" data-discover="true">
                    Financial Calculator
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-[19px] font-semibold text-gray-900 mb-6">
                Our Products
              </h3>
              <ul className="space-y-3">
                <li className="footer-btn">
                  <a className="hover:text-red-600 transition-colors" href="/mutual-funds" data-discover="true">
                     Mutual Fund
                  </a>
                </li>
                <li className="footer-btn">
                  <a className="hover:text-red-600 transition-colors" href="/pms--aif" data-discover="true">
                    PMS / AIF
                  </a>
                </li>
                <li className="footer-btn">
                  <a className="hover:text-red-600 transition-colors" href="/insurance" data-discover="true">
                     Insurance
                  </a>
               </li>
               <li className="footer-btn">
                 <a className="hover:text-red-600 transition-colors" href="/structured-products" data-discover="true">
                   Structured Products
                 </a>
               </li>
            </ul>
            </div>

            <div>
              <h3 className="text-[19px] font-semibold text-gray-900 mb-6">
                Financial Goal
              </h3>
              <ul className="space-y-3">
                <li className="footer-btn">
                  <a className="hover:text-red-600 transition-colors" href="/calculator" data-discover="true">
                    Education
                  </a>
                </li>
                <li className="footer-btn">
                  <a className="hover:text-red-600 transition-colors" href="/calculator" data-discover="true">
                    Marriage
                  </a>
                </li>
                <li className="footer-btn">
                  <a className="hover:text-red-600 transition-colors" href="/calculator" data-discover="true">
                    Retirement
                  </a>
                </li>
                <li className="footer-btn">
                  <a className="hover:text-red-600 transition-colors" href="/calculator" data-discover="true">
                    SIP
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[19px] font-semibold text-gray-900 mb-6">
                Reach Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                   className="lucide lucide-phone text-red-500 w-5 h-5 flex-shrink-0" aria-hidden="true">
                   <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
                   </path>
                  </svg>
                  <span className="whitespace-nowrap">
                    +91 89-0808-2222
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                   className="lucide lucide-mail text-red-500 w-5 h-5 flex-shrink-0" aria-hidden="true">
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7">
                    </path>
                    <rect x="2" y="4" width="20" height="16" rx="2">
                    </rect>
                  </svg>
                  <span className="break-all lg:break-normal">
                    info@dreamladdercapital.com
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                   className="lucide lucide-map-pin text-red-500 w-5 h-5 mt-1 flex-shrink-0" aria-hidden="true">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                    </path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div className="leading-tight">
                    <p className="font-bold whitespace-nowrap">
                      DreamLadder Capital
                    </p>
                    <p>#20, 10th Floor,</p>
                    <p className="whitespace-nowrap">
                      R. City Offices, Ghatkopar (W)
                    </p>
                    <p>Mumbai – 86</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-gray-300 pt-10 mt-10">
            <div className="text-[12px] text-gray-500 leading-relaxed text-justify space-y-4">
              <p>
                <span className="font-bold text-gray-700">
                  Risk Factors –
                </span> 
                Investments in Mutual Funds are subject to Market Risks. Read all scheme related documents carefully before investing. Mutual Fund Schemes do not assure or guarantee any returns. 
                Past performances of any Mutual Fund Scheme may or may not be sustained in future. There is no guarantee that the investment objective of any suggested scheme shall be achieved. 
                All existing and prospective investors are advised to check and evaluate the Exit loads and other cost structure (TER) applicable at the time of making the investment before finalizing on any investment decision for Mutual Funds schemes.
                 We deal in Regular Plans only for Mutual Fund Schemes and earn a Trailing Commission on client investments. Disclosure For Commission earnings is made to clients at the time of investments. 
                 Option of Direct Plan for every Mutual Fund Scheme is available to investors offering advantage of lower expense ratio. We are not entitled to earn any commission on Direct plans. Hence we do not deal in Direct Plans.
              </p>
              <div className="text-center pt-4 border-t border-gray-200/50">
                <p className="font-semibold text-gray-600">
                  AMFI Registered Mutual Funds Distributor | ARN-143182 | Initial Date of Registration: 04/04/2018 | Validity: 03/04/2027
                </p>
                <p className="font-semibold text-gray-600 mt-1">
                  APRN Code: APRN05201 | Validity: 06/04/2028
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 pb-4 text-center">
            <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-2 text-[13px] text-gray-600 font-medium">
              <span>©2026 DreamLadder Capital.</span>
              <a className="hover:text-red-600 transition-colors" href="/privacy-policy" data-discover="true">
                Privacy Policy
              </a>
              <span className="text-gray-300">|</span>
              <a className="hover:text-red-600 transition-colors" href="/disclaimer" data-discover="true">
                Disclaimer
              </a>
              <span className="text-gray-300">|</span>
              <a className="hover:text-red-600 transition-colors" href="/disclosure" data-discover="true">
               Disclosure
              </a>
              <span className="text-gray-300">|</span>
              <a href="https://www.sebi.gov.in/filings/mutual-funds.html" target="_blank" rel="noopener noreferrer" 
                className="hover:text-red-600 transition-colors">
                  SID/SAI/KIM
              </a>
              <span className="text-gray-300">|</span>
              <a href="https://www.amfiindia.com/Themes/Theme1/downloads/RevisedCodeofConductforMutualFundDistributors-April2022.pdf " target="_blank" rel="noopener noreferrer" 
               className="hover:text-red-600 transition-colors">
                Code of Conduct
              </a>
              <span className="text-gray-300">|</span>
              <a href="https://www.sebi.gov.in/sebiweb/home/HomeAction.do?doListing=yes&amp;sid=1&amp;ssid=7&amp;smid=0" target="_blank" rel="noopener noreferrer" 
               className="hover:text-red-600 transition-colors">
                SEBI Circulars
              </a>
              <span className="text-gray-300">|</span>
              <a href="https://www.amfiindia.com/investor-corner/knowledge-center/risks-in-mutual-funds.html" target="_blank" rel="noopener noreferrer" 
               className="hover:text-red-600 transition-colors">
                 AMFI Risk Factors
              </a>
            </div>
          </div>

        </div>

        <style>
         
        </style>
    </footer>

    
  );
}