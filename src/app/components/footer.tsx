export default function Footer() {
  return (
    <footer className="bg-animated-water text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo and Description */}
        <div className="text-left md:text-left">
          <h1 className="text-4xl font-bold flex items-center justify-center md:justify-start gap-2">
            <span className="text-[#fff]">Enviiro</span>
            <span className="bg-white text-[#000] px-2 py-1 rounded-full">WHEELS</span>
          </h1>
          <p className="mt-4 text-left md:text-left">
            Improving the Quality of Life Through Eco-Friendly Mobility Logistics and Solutions
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="#" className="hover:text-[#fff]">🔗</a>
            <a href="#" className="hover:text-[#000]">📸</a>
            <a href="#" className="hover:text-[#fff]">📘</a>
            <a href="#" className="hover:text-[#000]">🐦</a>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-left md:text-left">
          <h2 className="text-xl font-semibold mb-4 text-[#fff]">Information</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#000]">Home</a></li>
            <li><a href="#" className="hover:text-[#000]">About</a></li>
            <li><a href="#" className="hover:text-[#000]">Contact</a></li>
            <li><a href="#" className="hover:text-[#000]">Services</a></li>
            <li><a href="#" className="hover:text-[#000]">Gallery</a></li>
            <li><a href="#" className="hover:text-[#000]">Blog</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-left md:text-left">
          <h2 className="text-xl font-semibold mb-4 text-[#fff]">Locate Us</h2>
          <p className="mb-2">
            <strong>Head Office:</strong><br />
            Inland EV Green Services Pvt. Ltd.<br />
            444-447, Laxmi Plaza, Building no. 9, Laxmi Industrial Estate, Link road,<br />
            Sab TV road, Andheri West, Mumbai - 400053<br />
            +91 88795 56693<br />
            info@enviirowheels.com
          </p>
          <p>
            <strong>Corporate Office:</strong><br />
            26 Strand Road Ground floor, Kolkata 700001.
          </p>
        </div>
      </div>

      <div className="mt-10 text-left text-sm text-white border-t border-white/20 pt-4">
        © 2025 Inland EV Green Services.
      </div>
    </footer>
  );
}
