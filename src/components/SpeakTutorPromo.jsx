import React from "react";
import { motion } from "framer-motion";

const slides = [
    {
    title: "Stay motivated and reach your goals",
    desc: "Speak Tutor keeps you motivated and accountable to achieve your goals. Learning a language is better with someone by your side.",
    content: (
      <div className="bg-white shadow-lg rounded-2xl p-6 w-80 space-y-4">
        <div className="bg-pink-200 rounded-xl p-4">
          ❤ You’re interested in traveling and exploring new cultures.
        </div>
        <div className="bg-blue-200 rounded-xl p-4">
          📘 We’ve created unique lessons and conversations based on those goals.
        </div>
        <button className="bg-blue-600 text-white rounded-xl px-4 py-2 hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    ),
  },
  {
    title: "Talk about anything, anytime, anywhere",
    desc: "Speak Tutor is your on-the-go conversational partner. Practice speaking on any topic, anytime, no matter how niche.",
    content: (
      <div className="bg-white shadow-lg rounded-2xl p-6 w-80">
        <h4 className="font-medium mb-3 text-gray-700">Create your own</h4>
        <ul className="space-y-2 text-gray-600">
          <li>👤 Tourist</li>
          <li>🤖 New friend</li>
          <li>📍 Talking about the best places to grab dinner in San Francisco.</li>
        </ul>
        <button className="bg-blue-600 text-white rounded-xl mt-4 px-4 py-2 hover:bg-blue-700 transition">
          Start chatting
        </button>
      </div>
    ),
  },
  {
    title: "Build a relationship with your tutor",
    desc: "Get personalized feedback and conversations designed to help you improve naturally over time.",
    content: (
      <div className="bg-white shadow-lg rounded-2xl p-6 w-80">
        <p className="text-sm">
          <span className="font-semibold">Speak:</span> Hey Audrey, your trip to
          Mexico is in 6 days! Let’s practice some vocabulary for your trip!
        </p>
      </div>
    ),
  },
  
  
  {
    title: "Feels like a real person",
    desc: "“The first time I used Speak Tutor, I couldn’t believe it wasn’t a real person. It feels like it understands my motivations at a deep level.”",
    content: (
      <div className="bg-white shadow-lg rounded-2xl p-6 w-80">
        <p className="text-gray-700 italic text-sm">— Jessica Park</p>
      </div>
    ),
  },
];

export default function SpeakTutorPromo() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 w-full">
      {slides.map((slide, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.12 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl bg-white rounded-3xl shadow-xl p-8 my-6"
        >
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {slide.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">{slide.desc}</p>
          </div>
          <motion.div
            initial={{ scale: 0.97, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="md:w-1/2 flex justify-center mt-6 md:mt-0"
          >
            {slide.content}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
