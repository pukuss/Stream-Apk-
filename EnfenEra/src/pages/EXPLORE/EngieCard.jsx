import React from "react";
import { motion } from "framer-motion";
import { Calendar, Hash, ExternalLink, Cpu } from "lucide-react";

function EngieCard({
  UID = 123,
  DateTime = "26 January 2026",
  HeadLine = "INDIAN First Engine Ever Launch",
  Description = "Detailed schematic and launch protocols for the experimental propulsion system. All systems nominal.",
  Link = "https://example.com",
}) {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="group relative grid grid-cols-1  md:grid-cols-2 bg-[#0a0a0c] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
        {/* Subtle background glow */}
        <div className="absolute inset-0  bg-linear-to-br from-blue-500/5 to-purple-500/5 pointer-events-none " />

        {/* Left Side: Image Container */}
        <div className="relative h-44  md:h-full bg-black overflow-hidden border-b md:border-b-0 md:border-r border-gray-800">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            src="public/devolopres/devoloper4.jpg"
            alt="Engine Display"
          />
          {/* Tech overlay grid */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>

          {/* UID Badge */}
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-md flex items-center gap-2">
            <Hash className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-mono font-bold text-gray-200 tracking-wider">
              {UID}
            </span>
          </div>
        </div>

        {/* Right Side: Content Area */}
        <div className="p-4 md:p-8 flex flex-col justify-between relative z-10 bg-gradient-to-br from-gray-900/50 to-transparent">
          <div className="space-y-4">
            {/* Date Tag */}
            <div className="flex items-center gap-2 text-gray-400">
              <Calendar className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-semibold tracking-widest uppercase">
                {DateTime}
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight group-hover:text-blue-400 transition-colors duration-300">
              {HeadLine}
            </h2>

            {/* Description */}
            <div className="flex gap-3 items-start">
              <Cpu className="w-5 h-5 text-gray-500 mt-1 shrink-0" />
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                {Description}
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <a
              href={Link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full">
              <motion.button
                whileHover={{ backgroundColor: "#3b82f6", color: "#ffffff" }}
                whileTap={{ scale: 0.97 }}
                className="w-full flex items-center justify-center gap-2 bg-gray-800 text-gray-200 border border-gray-700 px-6 py-3 rounded-lg text-sm font-bold transition-colors">
                Access Diagnostics <ExternalLink className="w-4 h-4" />
              </motion.button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default EngieCard;
