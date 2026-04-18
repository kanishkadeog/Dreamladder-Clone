export default function FamilyInvestment() {
  return (
    <section className=" py-10 bg-gray-50 px-4 sm:px-8 lg:px-26">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        <img 
        className="w-[500px] md:w-[600px] lg:w-[700px] h-auto scale-90 hover:scale-100 transition-transform duration-500 ease-in-out"
        src="/familys.png" />

     
{/* className="flex flex-col gap-4 mt-20 */}
        <div className="flex flex-col gap-4 mt-20" >
          <h2 className="text-3xl font-bold leading-14">
            All Your Family Investments, One Simple App
          </h2>
          <p className="mt-4 text-gray-600 leading-8">
            Easily view portfolio performance, transaction, and reports for every family member - anytimes, anywhere.
          </p>
          <button className="mt-6 bg-red-500 text-white px-6 py-2 rounded-full w-30">

            Start Now
          </button>
        </div>

      </div>
    </section>
  );
}