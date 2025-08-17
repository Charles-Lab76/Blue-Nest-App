// src/app/components/FeaturesSection.tsx
"use client";

import { motion } from "framer-motion";

import { Users, Handshake, Brain, Trophy, Wallet, Shield } from "lucide-react";

const features = [
  {
    id: 1,
    icon: <Users className="w-8 h-8 text-cyan-600" />,
    title: "Community Savings",
    description:
      "Start saving with purpose. Grow with your community. Gain control of your money — one goal at a time.",
  },
  {
    id: 2,
    icon: <Handshake className="w-8 h-8 text-cyan-600" />,
    title: "Saving Companion",
    description:
      "Start saving with purpose. Grow with your community. Gain control of your money — one goal at a time.",
  },
  {
    id: 3,
    icon: <Brain className="w-8 h-8 text-cyan-600" />,
    title: "Smart Savings",
    description:
      "Start saving with purpose. Grow with your community. Gain control of your money — one goal at a time.",
  },
  {
    id: 4,
    icon: <Trophy className="w-8 h-8 text-cyan-600" />,
    title: "Gamified Challenges",
    description:
      "Start saving with purpose. Grow with your community. Gain control of your money — one goal at a time.",
  },
  {
    id: 5,
    icon: <Wallet className="w-8 h-8 text-cyan-600" />,
    title: "Budget Tracking",
    description:
      "Start saving with purpose. Grow with your community. Gain control of your money — one goal at a time.",
  },
  {
    id: 6,
    icon: <Shield className="w-8 h-8 text-cyan-600" />,
    title: "Bank-level Security",
    description:
      "Start saving with purpose. Grow with your community. Gain control of your money — one goal at a time.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1F299C]">
          Everything you need to save smart
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Start saving with purpose. Grow with your community. Gain control of
          your money — one goal at a time.
        </p>
      </div>

      {/* Features grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between"
          >
            <div>
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
            <div className="mt-6 flex justify-center">
              <button className="mt-4 px-4 py-2 bg-[#FF9F1C] text-white rounded-xl hover:bg-cyan-700 transition-all">
              Learn More
               </button>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
