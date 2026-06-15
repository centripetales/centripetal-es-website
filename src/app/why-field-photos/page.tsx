"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  Camera, 
  Search, 
  History,
  Zap,
  Globe
} from "lucide-react";

export default function WhyFieldPhotos() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-neutral-100 pb-24">
      {/* Background Animated Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
        <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/15 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[10%] left-[10%] w-[700px] h-[700px] bg-teal-950/35 rounded-full mix-blend-screen filter blur-[150px] animate-blob animation-delay-4000" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/10 flex items-center justify-center bg-neutral-900 group-hover:border-teal-500/30 transition-all duration-300">
                <ArrowLeft className="w-5 h-5 text-neutral-400 group-hover:text-teal-400 transition-colors" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white group-hover:text-teal-400 transition-colors">
                Back to Dashboard
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-teal-400 font-bold bg-teal-400/10 px-3 py-1.5 rounded-lg border border-teal-400/20">
              Data Collection
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-36 pb-12 px-6 max-w-4xl mx-auto text-left relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
            <Camera className="w-6 h-6 text-teal-400" />
          </div>
          <span className="text-sm font-mono text-teal-400 font-bold tracking-widest uppercase">
            Visual Documentation
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 leading-tight">
          Field Photos as the <span className="text-gradient">Main Sensor</span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 leading-relaxed mb-8">
          Images are intended to be the <strong>main source of sharable truth</strong>. Along with context, they form a rich, low-friction data source.
        </p>

        <div className="border-t border-white/10 my-8" />
      </section>

      {/* Core Explanation Cards Grid */}
      <section className="px-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        
        {/* Card 1: Images as the Main Sensor (With Image) */}
        <div className="glass-card rounded-[2rem] p-8 border border-white/5 bg-neutral-900/10 flex flex-col justify-between overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 filter blur-[40px] pointer-events-none" />
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-neutral-800/60 flex items-center justify-center border border-white/5">
                <Search className="w-5 h-5 text-teal-400" />
              </div>
              <h2 className="text-xl font-bold text-white">The Ultimate Sensor</h2>
            </div>
            
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              While lab analysis is ideal, it is not always practical. A soil analysis might require a 3-hour drive and a 6-month wait for results. Alternatively, observing the color and growth characteristics of specific plants provides immediate feedback on NPK (Nitrogen, Phosphorus, Potassium) levels.
            </p>

            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 mb-4 bg-neutral-950 group">
              <Image 
                src="/images/field_photo_before.jpg" 
                alt="Plant serving as a visual sensor" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
            </div>
          </div>
          
          <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 mt-2">
            <span className="text-[11px] font-mono text-teal-400 block mb-1">Visual Diagnostic Context</span>
            <p className="text-xs text-neutral-400 font-sans">
              Experimenting if we can get mani mani (nitrogen fixing) to replace cogon and operate as a nursery for future conversion and microbiome. The 2nd image captures the exact location and what the coconut looked like at the time of the intervention.
            </p>
          </div>
        </div>

        {/* Card 2: Before, Action, After (With Image) */}
        <div className="glass-card rounded-[2rem] p-8 border border-white/5 bg-neutral-900/10 flex flex-col justify-between overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 filter blur-[40px] pointer-events-none" />
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-neutral-800/60 flex items-center justify-center border border-white/5">
                <History className="w-5 h-5 text-emerald-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Compelling Sequences</h2>
            </div>
            
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              The true value of field photos is unlocked through sequence: <strong>Before, Action Taken, and After</strong>. Pairing these sequences with a control group provides high-confidence data, validating new approaches and establishing concrete proof of efficacy.
            </p>

            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 mb-4 bg-neutral-950 group">
              <Image 
                src="/images/field_photo_after.jpg" 
                alt="Action taken and results on a plant" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
            </div>
          </div>
          
          <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 mt-2">
            <span className="text-[11px] font-mono text-emerald-400 block mb-1">Intervention Tracking</span>
            <p className="text-xs text-neutral-400">
              Capturing the intervention—such as applying compost or soil amendments—provides indisputable context for future analysis and learning.
            </p>
          </div>
        </div>

        {/* Card 3: Fast, Low-Friction Acquisition */}
        <div className="glass-card rounded-[2rem] p-8 border border-white/5 bg-neutral-900/10 flex flex-col justify-between overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 filter blur-[40px] pointer-events-none" />
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-neutral-800/60 flex items-center justify-center border border-white/5">
                <Zap className="w-5 h-5 text-teal-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Low-Friction Documentation</h2>
            </div>
            
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Text descriptions often miss crucial items that end up being critical later. Reminding oneself how a planting was done using a photo is not only more compelling, but drastically faster.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
              <span className="text-[11px] font-mono text-white block mb-1 uppercase font-bold tracking-wider">Note-Worthy Events</span>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Photos should be taken ad-hoc when a person sees something unusual or noteworthy in the field.
              </p>
            </div>
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
              <span className="text-[11px] font-mono text-teal-400 block mb-1 uppercase font-bold tracking-wider">Planned Collections</span>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Photos should also be collected systematically as part of planned data collection schedules.
              </p>
            </div>
          </div>
        </div>
        
        {/* Card 4: Sharable Truth */}
        <div className="glass-card rounded-[2rem] p-8 border border-white/5 bg-neutral-900/10 flex flex-col justify-between overflow-hidden relative">
          <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/5 filter blur-[40px] pointer-events-none" />
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-neutral-800/60 flex items-center justify-center border border-white/5">
                <Globe className="w-5 h-5 text-emerald-400" />
              </div>
              <h2 className="text-xl font-bold text-white">The Source of Sharable Truth</h2>
            </div>
            
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Images eliminate ambiguity. When sharing methodologies or outcomes with partners, researchers, or other farmers, a photograph backed by contextual metadata stands as an objective record.
            </p>
          </div>
          
          <div className="bg-emerald-500/5 border border-emerald-500/15 rounded-xl p-5 border-l-2 border-l-emerald-500 mt-2">
            <h4 className="text-xs font-mono text-emerald-400 mb-2 uppercase font-bold tracking-wider">Collaborative Confidence</h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Establishing high-quality, continuous visual records builds trust and provides confidence to stakeholders evaluating new agricultural approaches.
            </p>
          </div>
        </div>

      </section>
    </main>
  );
}
