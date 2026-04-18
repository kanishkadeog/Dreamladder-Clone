export default function SIPSection() {
  return (
    <section className=" py-6 bg-gray-50 px-4 sm:px-8 lg:px-26">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        <div className="flex flex-col gap-4 mt-20">
          <h2 className="text-3xl font-bold">Setup SIP in 2 Minutes</h2>
          <p className="mt-4 text-gray-600 leading-8">
            Setup SIP in Mutual funds and diversify your portfolio to grow your net worth
          </p>

          <div className="flex gap-4 mt-6">
            <button className="bg-red-500 text-white px-5 py-2 rounded-full">
              Setup SIP
            </button>
            <button className="bg-red-500 text-white px-5 py-2 rounded-full">
              SIP Calculator
            </button>
          </div>
        </div>

        <img 
        className="w-[500px] md:w-[600px] lg:w-[700px] h-auto scale-90 hover:scale-100 transition-transform duration-500 ease-in-out"
        src="/sip.png" />

      </div>
    </section>
  );
}