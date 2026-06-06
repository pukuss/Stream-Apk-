import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Heart,
  Medal,
  MessageCircle, // Using as placeholder for Discord
  ArrowRight,
  MonitorCheck
} from "lucide-react";
import WebLogo from "../horizon/WebLogo";







// Structured data matching the reference image exactly
const FOOTER_DATA = {
  general: [
    { label: "About Dorik", href: "/about" },
    { label: "Public Roadmap", href: "/roadmap" },
    { label: "Changelog", href: "/changelog" },
    { label: "Affiliate Program", href: "/affiliate" },
  ],
  resources: [
    { label: "Documentation", href: "/docs" },
    { label: "Tutorial Videos", href: "/tutorials" },
    { label: "Community", href: "/community" },
    { label: "Dorik Blog", href: "/blog" },
    { label: "Free Illustrations", href: "/illustrations" },
    { label: "Partners", href: "/partners" },
    { label: "AI Tools Directory", href: "/ai-tools" },
    { label: "Write for Dorik", href: "/write" },
  ],
  followUs: [
    { label: "Twitter", href: "https://twitter.com", isExternal: true },
    { label: "LinkedIn", href: "https://linkedin.com", isExternal: true },
    { label: "Facebook", href: "https://facebook.com", isExternal: true },
    { label: "Discord", href: "https://discord.com", isExternal: true, icon: MessageCircle },
    { label: "Instagram", href: "https://instagram.com", isExternal: true },
    { label: "TikTok", href: "https://tiktok.com", isExternal: true },
  ],
};

const Footer = () => {
  return (
    <footer className="relative bg-[#0b0a1a] text-[#94a3b8] font-sans overflow-hidden">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-60 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" stroke="#2563eb" strokeWidth="2" d="M45.7,-76.3C58.9,-69.3,68.9,-54.8,76.5,-40.1C84,-25.4,89.1,-10.5,86.1,2.8C83.2,16.2,72.2,28.1,62.3,40.5C52.4,52.9,43.6,65.8,31.2,72.1C18.8,78.5,2.9,78.2,-12.3,75.1C-27.5,71.9,-41.9,65.9,-53.4,56.2C-64.8,46.5,-73.4,33.1,-78.9,18.4C-84.4,3.7,-86.9,-12.3,-81.4,-25.7C-75.9,-39.1,-62.4,-49.8,-49.1,-56.9C-35.9,-63.9,-22.8,-67.2,-8.1,-68.8C6.5,-70.3,21,-70,32.5,-73.1" transform="translate(100 100) scale(1.1)" />
        </svg>
      </div>
      <div className="absolute top-10 right-0 translate-x-1/3 opacity-80 pointer-events-none">
        <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#4f3df9" fillOpacity="0.15" stroke="#7c3aed" strokeWidth="2" d="M51.5,-67.5C65.9,-57.4,76.3,-41.5,80.1,-24.5C83.9,-7.5,81.1,10.6,73.1,25.8C65.1,41.1,51.9,53.5,36.5,61.8C21.1,70.1,3.4,74.3,-13.4,72.3C-30.2,70.4,-46.1,62.3,-58.5,50.1C-70.9,37.9,-79.8,21.6,-81.9,4.4C-84,-12.8,-79.3,-30.9,-69.1,-44.6C-58.8,-58.3,-43,-67.6,-27.3,-71.4C-11.6,-75.2,4,-73.6,19.2,-71.2" transform="translate(100 100) scale(1)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        
        {/* Top CTA Section */}
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Start Building Your Website!
          </h2>
          
          <div className="relative inline-block">
            {/* Left Hand-drawn accents */}
            <svg className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-10 text-[#f6b042]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M25 5 L5 15 M30 20 L5 25 M25 35 L10 35" />
            </svg>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#4f3df9] hover:bg-[#4335d9] text-white px-8 py-3.5 rounded-md font-medium flex items-center gap-2 transition-colors duration-200"
            >
              Try Dorik Now
              <ChevronRight size={18} strokeWidth={2.5} />
            </motion.button>

            {/* Right Hand-drawn accents */}
            <svg className="absolute -right-12 top-1/2 -translate-y-1/2 w-8 h-10 text-[#f6b042]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 5 L25 15 M2 20 L27 25 M5 35 L20 35" />
            </svg>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pt-12 border-t border-slate-800">
          
          {/* Column 1: Branding & Badges (Takes up more space) */}
          <div className="lg:col-span-4 flex flex-col gap-6 pr-0 lg:pr-10">
            {/* Logo placeholder */}
            <div className="text-4xl logo-font text-white tracking-tighter flex items-center">
             <span><WebLogo /></span> In<span className="text-[#4f3df9]">F</span>enEra
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              <Heart size={14} className="inline text-red-500 mr-1 fill-red-500" />
              This website is built with Dorik, without writing any code
            </p>

            <div className="flex flex-col gap-3 mt-4">
              {/* Product Hunt Badge */}
              <div className="flex items-center gap-3 bg-[#111026] border border-slate-800 rounded-lg p-3 w-max cursor-pointer hover:border-slate-600 transition-colors">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center">
                  <Medal size={20} className="text-orange-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Product Hunt</span>
                  <span className="text-sm font-bold text-white">#1 Product of the Week</span>
                </div>
              </div>

              {/* System Status Badge */}
              <div className="flex items-center gap-2 bg-[#1a1f2e] border border-slate-700/50 rounded-lg px-4 py-2.5 w-max">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </div>
                <span className="text-sm font-semibold text-white">All systems operational</span>
              </div>
            </div>
          </div>

          {/* Column 2: General */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">General</h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_DATA.general.map((link, i) => (
                <li key={i}>
                  <Link to={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Resources</h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_DATA.resources.map((link, i) => (
                <li key={i}>
                  <Link to={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Follow Us</h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_DATA.followUs.map((link, i) => (
                <li key={i}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                    {link.label}
                    {link.icon && <link.icon size={14} className="text-[#cbcca7]" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Partner Program */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Partner Program</h4>
            <p className="text-sm leading-relaxed">
              Earn up to 40% recurring commission
            </p>
            <Link to="/partner" className="flex items-center gap-1 text-sm text-[#f0df99] hover:text-white transition-colors mt-1 group">
              Become a Partner
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-20 pt-6 border-t border-slate-800 text-xs">
          <p>© {new Date().getFullYear()} Dorik, Inc. All rights reserved</p>
          <div className="flex gap-6">
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;