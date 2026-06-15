"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  Database, 
  Tag, 
  Wrench, 
  Bookmark, 
  Info,
  Calendar,
  Layers,
  Sparkles,
  Users
} from "lucide-react";

export default function WhatIsAnAsset() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-neutral-100 pb-24">
      {/* Background Animated Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
        <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-teal-500/15 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[10%] left-[10%] w-[700px] h-[700px] bg-emerald-950/35 rounded-full mix-blend-screen filter blur-[150px] animate-blob animation-delay-4000" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/10 flex items-center justify-center bg-neutral-900 group-hover:border-emerald-500/30 transition-all duration-300">
                <ArrowLeft className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400 transition-colors" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                Back to Dashboard
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold bg-emerald-400/10 px-3 py-1.5 rounded-lg border border-emerald-400/20">
              System Context
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-36 pb-12 px-6 max-w-4xl mx-auto text-left relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
            <Database className="w-6 h-6 text-emerald-400" />
          </div>
          <span className="text-sm font-mono text-emerald-400 font-bold tracking-widest uppercase">
            Data Architecture & Semantics
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 leading-tight">
          What is an <span className="text-gradient">Asset</span>?
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 leading-relaxed mb-8">
          In Centripetal ∈ S, an <strong>Asset</strong> is a foundational unit of record. It represents any physical crop setup, implement, or conceptual category that maps to a specific agricultural context. By organizing data around assets, farmers can build a verifiable timeline of observations and actions over time.
        </p>

        <div className="border-t border-white/10 my-8" />
      </section>

      {/* Core Explanation Cards Grid */}
      <section className="px-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        
        {/* Card 1: Physical Assets & Plots (With Image) */}
        <div className="glass-card rounded-[2rem] p-8 border border-white/5 bg-neutral-900/10 flex flex-col justify-between overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 filter blur-[40px] pointer-events-none" />
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-neutral-800/60 flex items-center justify-center border border-white/5">
                <Tag className="w-5 h-5 text-emerald-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Physical Assets & Plots</h2>
            </div>
            
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Physical assets include specific plots of land, trees, structures, or experiment zones. To maintain record integrity, they are tagged with a unique identifier (UID) in the field, allowing farmers to associate offline-first logs directly with a physical location.
            </p>

            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 mb-4 bg-neutral-950 group">
              <Image 
                src="https://cwf-dev-assets.s3.us-west-2.amazonaws.com/organizations/00000000-0000-0000-0000-000000000001/images/c22642r-1000033230.jpg" 
                alt="Physical stake indicating crop experiment with unique ID" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
            </div>
          </div>
          
          <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 mt-2">
            <span className="text-[11px] font-mono text-emerald-400 block mb-1">UID Tag Reference: c22642r-1000033230</span>
            <p className="text-xs text-neutral-400">
              A physical stake marking an experimental plot. Note the clear tags marking the conditions: <strong>crimp vs cut</strong>. This marker ensures that ongoing logs of crop height, soil composition, and yield map precisely to this unique layout.
            </p>
          </div>
        </div>

        {/* Card 2: Napier Experiment Context (With Image) */}
        <div className="glass-card rounded-[2rem] p-8 border border-white/5 bg-neutral-900/10 flex flex-col justify-between overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 filter blur-[40px] pointer-events-none" />
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-neutral-800/60 flex items-center justify-center border border-white/5">
                <Layers className="w-5 h-5 text-teal-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Context & Experiment Tracking</h2>
            </div>
            
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Assets establish the necessary scope, or <em>context</em>, for structured agricultural experimentation. Linking multiple observations to a single asset context allows farmers to track the outcomes of specific practices over time.
            </p>

            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 mb-4 bg-neutral-950 group">
              <Image 
                src="https://cwf-dev-assets.s3.us-west-2.amazonaws.com/organizations/00000000-0000-0000-0000-000000000001/images/1000033041.jpg" 
                alt="Napier grass experiment plot setup" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
            </div>
          </div>
          
          <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 mt-2">
            <span className="text-[11px] font-mono text-teal-400 block mb-1">Experiment Reference: Napier Cultivation</span>
            <p className="text-xs text-neutral-400">
              A Napier grass cultivation plot. Mapped as a distinct asset context, it allows comparison of different cultivation styles, soil amendments, and spacing patterns in a localized environment.
            </p>
          </div>
        </div>

        {/* Card 3: Tools & Implements (With Image) */}
        <div className="glass-card rounded-[2rem] p-8 border border-white/5 bg-neutral-900/10 flex flex-col justify-between overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 filter blur-[40px] pointer-events-none" />
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-neutral-800/60 flex items-center justify-center border border-white/5">
                <Wrench className="w-5 h-5 text-emerald-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Tools & Equipment</h2>
            </div>
            
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Physical implements used across the farm can also be tracked as assets. This includes equipment like a <strong>baby bolo</strong> (a localized sickle or machete used for weeds, pruning, and harvesting). 
            </p>

            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 mb-4 bg-neutral-950 group">
              <Image 
                src="https://cwf-dev-assets.s3.us-west-2.amazonaws.com/organizations/00000000-0000-0000-0000-000000000001/images/p8z73eb-1000033237.jpg" 
                alt="Baby bolo sickle tool asset" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
            </div>
          </div>
          
          <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 mt-2">
            <span className="text-[11px] font-mono text-emerald-400 block mb-1">Tool Reference: Baby Bolo (p8z73eb-1000033237)</span>
            <p className="text-xs text-neutral-400">
              By marking a baby bolo as an asset, its usage logs show which plots it was deployed to, when it was sharpened, and who last updated its maintenance record. This supports resource sharing and planning across agricultural cooperatives.
            </p>
          </div>
        </div>

        {/* Card 4: Asset Groups & Populations (With Image) */}
        <div className="glass-card rounded-[2rem] p-8 border border-white/5 bg-neutral-900/10 flex flex-col justify-between overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 filter blur-[40px] pointer-events-none" />
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-neutral-800/60 flex items-center justify-center border border-white/5">
                <Users className="w-5 h-5 text-teal-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Asset Groups & Populations</h2>
            </div>
            
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Assets do not have to represent single physical objects or individual animals. Tracking individual chickens, for example, is highly impractical. Instead, tracking them collectively as an <strong>asset group</strong> allows farmers to log flock dynamics, feed intake, and health trends efficiently.
            </p>

            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 mb-4 bg-neutral-950 group">
              <Image 
                src="/images/chicken_group.png" 
                alt="Chicken flock group tracking history popup interface" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
            </div>
          </div>
          
          <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 mt-2">
            <span className="text-[11px] font-mono text-teal-400 block mb-1">Asset Reference: Chicken Flock Context</span>
            <p className="text-xs text-neutral-400">
              Tracking as a group allows us to log observations (such as chick conditions, location changes, and emergency warming details) against flock dynamics without wasting time trying to identify a leg band number on every single bird.
            </p>
          </div>
        </div>

        {/* Card 5: Default Context, Embeddings & Tracking Trade-offs */}
        <div className="glass-card rounded-[2rem] p-8 border border-white/5 bg-neutral-900/10 flex flex-col lg:flex-row gap-8 lg:col-span-2 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-48 h-48 bg-emerald-500/5 filter blur-[60px] pointer-events-none" />
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-neutral-800/60 flex items-center justify-center border border-white/5">
                  <Bookmark className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-xl font-bold text-white">Default Context & Embeddings</h2>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Every asset corresponds to a <strong>default context</strong>. However, Centripetal ∈ S also uses AI-powered text and image <strong>embeddings</strong>. This means even if ad-hoc activities—like initial experimentation on azolla—are not explicitly registered as assets, their photos and notes can later be automatically grouped and analyzed by the system.
              </p>
            </div>
            <div className="bg-emerald-500/5 border border-emerald-500/15 rounded-xl p-5 border-l-2 border-l-emerald-500">
              <h4 className="text-xs font-mono text-emerald-400 mb-2 uppercase font-bold tracking-wider">Embeddings Advantage</h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Untagged media and observations are not lost. The embedding model evaluates visual and structural features so that when you later search for &quot;azolla experiment&quot;, all relevant records can be grouped and analyzed retroactively.
              </p>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-neutral-800/60 flex items-center justify-center border border-white/5">
                  <Info className="w-5 h-5 text-teal-400" />
                </div>
                <h2 className="text-xl font-bold text-white">The Trade-offs of Tracking</h2>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                While embeddings provide a fallback, relying on untagged logs carries a greater risk of misinterpretation, and the final analysis results will not be as robust. There is a balance between formal tracking and operational overhead.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                <span className="text-[11px] font-mono text-white block mb-1 uppercase font-bold tracking-wider">High Stakes</span>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  For critical context like government permits or surveys, losing a single paper can cost days of administrative delay. Asset tracking acts as a secure digital vault.
                </p>
              </div>
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                <span className="text-[11px] font-mono text-neutral-500 block mb-1 uppercase font-bold tracking-wider">Low Impact</span>
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  For short-lived, trivial, or low-impact operational items, it is not always worth the time to log and tag formal assets. The farmer retains control of tracking priorities.
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Summary Footer */}
      <section className="mt-16 px-6 max-w-4xl mx-auto relative z-10 text-center">
        <div className="glass-panel rounded-3xl p-8 border border-emerald-500/15 bg-emerald-500/[0.01]">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-emerald-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold">Contextual AI Integration</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Connecting Assets to Offline-First AI</h3>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            When our local, offline-first AI generates suggestions or reads diagnostic logs, it utilizes the **asset context** to isolate variables. This ensures advice for a crop setup marked &quot;crimp&quot; is never accidentally mixed with the actions intended for a plot marked &quot;cut.&quot;
          </p>
        </div>
      </section>
    </main>
  );
}
