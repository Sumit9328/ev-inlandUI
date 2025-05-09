
import Header from "./components/header";
import EvFuture from "./components/evfuture";
import Footer from "./components/footer";
import TeamSection from "./components/teamsection";
import ClientSlider from "./components/ClientSlider";

export default function Home() {
  return (
    <>

      <section className="overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <Header />
          </div>
        </div>
      </section>





      <section className="overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <EvFuture />
          </div>
        </div>
      </section>






<section className="overflow-hidden">
  <div className="container-fluid">
    <div className="flex flex-col md:flex-row min-h-screen">

      {/* Left Side */}
      <div className="bg-[#28ad18]/90 text-white w-full md:w-1/3 p-6 md:p-10 flex flex-col justify-center items-start">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
        <p className="text-base md:text-lg mb-6">
          Explore Our Comprehensive Range of Sustainable Transportation Solutions
        </p>
        <button className="bg-white text-[#4189c2] font-semibold px-5 py-2 rounded hover:bg-gray-100 transition">
          Explore Our Services
        </button>
      </div>

      {/* Right Side */}
      <div
        className="w-full md:w-2/3 relative grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 md:p-10"
        style={{
          backgroundImage: "url('/assets/images/beautiful-shot-snowy-mountain-sunset_181624-37878.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 z-0"></div>

        {/* Cards */}
        <div className="relative z-10 bg-[#4189c2]/90 p-4 sm:p-6 rounded text-white shadow-md">
          <div className="text-2xl sm:text-3xl mb-3">🛻</div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Last-Mile Delivery Services</h3>
          <p className="text-sm sm:text-base">
            Deliver goods sustainably with eco-friendly vehicles for timely and environmentally responsible deliveries.
          </p>
        </div>

        <div className="relative z-10 bg-[#28ad18]/90 p-4 sm:p-6 rounded text-white shadow-md">
          <div className="text-2xl sm:text-3xl mb-3">🚚</div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Longhaul Logistics</h3>
          <p className="text-sm sm:text-base">
            Facilitate long-distance transportation sustainably using advanced electric and green-fuel vehicles.
          </p>
        </div>

        <div className="relative z-10 bg-[#28ad18]/90 p-4 sm:p-6 rounded text-white shadow-md">
          <div className="text-2xl sm:text-3xl mb-3">🏭</div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Raw Material Movement</h3>
          <p className="text-sm sm:text-base">
            Manage raw material transportation for industries, optimizing supply chains and reducing carbon footprint.
          </p>
        </div>

        <div className="relative z-10 bg-[#4189c2]/90 p-4 sm:p-6 rounded text-white shadow-md">
          <div className="text-2xl sm:text-3xl mb-3">🏗️</div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">In-Plant Logistics</h3>
          <p className="text-sm sm:text-base">
            Optimize logistics within industrial plants by integrating transportation seamlessly for improved productivity.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>









<section className="overflow-hidden">
  <div className="bg-[#28ad18] py-16 px-4 text-white">
    <div className="max-w-7xl mx-auto text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold">Our Contact Details</h2>
      <div className="w-16 md:w-24 h-1 bg-white mx-auto mt-4"></div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Address Box */}
      <div className="bg-[#4189c2] text-white rounded-lg shadow-lg p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-semibold mb-4">Address</h3>
        <div className="border-b border-white mb-6 w-12 md:w-16"></div>

        <p className="mb-2">
          📧 <a href="mailto:info@enviiiwheels.com" className="underline">info@enviiiwheels.com</a>
        </p>
        <p className="mb-4">📞 +91 88795 56693</p>

        <p className="mb-2">
          📍 <strong>Head Office:</strong><br />
          Inland EV Green Services Pvt. Ltd.,<br />
          444-447, Laxmi Plaza, Building no. 9,<br />
          Laxmi Industrial Estate, Link Road, Sab TV Road,<br />
          Andheri West, Mumbai - 400053
        </p>

        <p className="mt-4">
          📍 <strong>Corporate Office:</strong><br />
          26 Strand Road, Ground Floor,<br />
          Kolkata - 700001
        </p>
      </div>

      {/* Opening Hours Box */}
      <div className="bg-[#4189c2] text-white rounded-lg shadow-lg p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-semibold mb-4">Opening Hours</h3>
        <div className="border-b border-white mb-6 w-12 md:w-16"></div>
        <p className="text-base md:text-lg">
          Count on us, available <strong>24/7</strong> for all your needs. Our team is dedicated to providing
          prompt assistance whenever you require it. Reach out anytime, and we’ll be here to support you.
        </p>
      </div>
    </div>
  </div>
</section>






<section className="overflow-hidden">
  <div className="container-fluid">
    <div className="row">
      <TeamSection/>
    </div>
  </div>
</section>







<section className="overflow-hidden">
  <div className="container-fluid">
    <div className="row">
      <ClientSlider/>
    </div>
  </div>
</section>








<section className="overflow-hidden">
  <div className="container-fluid">
    <div className="row">
      <Footer/>
    </div>
  </div>
</section>



    </>
  );
}
