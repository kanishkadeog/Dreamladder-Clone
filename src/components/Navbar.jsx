


// components/Navbar.jsx
"use client";
import { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { div } from "framer-motion/client";



const Navbar = () => {

  const [open, setOpen] = useState(false);
  
  return (
    <nav className=" top-0 left-0 relative  bg-transparent z-50 ">
      <div className="  max-w-7xl mx-auto flex items-center justify-between w-full px-6 sm:px-12 lg:px-24 " >
        <a className="flex-shrink-0 cursor-pointer pt-2 pb-1" href="/" >
          <img alt="DreamLadder" className="h-12  w-auto" src="/logo.png"/>
          <h1 className="font-bold text-red-600 ml-2 text-[10px]">clone</h1>
        </a>
        <div className="flex items-center ">
          {/* Desktop */}
          <div className="hidden md:flex items-center mr-7 gap-8 text-[14px] ">
            <div 
               style={{
                     position: "relative",
                     display: "inline-block",
                     }}
               onMouseEnter={(e) => {
                     e.currentTarget.querySelector(".dropdownContent").style.display =
                      "block";
                     }}
               onMouseLeave={(e) => {
                     e.currentTarget.querySelector(".dropdownContent").style.display =
                       "none";
                     }}
             >
              <button 
                 className="group flex cursor-pointer items-center font-medium text-gray-800 hover:text-[#e31e24] transition-colors "

               >
                
                We
                
                <span className="material-symbols-outlined ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:rotate-180 ease-in-out">
                  keyboard_arrow_down
                </span>
              </button>
              <div
                 className="dropdownContent mt-0.5 py-1 w-48 h-auto  border border-gray-100 rounded-xl duration-400 "
                 style={{
                     display: "none",
                     position: "absolute",
                     backgroundColor: "white",
                    
                     boxShadow: "0px 8px 16px rgba(0,0,0,0.2)",
                     zIndex: 1,
                        }}

                >
                <a 
                 className="block px-4 py-2 text-[14px] font-medium text-gray-800 hover:text-[#e31e24] hover:bg-gray-50 transition-all"
                 href="/about">
                  About Us
                </a>
                <a 
                 className="block px-4 py-2 text-[14px] font-medium text-gray-800 hover:text-[#e31e24] hover:bg-gray-50 transition-all"
                 href="/who-we-serve">
                  Who We Serve
                </a>
              </div>
            </div>
            <div
               style={{
                   position: "relative",
                   display: "inline-block",
                      }}
               onMouseEnter={(e) => {
                    e.currentTarget.querySelector(".dropdownContent").style.display =
                     "block";
                      }}
               onMouseLeave={(e) => {
                    e.currentTarget.querySelector(".dropdownContent").style.display =
                     "none";
                      }}
 
             >
              
              <button
                 className="group flex items-center cursor-pointer  text-[14px] font-medium text-gray-800 hover:text-[#e31e24] transition-colors"

              >
                Services
                <span className="material-symbols-outlined ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:rotate-180 ease-in-out">
                  keyboard_arrow_down
                </span>
              </button>
              <div
                className="dropdownContent  mt-0.5 py-1 w-56 h-auto border border-gray-100 rounded-xl duration-200"
                style={{
                     display: "none",
                     position: "absolute",
                     backgroundColor: "#f1f1f1",
                     boxShadow: "0px 8px 16px rgba(0,0,0,0.2)",
                     zIndex: 1,
                      }}

               >
                <div
                  className="px-4 py-2 "
                  style={{ position: "relative" }}
                  onMouseEnter={(e) => {
                      e.currentTarget.querySelector(".dropupContent").style.display =
                        "block";
                       }}
                  onMouseLeave={(e) => {
                      e.currentTarget.querySelector(".dropupContent").style.display =
                        "none";
                      }}

                >
                  <button
                      className="group flex items-center cursor-pointer  justify-between w-full text-[14px] font-medium text-gray-800 hover:text-[#e31e24] transition-colors"

                   >
                    <span>What We Offer</span>
                     <span className="material-symbols-outlined ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:rotate-180 ease-in-out">
                        keyboard_arrow_down
                     </span>
                  </button>
                  <div 
                    className="dropupContent mt-0.5 py-1 w-48 h-auto  border border-gray-100 rounded-xl duration-200"
                    style={{
                       display: "none",
                       position: "absolute",
                       left: "220px",
                       top: "0",
                       backgroundColor: "#f1f1f1",
                       minWidth: "160px",
                       zIndex: 1,
                        }}

                   >
                    <a  
                      className="block px-4 py-2 text-[14px] font-medium text-gray-800 hover:text-[#e31e24] hover:bg-gray-50 transition-all"
                      href="#">
                      Mutual Funds
                    </a>
                    <a 
                     className="block px-4 py-2 text-[14px] font-medium text-gray-800 hover:text-[#e31e24] hover:bg-gray-50 transition-all"
                     href="#">
                      PMS / AIF
                    </a>
                    <a 
                     className="block px-4 py-2 text-[14px] font-medium text-gray-800 hover:text-[#e31e24] hover:bg-gray-50 transition-all"
                     href="#">
                      Bonds
                    </a>
                    <a 
                     className="block px-4 py-2 text-[14px] font-medium text-gray-800 hover:text-[#e31e24] hover:bg-gray-50 transition-all"
                     href="#">
                      Structured Products
                    </a>
                    <a 
                    className="block px-4 py-2 text-[14px] font-medium text-gray-800 hover:text-[#e31e24] hover:bg-gray-50 transition-all"
                     href="#">
                      Legacy / Estate Planning
                    </a>
                    <a 
                    className="block px-4 py-2 text-[14px] font-medium text-gray-800 hover:text-[#e31e24] hover:bg-gray-50 transition-all"
                     href="#">
                      Insurance
                    </a>
                  </div>
                </div>
                <a
                className="block px-4 py-2 text-[14px] font-medium text-gray-800 hover:text-[#e31e24] hover:bg-gray-50 transition-all"
                href="#">
                  Bespoke Portfolios
                </a>
              </div>
            </div>
            <div
              style={{
                     position: "relative",
                     display: "inline-block",
                     }}
               onMouseEnter={(e) => {
                     e.currentTarget.querySelector(".dropdownContent").style.display =
                      "block";
                     }}
               onMouseLeave={(e) => {
                     e.currentTarget.querySelector(".dropdownContent").style.display =
                       "none";
                     }}
             >
              <button
                 className="group flex items-center cursor-pointer  text-[14px] font-medium text-gray-800 hover:text-[#e31e24] transition-colors"

              >
                Insights
                <span className="material-symbols-outlined ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:rotate-180 ease-in-out">
                  keyboard_arrow_down
                </span>
              </button>
              <div 
                 className="dropdownContent mt-0.5 py-1 w-48 h-auto  border border-gray-100 rounded-xl duration-200"
                 style={{
                     display: "none",
                     position: "absolute",
                     backgroundColor: "#f1f1f1",
                     minWidth: "160px",
                     boxShadow: "0px 8px 16px rgba(0,0,0,0.2)",
                     zIndex: 1,
                        }}

                >
                <a 
                className="block px-4 py-2 text-[14px] font-medium text-gray-800 hover:text-[#e31e24] hover:bg-gray-50 transition-all"
                 href="#">
                  Blogs
                </a>
                <a 
                className="block px-4 py-2 text-[14px] font-medium text-gray-800 hover:text-[#e31e24] hover:bg-gray-50 transition-all"
                 href="#">
                  Media
                </a>
                <a 
                className="block px-4 py-2 text-[14px] font-medium text-gray-800 hover:text-[#e31e24] hover:bg-gray-50 transition-all"
                 href="#">
                  Calculator
                </a>
              </div>
            </div>
            <div>
              <button>
                <Link 
                className="block py-2 text-[14px] cursor-pointer  font-medium text-gray-800 hover:text-[#e31e24] transition-all"
                href="/contact">Connect</Link>
              </button>
            </div>
          </div>
          <div className="hidden md:flex gap-3">
            <button>
              <Link href="/login" className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-gray-500" >Login</Link>
            </button>
            <button>
              <Link href="/signup" className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-gray-500" >Sign Up</Link>
            </button>
          </div>
           {/* ✅ ADD HERE (Mobile only) */}
          <div >
            <button 
               className="md:hidden p-2 text-gray-800 focus:outline-none"
               onClick={() => setOpen(!open)}
            >
              <span className="material-symbols-outlined">
                 {open ? "close" : "dehaze"}
              </span>
           </button>
          </div>
        </div>

        
      </div>

      {open && <MobileMenu setOpen={setOpen} />}


    </nav>
  );
};



export default Navbar;


// ---------ppppppppppppppp_____________________________

// // components/Navbar.jsx
// "use client";
// import Link from 'next/link';


// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 p-4">
//      <div style={{ backgroundColor: "white", padding: "20px" }}>
//       <h2>Hoverable Dropdown</h2>
//       <p>Move the mouse over the button to open the dropdown menu.</p>

//       <div
//         style={{
//           position: "relative",
//           display: "inline-block",
//         }}
//         onMouseEnter={(e) => {
//           e.currentTarget.querySelector(".dropdownContent").style.display =
//             "block";
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.querySelector(".dropdownContent").style.display =
//             "none";
//         }}
//       >
//         <button
//           style={{
//             backgroundColor: "#3498db",
//             color: "white",
//             padding: "16px",
//             fontSize: "16px",
//             border: "none",
//             cursor: "pointer",
//           }}
//         >
//           Dropdown
//         </button>

//         <div
//           className="dropdownContent"
//           style={{
//             display: "none",
//             position: "absolute",
//             backgroundColor: "#f1f1f1",
//             minWidth: "160px",
//             boxShadow: "0px 8px 16px rgba(0,0,0,0.2)",
//             zIndex: 1,
//           }}
//         >
//           <div
//             style={{
//               padding: "12px 16px",
//               position: "relative",
//             }}
//           >
//             Link 1

//             {/* Dropup */}
//             <div
//               style={{ position: "relative" }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.querySelector(".dropupContent").style.display =
//                   "block";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.querySelector(".dropupContent").style.display =
//                   "none";
//               }}
//             >
//               <button
//                 style={{
//                   backgroundColor: "#3498db",
//                   color: "white",
//                   padding: "10px",
//                   fontSize: "14px",
//                   border: "none",
//                   cursor: "pointer",
//                   marginTop: "5px",
//                 }}
//               >
//                 Dropup
//               </button>

//               <div
//                 className="dropupContent"
//                 style={{
//                   display: "none",
//                   position: "absolute",
//                   left: "120px",
//                   top: "0",
//                   backgroundColor: "#f1f1f1",
//                   minWidth: "160px",
//                   zIndex: 1,
//                 }}
//               >
//                 <a style={linkStyle} href="#">
//                   Link 1
//                 </a>
//                 <a style={linkStyle} href="#">
//                   Link 2
//                 </a>
//                 <a style={linkStyle} href="#">
//                   Link 3
//                 </a>
//               </div>
//             </div>
//           </div>

//           <a style={linkStyle} href="#">
//             Link 2
//           </a>
//           <a style={linkStyle} href="#">
//             Link 3
//           </a>
//         </div>
//       </div>
//     </div>
//     </nav>
//   );
// };

// const linkStyle = {
//   color: "black",
//   padding: "12px 16px",
//   textDecoration: "none",
//   display: "block",
// };

// export default Navbar;

// ------------------PPPPPPPPPPP-----------------------------------
// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import MobileMenu from "./MobileMenu";
// import { div } from "framer-motion/client";



// export default function Navbar() {
//     const [open, setOpen] = useState(false);

//   return (

//     // -------------------
//     <div className="relative">
// <nav className=" absolute w-full bg-transparent  z-50">
//      {/* // <nav className="relative w-full bg-white z-[9999]"> */}
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-14 py-4">
//         <a className="flex-shrink-0 cursor-pointer" href="/" >
//           <img alt="DreamLadder" className="h-14  w-auto" src="/logo.png"/>
//           <h1>clone</h1>
//         </a>

//         <div className="flex items-center">
//           {/* Desktop */}
//           <div className="hidden md:flex items-center mr-10 gap-10">
//             <div className="group relative">
//               <button className="flex items-center text-[17px] font-medium text-gray-800 hover:text-[#e31e24] transition-colors">
//                 <span >We</span>
//                 <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0&icon_names=keyboard_arrow_down" />
//                 <span className="material-symbols-outlined ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:rotate-180">
//                   keyboard_arrow_down
//                 </span>
//               </button>
//               <div className="top-full left-0 w-48 absolute hidden group-hover:opacity-100 group-hover:visible group-hover:block bg-white shadow p-3 border border-gray-100 rounded-xl duration-200">
//                 <a className="block px-4 py-2 text-[16px] text-gray-600 hover:bg-gray-50 hover:text-[#e31e24]" href="/about">
//                   About Us
//                 </a>
//                 <a className="block px-4 py-2 text-[16px] text-gray-600 hover:bg-gray-50 hover:text-[#e31e24]" href="/who-we-serve">
//                    Who We Serve
//                 </a>
//               </div>
            
//             </div>

//             {/* ====================== */}

//           <div className="group relative">
//                <button className="flex items-center text-[17px] font-medium text-gray-800 hover:text-[#e31e24] transition-colors">
//                  <span >Services</span>
//                  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0&icon_names=keyboard_arrow_down" />
//                  <span className="material-symbols-outlined ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:rotate-180">
//                   keyboard_arrow_down
//                  </span>
//               </button>
//               <div className="top-full left-0 w-48 absolute hidden group-hover:opacity-100 group-hover:visible group-hover:block bg-white shadow p-3 border border-gray-100 rounded-xl duration-200">
//                 <div className="relative group/sub">
//                   {/* <div class="flex items-center justify-between px-4 py-2 text-[16px] text-gray-600 hover:bg-gray-50 hover:text-[#e31e24] cursor-pointer transition-colors"> */}
//                   <button className="flex items-center justify-between px-4 py-2 text-[16px] font-medium text-gray-600 hover:bg-gray-50 hover:text-[#e31e24] cursor-pointer transition-colors">
//                      What we Offer
//                     <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0&icon_names=keyboard_arrow_down" />
//                      <span className="material-symbols-outlined ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:rotate-180">
//                        keyboard_arrow_down
//                      </span>
//                    </button>
                  
//                    {/* <div className="absolute  top-[-5px] left-full ml-0 w-52 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 py-1" > */}
//                     {/* <div className="  top-[-5px] left-full ml-10 w-56 absolute  group-hover/sub:opacity-100 group-hover/sub:visible  transition-all duration-200 py-1" > */}
//                 {/* the working  */}
//                    <div className="  top-[-5px] left-full ml-10 w-56 absolute group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:block bg-white p-3 shadow border border-gray-100 rounded-xl duration-200 " >
//                    {/* == */}
//                    {/* <div className="top-[-5px] left-full ml-10 w-56 absolute 
//                           hidden opacity-0 invisible 
//                             group-hover/sub:block group-hover/sub:opacity-100 group-hover/sub:visible
//                           bg-white p-3 shadow border border-gray-100 rounded-xl duration-200"> */}
//                     {/* <div className="top-full left-0 w-48 absolute hidden group-hover:opacity-100 group-hover:visible group-hover:block bg-white shadow p-3 border border-gray-100 rounded-xl duration-200"> */}
//                      <ul className=" py-1">
//                        <li>
//                          <a className="block px-4 py-2 text-[16px] text-gray-600 hover:bg-gray-50 hover:text-[#e31e24]  transition-colors" href="/who-we-serve">
//                             Mutual Funds
//                          </a>
//                        </li>
//                        <li>
//                          <a className="block px-4 py-2 text-[16px] text-gray-600 hover:bg-gray-50 hover:text-[#e31e24]" href="/who-we-serve">
//                             PMS / AIF
//                          </a>
//                        </li>
//                        <li>
//                          <a className="block px-4 py-2 text-[16px] text-gray-600 hover:bg-gray-50 hover:text-[#e31e24]" href="/who-we-serve">
//                             Bonds
//                          </a>
//                        </li>
//                        <li>
//                          <a className="block px-4 py-2 text-[16px] text-gray-600 hover:bg-gray-50 hover:text-[#e31e24]" href="/who-we-serve">
//                             Structured Products
//                          </a>
//                        </li>
//                        <li>
//                          <a className="block px-4 py-2 text-[16px] text-gray-600 hover:bg-gray-50 hover:text-[#e31e24]" href="/who-we-serve">
//                             Legacy / Estate Planning
//                          </a>
//                        </li>
//                        <li>
//                          <a className="block px-4 py-2 text-[16px] text-gray-600 hover:bg-gray-50 hover:text-[#e31e24]" href="/who-we-serve">
//                             Insurance
//                          </a>
//                        </li>
//                      </ul>

//                    </div>
//                  </div>

//                  <a className="block px-4 py-2 text-[16px] text-gray-600 hover:bg-gray-50 hover:text-[#e31e24]" href="/about">
//                   Bespoke Portfolios
//                  </a>
//                </div>
//              </div>

//             {/* +++++++++++++++++++++++++ */}

//             {/* (((((((((((()))))))))))) */}
     
//             {/* )))))))))))))))))))))) */}

           

//           <Link href="/contact">Connect</Link>
//         </div>

//         {/* Buttons */}
//         <div className="hidden md:flex gap-3">
//           <Link href="/login" className="bg-red-500 text-white px-4 py-2 rounded-full" >Login</Link>
//           <Link href="/signup" className="bg-red-500 text-white px-4 py-2 rounded-full" >Sign Up</Link>
//         </div>

//         {/* Mobile */}
//         <button onClick={() => setOpen(true)} className="md:hidden">
//           ☰
//         </button>

//       </div>
//     </div>
//       {open && <MobileMenu close={() => setOpen(false)} />}
//     </nav>
//     </div>
//   // ============



    
//   );
// }