// src/app/components/HeroSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-[#1F299C] leading-tight">
            Save Money Together.
          </h1>

          <p className="mt-4 font-nunito text-lg md:text-xl text-[#101010] max-w-xl mx-auto lg:mx-0">
            Start saving with purpose. Grow with your community. 
            Gain control of your money — one goal at a time.
          </p>

          <div className="mt-6">
            <Link href="/login">
              <button className="px-6 py-3 rounded-2xl font-poppins font-semibold text-white bg-[#FF9F1C] hover:bg-[#0466C8] transition-all shadow-md">
                Get Started
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/welcome.png" // replace with your actual image path
              alt="Saving together illustration"
              width={200}
              height={200}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
