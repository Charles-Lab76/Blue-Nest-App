"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Mascot Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="rounded-2xl overflow-hidden shadow-lg w-64 h-64">
            <Image
              src="/images/macsot.png" // 👈 put your mascot image in public/images/nesty.png
              alt="Nesty Mascot"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* Welcome Message */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#1F299C] mb-4">
            Meet Nesty.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Start saving with purpose. Grow with your community. Gain control of
            your money — one goal at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
