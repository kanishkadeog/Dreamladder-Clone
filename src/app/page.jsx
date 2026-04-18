// import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import WhatWeOffer from "../components/WhatWeOffer";
import FamilyInvestment from "../components/FamilyInvestment";
import WealthBuilder from "../components/WealthBuilder"
import Calculator from "../components/Calculator";
import Insights from "../components/Insights";
import ClientSay from "../components/ClientSay";
import Subscribe from "../components/Subscribe";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import SIPSection from "../components/SIPSection";


export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
     <main className="flex-1">
       <div className="min-h-screen bg-white text-gray-800 ">



          {/* Hero Slider */}
          <HeroSlider />

          {/* What we Offer */}
          <WhatWeOffer />

          {/* Familiy Investment */}
          <FamilyInvestment />

          {/* SIP Section */}
          <SIPSection />

          {/* Wealth Builder */}
          <WealthBuilder  />

          {/* Calculators */}
          <Calculator/>

          {/* Insights */}
          <Insights/>

          {/* Clients Say */}
          <ClientSay/>

          {/* Subscribe */}
          <Subscribe/>

          {/* Frequently Asked Question (FAQ) */}
          <FAQ/>

        </div>
      </main>
      <Footer />
     
    </>
  );
}
