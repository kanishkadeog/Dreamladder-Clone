"use client";

export default function WhatWeOffer() {
  const services = [
    "PMS / AIF",
    "Mutual Fund",
    "Bond / Corporate FD",
    "Structured Products",
    "Legacy & Estate Planning",
    "Insurance",
  ];

  return (
    <section className="w-full bg-white py-10 mt-4 px-4 sm:px-8 lg:px-26 ">
      
      {/* TITLE
      <h2 className="text-2xl md:text-4xl font-semibold ">
        What we offer
      </h2> */}

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-6 items-center w-full">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-4 ">

           {/* TITLE */}
      <h2 className="text-2xl md:text-4xl font-semibold ">
        What we offer
      </h2>
          
          {/* IMAGE */}
          <img
            src="/invests.png"
            alt="invest"
            className="max-w-xs w-full"
          />

          {/* TEXT */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-sm">
            Your legacy deserves a solid foundation. DreamLadder Capital helps
            you build lasting wealth through smart, diversified strategies.
          </p>

          {/* PHONE IMAGE */}
          <img
            src="/phone.jpg"
            alt="phone"
            className="w-60"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-3">
          {services.map((item, index) => (
            <div
              key={index}
              className="group rounded-xl bg-gray-200/70 p-3 cursor-pointer transition-all duration-300 ease-out hover:-translate-x-2 hover:shadow-sm text-center"
            >
              
              {/* TITLE */}
              <h3 className="text-base md:text-lg font-medium text-gray-800 transition-colors duration-300 group-hover:text-red-600">
                {item}
              </h3>

              {/* SUBTITLE */}
              <p className="text-xs md:text-sm text-gray-500 mt-1">
                {getSubtitle(item)}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* Subtitle helper */
function getSubtitle(item) {
  switch (item) {
    case "PMS / AIF":
      return "Access Curated Portfolios from top Fund Managers";
    case "Mutual Fund":
      return "Choose and Invest Through Leading Funds";
    case "Bond / Corporate FD":
      return "Invest in High-Quality Products";
    case "Structured Products":
      return "Facilitated Access to Market-Linked Solutions";
    case "Legacy & Estate Planning":
      return "Curated Solutions for Wealth Transfer";
    case "Insurance":
      return "Access Life, Health, and Asset Coverage";
    default:
      return "";
  }
}

