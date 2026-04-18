"use client";
import { useEffect, useState } from "react";
import { slides } from "../data/slides";
import { motion } from "framer-motion";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex(index === 0 ? slides.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex((index + 1) % slides.length);
  };

  return (
<section className="relative h-[300px] md:h-[500px] w-full bg-white overflow-hidden group">



    

     {/* LEFT BUTTON */}
      <button onClick={prevSlide} 
          className="absolute w-11 h-11 left-1 md:left-4 top-1/2 -translate-y-1/2 z-30 p-1 md:p-2 rounded-full bg-slate-800 text-white hover:bg-red-600 transition-all duration-300 shadow-lg hover:scale-110 opacity-70 hover:opacity-100" 
      >
        <span className="material-symbols-outlined w-4 h-4  md:w-6 md:h-6">
          keyboard_arrow_left
        </span>
      </button>
      

      {/* RIGHT BUTTON */}
      <button onClick={nextSlide} 
      className="absolute w-11 h-11 right-1 md:right-4 top-1/2 -translate-y-1/2 z-30 p-1 md:p-2 rounded-full bg-slate-800 text-white hover:bg-red-600 transition-all duration-300 shadow-lg hover:scale-110 opacity-70 hover:opacity-100" fdprocessedid="s5tsol"
      >
        <span className="material-symbols-outlined">
          keyboard_arrow_right
       </span>
      </button>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">

        <motion.div
  key={index}
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  className="absolute inset-0 w-full h-full"
>
  {/* Background */}
  <img
    src={slides[index].bg}
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* CONTENT */}
  <div className="relative z-10 h-full flex items-center  ">
    
    {/* ===== SLIDE 1 ===== */}
    {slides[index].type === "wealth" && (
            <div className="px-4 sm:px-8 lg:px-18 flex w-full items-center justify-between ">

        {/* LEFT */}        
      <div className="max-w-xl ">
        <h2 className="text-3xl md:text-5xl font-light text-gray-800 whitespace-pre-line ">
          {slides[index].title}
        </h2>

        <div className="flex gap-4 mt-6 ">
          <button className=" flex font-light bg-red-600 text-white px-2 py-2 rounded-full">
            <span className="pr-2 material-symbols-outlined">
               import_contacts
            </span>
             Learning
          </button>
          <button className=" flex font-bold bg-red-600 text-white px-5 py-2 rounded-full">
            <span className="pr-2 material-symbols-outlined">
              calendar_today
           </span>
             Book my appointment
          </button>
        </div>
      </div>

      {/* RIGHT (OVERLAY PHONES) */}
      <div className="relative hidden md:flex items-center justify-center flex-1">
        <img
          src={slides[index].man[0]}
          className="w-[600px] md:w-[700px] lg:w-[800px] h-auto scale-110 z-10 drop-shadow-2xl"
         />
      </div>
    </div>
    )}

    {/* ===== SLIDE 2 ===== */}
    {slides[index].type === "app" && (
      <div className="px-4 sm:px-8 lg:px-18 flex w-full items-center justify-between">
        
        {/* LEFT */}
        <div className="max-w-lg">
          <h2 className="text-3xl md:text-5xl font-light whitespace-pre-line">
            {slides[index].title}
          </h2>

          <p className="mt-4 text-lg">{slides[index].subtitle}</p>

          {/* Store buttons */}
          <div className="flex gap-3 mt-6">
            <img
              className="h-10"
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            />
            <img
              className="h-10"
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
            />
          </div>

          {/* Stats */}
          <div className="mt-10 border border-red-500 rounded-xl p-4 bg-white/40 backdrop-blur-md">
            <div className="grid grid-cols-3 text-center">
              <div>
                <div className="text-xl font-semibold">500+</div>
                <div>Families</div>
              </div>
              <div>
                <div className="text-xl font-semibold">12+</div>
                <div>Countries</div>
              </div>
              <div>
                <div className="text-xl font-semibold">25+</div>
                <div>Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT (OVERLAY PHONES) */}
        
        <div className="relative hidden md:flex items-center justify-center flex-1">
          <img
             src={slides[index].phones[0]}
             className="w-[500px] md:w-[600px] lg:w-[700px] h-auto scale-90 z-10 drop-shadow-2xl"
           />
       </div>


      </div>
    )}
  </div>
</motion.div>

        


      </div>

    

      
    </section>
  );
}

