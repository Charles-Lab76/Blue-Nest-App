"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Name */}
          <div className="flex-shrink-0 flex items-center">
            <span className="cursor-pointer mb-10">
              <Image src="/images/Logo_2.png"
              alt="logo"
              height={200}
              width={200}
              />
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 cursor-pointer transition"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-[#FF9F1C] text-white rounded-md hover:bg-blue-700 cursor-pointer transition"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="block text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="block px-4 py-2 text-[#1F299C] border border-blue-600 rounded-md hover:bg-blue-50 cursor-pointer transition"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-[#1F299C] cursor-pointer transition"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
