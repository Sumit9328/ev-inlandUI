'use client';

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#4189c2] text-white text-xs md:text-sm py-2 px-4 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
        <div className="font-light text-center md:text-left">Journey to a Greener Future</div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center text-center">
          <div className="flex items-center gap-2">
            <i className="fab fa-whatsapp text-sm"></i>
            <span className="text-xs md:text-sm">91 88795 56693</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-envelope text-sm"></i>
            <span className="text-xs md:text-sm">info@enviirowheels.com</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white px-4 md:px-6 py-4 shadow-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/assets/images/logo_transparent.png"
              alt="Inland EV Green"
              width={104}
              height={40}
              className="w-32 md:w-36"
            />
          </div>

          {/* Hamburger Icon (Mobile Only) */}
          <div className="md:hidden">
            <button
              className="text-[#4189c2] focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-[#333]">
            <a href="#" className="text-[#00af6c] hover:text-[#4189c2]">Home</a>
            <a href="#" className="hover:text-[#4189c2]">About</a>
            <a href="#" className="hover:text-[#4189c2]">Contact</a>
            <a href="#" className="hover:text-[#4189c2]">Services</a>
            <a href="#" className="hover:text-[#4189c2]">Gallery</a>
            <a href="#" className="hover:text-[#4189c2]">Blog</a>
          </nav>

          {/* Desktop Chat + Social */}
          <div className="hidden md:flex items-center gap-4">
            <button className="border-2 border-[#4189c2] text-[#4189c2] px-4 py-2 text-sm font-semibold hover:bg-[#4189c2] hover:text-white transition rounded-sm">
              CHAT US!
            </button>
            <div className="flex gap-3 text-[#4189c2] text-lg">
              <i className="fab fa-linkedin hover:text-[#00af6c] cursor-pointer"></i>
              <i className="fab fa-instagram hover:text-[#00af6c] cursor-pointer"></i>
              <i className="fab fa-facebook hover:text-[#00af6c] cursor-pointer"></i>
              <i className="fab fa-twitter hover:text-[#00af6c] cursor-pointer"></i>
              <i className="fab fa-youtube hover:text-[#00af6c] cursor-pointer"></i>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="flex flex-col mt-4 gap-3 md:hidden text-center text-sm font-medium text-[#333]">
            <a href="#" className="text-[#00af6c] hover:text-[#4189c2]">Home</a>
            <a href="#" className="hover:text-[#4189c2]">About</a>
            <a href="#" className="hover:text-[#4189c2]">Contact</a>
            <a href="#" className="hover:text-[#4189c2]">Services</a>
            <a href="#" className="hover:text-[#4189c2]">Gallery</a>
            <a href="#" className="hover:text-[#4189c2]">Blog</a>

            <button className="border-2 border-[#4189c2] text-[#4189c2] px-4 py-2 text-sm font-semibold hover:bg-[#4189c2] hover:text-white transition rounded-sm mx-auto mt-2">
              CHAT US!
            </button>

            <div className="flex justify-center gap-4 mt-2 text-[#4189c2] text-lg">
              <i className="fab fa-linkedin hover:text-[#00af6c] cursor-pointer"></i>
              <i className="fab fa-instagram hover:text-[#00af6c] cursor-pointer"></i>
              <i className="fab fa-facebook hover:text-[#00af6c] cursor-pointer"></i>
              <i className="fab fa-twitter hover:text-[#00af6c] cursor-pointer"></i>
              <i className="fab fa-youtube hover:text-[#00af6c] cursor-pointer"></i>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
