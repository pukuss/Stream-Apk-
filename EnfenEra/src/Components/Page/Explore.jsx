import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Filter, ChevronDown, Plus, LayoutGrid, List, 
  MessageSquare, FileText, BookOpen, Bot, Code2, Users, 
  MonitorPlay, Play, Clock, Sparkles, ChevronRight, Heart, Medal, ArrowRight
} from 'lucide-react';

// --- DATA CONFIGURATIONS ---
const SIDEBAR_LINKS = {
  navigation: [
    { icon: MessageSquare, label: 'BIMI INDIA' },
    { icon: FileText, label: 'CALL OF DUTY MOBILE' },
    { icon: BookOpen, label: 'CLASH OF CLANS' },
    { icon: Bot, label: 'FREE FIRE INDIA', badge: 'Upcoming' },
    { icon: Code2, label: 'Snippets' },
    { icon: Users, label: 'Profiles' },
  ],
  landingPages: [
    { label: 'New to Unreal?' },
    { label: 'Getting Started' },
    { label: 'Latest' },
    { label: 'Highlights' },
  ],
  categories: [
    { label: 'Tutorial' },
    { label: 'Course' },
    { label: 'Talks & Demos' },
    { label: 'Recommended Tutorial' },
    { label: 'Livestream' },
    { label: 'Community Tutorial' },
    { label: 'Learning Path' },
    { label: 'Knowledge Base' },
  ]
};

const FILTER_SECTIONS = [
  {
    title: 'Filters',
    options: [{ label: 'Epic Games', count: 2044 }, { label: 'Community', count: 5408 }]
  },
  {
    title: 'Type',
    options: [
      { label: 'Courses', count: 198 }, { label: 'Learning Paths', count: 25 },
      { label: 'Tutorials', count: 433 }, { label: 'Livestreams', count: 163 },
      { label: 'Talks & Demos', count: 695 }, { label: 'Community Tutorials', count: 5405 },
      { label: 'Recommended Tutorials', count: 3 }, { label: 'Knowledge Base', count: 285 }
    ]
  },
  {
    title: 'Industries',
    options: [
      { label: 'Games', count: 4120 }, { label: 'Film & TV', count: 832 },
      { label: 'Architecture', count: 541 }, { label: 'Visualization', count: 290 }
    ]
  }
];

const MOCK_CARDS = [
  { title: "Unreal Engine Tutorial: How to Create a Fake Scanlines Effect", author: "Stormrage256", type: "Community Tutorial", image: "https://images.unsplash.com/photo-1618367588411-d9a90fefa881?q=80&w=600&auto=format&fit=crop", tags: ["+2"] },
  { title: "From Phone Mocap to Cinematic Dialogue in Unreal Engine 5", author: "Arno Schmitz", type: "Community Tutorial", image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=600&auto=format&fit=crop", tags: ["+1"] },
  { title: "BlenderFactory Pro Workflow to Unreal Engine", author: "Alpha XP", type: "Community Tutorial", image: "https://images.unsplash.com/photo-1616161560417-66d4aba5ce44?q=80&w=600&auto=format&fit=crop", tags: [] },
  { title: "Unreal Engine 5.7 - Chaos Destruction for Beginners - Part 2", author: "John_CTS", type: "Community Tutorial", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600&auto=format&fit=crop", tags: ["+1"] },
  { title: "Character Select Menu: Adding New Character To Our Fighting Game", author: "TrueGamingTech", type: "Community Tutorial", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop", tags: ["+1"] },
  { title: "SCRIPTED TOOL Tutorial in Unreal Engine 5 | Scriptableonquest #1", author: "Ella Shader", type: "Community Tutorial", image: "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?q=80&w=600&auto=format&fit=crop", tags: ["+3"] },
  { title: "Introduction to Mesh Terrain Mechanics & Shaders", author: "Ryan_Games", type: "Knowledge Base", image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600&auto=format&fit=crop", tags: [] },
  { title: "Using Khronos PBR Neutral as a Custom Replace Tonemapper in UE5", author: "i-hoshino", type: "Community Tutorial", image: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=600&auto=format&fit=crop", tags: ["Partner"] },
];

export default function ExplorerPage() {
  const [isGrid, setIsGrid] = useState(true);

  return (
    <div className="min-h-screen bg-[#0c0c0e] relative  text-[#e0e0e0] font-sans flex flex-col antialiased selection:bg-sky-500/30">
      
      {/* ================= STICKY CONTAINER LAYER ================= */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[260px_1fr] xl:grid-cols-[260px_1fr_290px] relative w-full">
        
        {/* LEFT SIDEBAR: Sticky Viewport Control */}
        <aside className="hidden lg:block sticky top-0 h-screen border-r border-[#1f1f23] bg-[#0f0f12] overflow-y-auto custom-scrollbar z-20">
          {/* Auth/Sign-In Card */}
          <div className="p-5 border-b border-[#1f1f23]">
            <p className="text-[12px] text-neutral-400 mb-4 leading-relaxed">
              Join our community, grow your knowledge and learn from others!
            </p>
            <button className="w-full bg-[#1e90ff] hover:bg-[#1c80e0] text-white font-bold py-2 rounded transition-colors text-xs tracking-wide">
              Sign in
            </button>
            <p className="text-[11px] text-neutral-500 mt-3 text-center">
              Don't have an Epic Games account? <a href="#" className="text-[#1e90ff] hover:underline">Sign up</a>
            </p>
          </div>

          {/* Navigation Directory */}
          <div className="p-4 flex flex-col gap-5">
            <div>
              <div className="flex items-center gap-2 px-2 py-1 mb-3 text-white font-black text-xs uppercase tracking-wider opacity-90">
                <Bot size={16} className="text-sky-400" /> Dev Community
              </div>
              <div className="flex items-center justify-between px-2 py-2 text-sm font-bold text-neutral-200 cursor-pointer hover:bg-[#19191e] rounded group transition-colors">
                <div className="flex items-center gap-2"><MonitorPlay size={16} className="text-neutral-400 group-hover:text-white" /> Game Engine</div>
                <ChevronDown size={14} className="text-neutral-500" />
              </div>

              <div className="flex flex-col gap-0.5 ml-6 mt-1">
                {SIDEBAR_LINKS.navigation.map((link, idx) => (
                  <a key={idx} href="#" className="flex items-center justify-between px-2 py-1.5 text-[13px] text-neutral-400 hover:text-white hover:bg-[#19191e] rounded transition-all group">
                    <div className="flex items-center gap-2.5">
                      <link.icon size={15} className="text-neutral-500 group-hover:text-sky-400 transition-colors" />
                      <span>{link.label}</span>
                    </div>
                    {link.badge && (
                      <span className="text-[9px] bg-purple-500/10 text-purple-400 border border-purple-500/20 px-1 rounded font-mono font-bold tracking-wide">{link.badge}</span>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Landing Pages Section */}
            <div>
              <h4 className="px-2 text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-1.5">Landing Pages</h4>
              <div className="flex flex-col gap-0.5">
                {SIDEBAR_LINKS.landingPages.map((link, idx) => (
                  <a key={idx} href="#" className="px-2 py-1.5 text-[13px] text-neutral-400 hover:text-white hover:bg-[#19191e] rounded transition-colors block">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Categories Section */}
            <div>
              <h4 className="px-2 text-[11px] font-bold uppercase tracking-wider text-neutral-600 mb-1.5">Categories</h4>
              <div className="flex flex-col gap-0.5">
                {SIDEBAR_LINKS.categories.map((link, idx) => (
                  <a key={idx} href="#" className="px-2 py-1.5 text-[13px] text-neutral-400 hover:text-white hover:bg-[#19191e] rounded transition-colors block truncate">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* MIDDLE CONTENT: Scrolling Grid Architecture */}
        <main className="p-6 md:p-10 relative bg-[#0c0c0e] top-25 min-w-0 mb-25 z-10">
          {/* Immersive Top Ambient Glow Aura */}
          <div className="absolute top-0 left-0 right-0 h-100  bg-linear-to-b from-[#0e2922] via-transparent to-transparent opacity-35 pointer-events-none" />

          <div className="relative z-10">
            {/* Breadcrumbs */}
            <div className="flex items-center flex-wrap gap-2 text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-5">
              <span className="bg-neutral-800 text-white p-0.5 rounded-sm"><MonitorPlay size={10} /></span>
              <span>Developer</span> <span>/</span>
              <span>Community</span> <span>/</span>
              <span className="flex items-center gap-0.5 text-neutral-400">Unreal Engine <ChevronDown size={10}/></span> <span>/</span>
              <span className="text-white">Learning</span>
            </div>

            {/* Content Titles */}
            <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Learn Unreal Engine</h1>
            <p className="text-sm text-neutral-400 max-w-2xl mb-8 font-medium">From your first steps to complete mastery of Unreal Engine, we've got you covered.</p>

            {/* Filters and Control Action Bar */}
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between border-b border-[#1f1f23] pb-6 mb-8">
              {/* Search Bar Element */}
              <div className="relative w-full xl:max-w-xs">
                <input 
                  type="text" 
                  placeholder="Filter by keyword..." 
                  className="w-full bg-[#141417] border border-[#27272a] rounded-md py-2 pl-3 pr-10 text-xs text-white focus:outline-none focus:border-[#1e90ff] focus:ring-1 focus:ring-[#1e90ff] transition-all"
                />
                <Search size={14} className="absolute right-3 top-3 text-neutral-500" />
              </div>

              {/* Action Operations Grid */}
              <div className="flex flex-wrap items-center gap-2.5 justify-between xl:justify-end">
                <span className="text-neutral-500 text-xs font-semibold">7188 results</span>
                
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1.5 bg-[#1e90ff] text-white text-xs font-bold px-3 py-2 rounded hover:bg-[#1c80e0] transition-colors shadow-sm">
                    Filters <Filter size={12} />
                  </button>
                  
                  <button className="flex items-center gap-1.5 bg-[#141417] text-neutral-300 text-xs font-bold px-3 py-2 rounded border border-[#27272a] hover:bg-[#1b1b20] transition-colors">
                    Trending <ChevronDown size={12} />
                  </button>

                  <button className="flex items-center gap-1 bg-[#1e90ff] text-white text-xs font-bold px-3 py-2 rounded hover:bg-[#1c80e0] transition-colors shadow-sm">
                    <Plus size={14} /> Create new
                  </button>

                  {/* Visual Structure Toggles */}
                  <div className="flex items-center bg-[#141417] border border-[#27272a] rounded overflow-hidden p-0.5 ml-1">
                    <button onClick={() => setIsGrid(true)} className={`p-1.5 rounded-sm transition-colors ${isGrid ? 'bg-[#27272a] text-white' : 'text-neutral-500 hover:text-neutral-300'}`}>
                      <LayoutGrid size={14} />
                    </button>
                    <button onClick={() => setIsGrid(false)} className={`p-1.5 rounded-sm transition-colors ${!isGrid ? 'bg-[#27272a] text-white' : 'text-neutral-500 hover:text-neutral-300'}`}>
                      <List size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid Container Feed Display */}
            <div className={isGrid ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-5 max-w-350 m-auto" : "flex flex-col gap-4  "}>
              {MOCK_CARDS.map((card, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -3, transition: { duration: 0.15 } }}
                  className={`bg-[#131316] rounded-xl overflow-hidden border border-[#1e1e22] hover:border-[#2d2d34] transition-all group cursor-pointer flex ${isGrid ? 'flex-col h-[330px]' : 'flex-row h-32'}`}
                >
                  {/* Thumbnail Cover Area */}
                  <div className={`relative bg-[#202024] shrink-0 overflow-hidden ${isGrid ? 'h-44 w-full' : 'h-full w-48'}`}>
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Floating Status Flags */}
                    <div className="absolute top-2.5 right-2.5 flex gap-1">
                      {card.tags.map((tag, i) => (
                        <div key={i} className="text-[10px] font-black px-1.5 py-0.5 rounded bg-black/70 backdrop-blur-md text-white tracking-wide">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metadata Text Core */}
                  <div className="p-4 flex flex-col flex-1 justify-between min-w-0">
                    <h3 className="text-white font-bold text-sm leading-snug line-clamp-2 group-hover:text-sky-400 transition-colors">{card.title}</h3>
                    
                    <div className="flex flex-col gap-2 mt-4">
                      <div className="flex items-center gap-2 text-xs text-neutral-400">
                        <span className="text-neutral-500">By</span>
                        <div className="w-5 h-5 rounded-full bg-neutral-800 flex items-center justify-center text-white font-bold text-[9px]">U</div>
                        <span className="text-neutral-300 truncate font-medium">{card.author}</span>
                      </div>
                      <div className="text-[11px] text-neutral-500 font-bold tracking-wider uppercase flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
                        {card.type}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>

        {/* RIGHT SIDEBAR: Sticky Filters Control */}
        <aside className="hidden xl:block sticky top-0 h-screen border-l border-[#1f1f23] bg-[#0f0f12] p-6 overflow-y-auto custom-scrollbar z-20">
          <h2 className="text-xs font-black uppercase tracking-widest text-neutral-400 mb-5">Side Filters</h2>
          
          <div className="flex flex-col gap-6">
            {FILTER_SECTIONS.map((section, idx) => (
              <div key={idx} className="border-b border-[#1f1f23] pb-5 last:border-0">
                <h3 className="text-xs font-bold text-white mb-3 tracking-wide">{section.title}</h3>
                <div className="flex flex-col gap-2">
                  {section.options.map((option, optIdx) => (
                    <label key={optIdx} className="flex items-center justify-between group cursor-pointer py-0.5">
                      <div className="flex items-center gap-2.5">
                        <input 
                          type="checkbox" 
                          className="w-3.5 h-3.5 bg-[#141417] border border-[#27272a] rounded checked:bg-sky-500 checked:border-sky-500 focus:ring-0 focus:ring-offset-0 text-sky-500 cursor-pointer transition-colors"
                        />
                        <span className="text-xs text-neutral-400 group-hover:text-neutral-200 transition-colors font-medium">{option.label}</span>
                      </div>
                      <span className="text-[10px] text-neutral-600 font-mono font-bold">({option.count})</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>

      </div>

      {/* Embedded Global Scrollbar Fix Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #222227; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #2d2d35; }
      `}} />
    </div>
  );
}