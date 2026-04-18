"use client";
import { useState } from "react";
import Link from "next/link";

const MobileMenu = ({ setOpen }) => {
  const [active, setActive] = useState(null);

  return (
    // <div className="fixed top-0 left-0 w-full h-full bg-white z-50 p-5 overflow-y-auto">
  <div className="block md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 transition-all duration-300 ease-in-out">

      

      {/* Menu */}
      {/* <div className="flex flex-col gap-4 text-[16px] font-medium text-gray-800"> */}
      <div className="flex flex-col px-6 py-4 space-y-4 max-h-[80vh] overflow-y-auto">

        {/* WE */}
        <div>
          <button
            onClick={() => setActive(active === "we" ? null : "we")}
            // className="flex justify-between w-full"
            className="flex justify-between items-center w-full text-[15px] font-medium text-gray-800"
          >
            <span>We</span>
            <span className={`material-symbols-outlined transition-transform ${active === "we" ? "rotate-180" : ""}`}>
              expand_more
            </span>
          </button>

          {active === "we" && (
            // <div className="pl-4 mt-2 flex flex-col gap-2 text-gray-600 border-l-2 border-red-500">
            <div className="block mt-2 pl-4 space-y-2 border-l-2 border-[#e31e24]">
              <Link href="/about"
              className="block text-[13px] text-gray-600 py-1">About Us</Link>
              <Link href="/contact"
              className="block text-[13px] text-gray-600 py-1">Connect</Link>
            </div>
          )}
        </div>

        {/* SERVICES */}
        <div>
          <button
            onClick={() => setActive(active === "services" ? null : "services")}
            // className="flex justify-between w-full"
            className="flex justify-between items-center w-full text-[15px] font-medium text-gray-800"
          >
            <span>Services</span>
            <span className={`material-symbols-outlined transition-transform ${active === "services" ? "rotate-180" : ""}`}>
              expand_more
            </span>
          </button>

          {active === "services" && (
            // <div className="pl-4 mt-2 flex flex-col gap-2 text-gray-600">
            <div className="block mt-2 pl-4 space-y-2 border-l-2 border-[#e31e24]">
              <Link href="/WhatWeOffer"
              className="block text-[13px] text-gray-600 py-1">What we offer</Link>
              <Link href="/who-we-serve"
              className="block text-[13px] text-gray-600 py-1">Who we serve</Link>
              <Link href="/personalised-portfolio"
              className="block text-[13px] text-gray-600 py-1">Personalised Portfolio</Link>
              
            </div>
          )}
        </div>

        {/* INSIGHTS */}
        <div>
          <button
            onClick={() => setActive(active === "insights" ? null : "insights")}
            // className="flex justify-between w-full"
            className="flex justify-between items-center w-full text-[15px] font-medium text-gray-800"
          >
            <span>Insights</span>
            <span className={`material-symbols-outlined transition-transform ${active === "insights" ? "rotate-180" : ""}`}>
              expand_more
            </span>
          </button>

          {active === "insights" && (
            // <div className="pl-4 mt-2 flex flex-col gap-2 text-gray-600">
            <div className="block mt-2 pl-4 space-y-2 border-l-2 border-[#e31e24]">
              <Link href="/blogs"
              className="block text-[13px] text-gray-600 py-1">Blogs</Link>
              <Link href="/media"
              className="block text-[13px] text-gray-600 py-1">Media</Link>
              <Link href="/calculator"
              className="block text-[13px] text-gray-600 py-1">Calculator</Link>
            </div>
          )}
        </div>

        {/* CONNECT */}
        <Link href="/contact"
        className="block text-[15px] font-medium text-gray-800">Connect
        </Link>

        {/* Buttons */}
        <div 
        // className="mt-6 flex flex-col gap-4"
         className="pt-4 flex flex-col space-y-3"
        >
          <Link
            href="/login"
            // className="bg-red-500 text-white text-center py-3 rounded-md"
            className="text-center px-5 py-2 text-[15px] font-bold text-white bg-[#e31e24] rounded hover:bg-[#434242] transition-colors duration-300"
          >
            Login
          </Link>

          <Link
            href="/signup"
            // className="bg-red-500 text-white text-center py-3 rounded-md"
            className="text-center px-5 py-2 text-[15px] font-bold text-white bg-[#e31e24] rounded hover:bg-[#434242] transition-colors duration-300"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </div>
  );
};

export default MobileMenu;