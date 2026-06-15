"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  Eye, 
  Camera, 
  Sparkles, 
  Link2,
  Pencil,
  Trash2,
  Copy,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export default function WhatIsAnObservation() {
  const [showPerspectives, setShowPerspectives] = useState(true);
  const [showPhotoDescription, setShowPhotoDescription] = useState(true);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(label);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const claimText = "Plastic container with chicken manure tea remains paler than aquarium. Containers completely covered despite recent harvest. Mosquito larvae present in blue bin, fewer than several days prior. Duckweed/azolla coverage at approximately 1/3 of liner area. Water visible through mesh appears greenish with stagnant characteristics.";
  const significanceText = "Mosquito larvae persistence despite 100% coverage contradicts operator's expectation that duckweed/azolla would eliminate larvae under full coverage conditions. Coverage maintenance appears consistent with stated method of optimizing growth conditions.";
  const entropyText = "Exposed new unknown: mechanism by which mosquito larvae survive in fully covered duckweed/azolla systems, challenging assumed biological control effectiveness.";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-neutral-100 pb-24">
      {/* Background Animated Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-500/15 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
        <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[10%] left-[10%] w-[700px] h-[700px] bg-teal-950/25 rounded-full mix-blend-screen filter blur-[150px] animate-blob animation-delay-4000" />
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
              System Context
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-36 pb-12 px-6 max-w-4xl mx-auto text-left relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
            <Eye className="w-6 h-6 text-teal-400" />
          </div>
          <span className="text-sm font-mono text-teal-400 font-bold tracking-widest uppercase">
            Telemetry & Data-Plane Integrity
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 leading-tight">
          What is an <span className="text-gradient">Observation</span>?
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 leading-relaxed mb-4">
          In Centripetal ∈ S, an <strong>Observation</strong> is a manual, farmer-initiated entry capturing a high-signal event in the field. Rather than recording continuous sensor background noise, observations record significant changes, anomalies, or interventions.
        </p>

        <p className="text-sm text-neutral-500 max-w-3xl leading-relaxed">
          Every observation is automatically run through vision-language models (powered by Claude 3.5 Sonnet on AWS Bedrock) to derive objective image descriptions and parse the entry into three crucial dimensions of AI analysis: <strong>Claim</strong>, <strong>Significance</strong>, and <strong>Entropy</strong>.
        </p>

        <div className="border-t border-white/10 my-8" />
      </section>

      {/* High-Fidelity UI Walkthrough */}
      <section className="px-6 max-w-6xl mx-auto relative z-10 mb-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-teal-400 animate-pulse" />
            Live UI Walkthrough: A Real Observation
          </h2>
          <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest bg-white/5 border border-white/10 px-2 py-1 rounded">
            Interactive Mockup
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Main Feed Card Replica */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* The Observation Entry */}
            <div className="bg-[#0b0c10] border border-white/10 rounded-2xl p-6 shadow-2xl relative">
              {/* User Header */}
              <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center font-bold text-teal-400">
                    SH
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Stefan Hamilton</h4>
                    <span className="text-[11px] font-mono text-neutral-500 block">6/7/2026, 5:44:00 AM</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span className="font-medium">Develop process to rapidly grow azolla and duckweed</span>
                  </div>
                  <button 
                    onClick={() => setShowPerspectives(!showPerspectives)}
                    className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-all duration-300 ${
                      showPerspectives 
                        ? "bg-violet-500/20 border-violet-500/30 text-violet-400 font-bold" 
                        : "bg-neutral-900 border-white/5 text-neutral-400 hover:border-violet-500/20"
                    }`}
                  >
                    Perspectives
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="absolute top-6 right-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 lg:opacity-100 transition-opacity">
                <button className="p-1.5 rounded hover:bg-white/5 text-neutral-400 hover:text-white transition-colors" title="Copy Link">
                  <Link2 className="w-4 h-4" />
                </button>
                <button className="p-1.5 rounded hover:bg-white/5 text-neutral-400 hover:text-white transition-colors" title="Edit Entry">
                  <Pencil className="w-4 h-4" />
                </button>
                <button className="p-1.5 rounded hover:bg-white/5 text-neutral-400 hover:text-rose-400 transition-colors" title="Delete Entry">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {/* Observation Text Log */}
              <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-sans">
                The plastic container where chicken manure tea was added is still paler than the aquarium. Image analysis would need to be done to see if there&apos;s an improvement in the blue bin. The containers are completely covered despite having harvested a couple days ago. I saw mosquito larva in the blue bin still. I think i had seen mosquito larva in greater number several days ago. The duckweed/azolla is supposed to be able to kill the larva if i keep the top 100% covered.
              </p>

              {/* Photos Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 group bg-neutral-900">
                  <Image 
                    src="https://cwf-dev-assets.s3.us-west-2.amazonaws.com/organizations/00000000-0000-0000-0000-000000000001/images/PXL_20260606_222353429.jpg"
                    alt="Blue bowl with duckweed and azolla experiment" 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    unoptimized
                  />
                  {/* Highlight indicator representing target container tag */}
                  <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-4 border-emerald-400 animate-pulse pointer-events-none flex items-center justify-center">
                    <span className="bg-emerald-400/20 text-emerald-400 text-[9px] font-mono font-bold px-1 py-0.5 rounded">Target</span>
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 group bg-neutral-900">
                  <Image 
                    src="https://cwf-dev-assets.s3.us-west-2.amazonaws.com/organizations/00000000-0000-0000-0000-000000000001/images/PXL_20260606_222750968.MP.jpg"
                    alt="Wider view of cultivation setup" 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>

              {/* Expected Value & Community Rewards Projections */}
              <div className="mt-6 border-t border-white/10 pt-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-teal-400 font-bold block mb-3 animate-pulse">
                  Maxwell AI Expected Impact Projections (Parameter Optimization)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Baseline Card */}
                  <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold text-neutral-300">Action: No Action (Existing Path)</span>
                        <span className="text-[10px] font-mono text-neutral-500 font-semibold bg-neutral-900 border border-white/5 px-1.5 py-0.5 rounded">Baseline</span>
                      </div>
                      <p className="text-[11px] text-neutral-500 leading-normal mb-3 font-sans">
                        Keep the current top cover and watering schedule. Larvae persistence remains unaddressed.
                      </p>
                    </div>
                    <div>
                      {/* Show, don't tell: parameterized outcomes */}
                      <div className="mt-2 space-y-1 border-t border-white/5 pt-3 text-[10px] font-mono text-neutral-500">
                        <div className="flex justify-between"><span>Microbiome:</span><span className="text-neutral-400">Stagnant</span></div>
                        <div className="flex justify-between"><span>Organic Tech:</span><span className="text-neutral-400">Not Deployed</span></div>
                        <div className="flex justify-between"><span>Integrity (Word):</span><span className="text-neutral-400">Unverified</span></div>
                        <div className="flex justify-between"><span>Efficiency:</span><span className="text-neutral-400">Low</span></div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-white/5 flex justify-between items-center text-xs">
                        <span className="text-neutral-400">Expected 1-Yr Return:</span>
                        <span className="font-mono text-neutral-300 font-bold">0 PHP</span>
                      </div>
                    </div>
                  </div>

                  {/* Alternative Card */}
                  <div className="bg-teal-500/[0.02] border border-teal-500/20 rounded-xl p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold text-teal-400">Action: Fertilize Coconuts (Option A)</span>
                        <span className="text-[10px] font-mono text-teal-400 font-semibold bg-teal-500/10 border border-teal-500/20 px-1.5 py-0.5 rounded">Alternative</span>
                      </div>
                      <p className="text-[11px] text-neutral-400 leading-normal mb-3 font-sans">
                        Apply organic neem treatment and vermitea inoculation to boost plant defenses and soil microbiome.
                      </p>
                    </div>
                    <div>
                      {/* Show, don't tell: parameterized outcomes */}
                      <div className="mt-2 space-y-1 border-t border-teal-500/10 pt-3 text-[10px] font-mono text-neutral-400">
                        <div className="flex justify-between"><span>Microbiome:</span><span className="text-teal-400 font-bold">Thriving (+80%)</span></div>
                        <div className="flex justify-between"><span>Organic Tech:</span><span className="text-teal-400 font-bold">Verified Neem</span></div>
                        <div className="flex justify-between"><span>Integrity (Word):</span><span className="text-teal-400 font-bold">EXIF Locked</span></div>
                        <div className="flex justify-between"><span>Efficiency:</span><span className="text-teal-400 font-bold">High (Visual)</span></div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-teal-500/10 flex justify-between items-center text-xs">
                        <span className="text-neutral-400">Expected 1-Yr Return:</span>
                        <span className="font-mono text-teal-400 font-extrabold">+10,000 PHP</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* AI Image Descriptions (Accordion) */}
            <div className="border border-white/5 rounded-2xl overflow-hidden bg-neutral-950">
              <button 
                onClick={() => setShowPhotoDescription(!showPhotoDescription)}
                className="w-full flex items-center justify-between p-5 hover:bg-white/[0.02] text-left transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Camera className="w-4.5 h-4.5 text-blue-400" />
                  <span className="text-sm font-bold text-white">AI Spatial Image Descriptions</span>
                </div>
                {showPhotoDescription ? <ChevronUp className="w-4 h-4 text-neutral-400" /> : <ChevronDown className="w-4 h-4 text-neutral-400" />}
              </button>

              {showPhotoDescription && (
                <div className="p-6 pt-0 border-t border-white/5 text-neutral-400 text-xs leading-relaxed space-y-4 font-mono">
                  <div>
                    <span className="text-[10px] text-blue-400 block mb-1">AI DESCRIPTION - PHOTO 1</span>
                    <p className="mb-2">The photo depicts an outdoor setup involving several containers for a plant cultivation or monitoring project.</p>
                    <ul className="space-y-1 list-disc pl-4 text-neutral-300 font-sans">
                      <li><strong>Foreground:</strong> A blue plastic bowl filled with water and duckweed/azolla, two rectangular plastic containers, a wooden plank with a mesh screen.</li>
                      <li><strong>Background:</strong> Soil ground covered with fallen dry leaves, a wooden stick leaning against the ground, a person&apos;s foot wearing a black shoe visible on the left.</li>
                      <li><strong>Objects:</strong> Blue bowl (~30cm diameter), rectangular containers (20cm L x 10cm W x 10cm H), wooden plank (~1m length).</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Perspectives Overlay Panel */}
          <div className={`lg:col-span-1 transition-all duration-300 ${showPerspectives ? "opacity-100 scale-100" : "opacity-40 pointer-events-none"}`}>
            <div className="bg-[#12131a] border border-violet-500/25 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 filter blur-[40px] pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-violet-500 animate-ping" />
                  <h3 className="font-bold text-white text-md">Perspectives</h3>
                </div>
                <button 
                  onClick={() => handleCopy(`${claimText}\n\n${significanceText}\n\n${entropyText}`, "All")}
                  className="text-[10px] font-mono text-violet-400 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <Copy className="w-3 h-3" />
                  {copiedSection === "All" ? "Copied!" : "Copy All"}
                </button>
              </div>

              {/* Claim Block */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-violet-400 font-bold bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/20">
                    Claim
                  </span>
                  <button 
                    onClick={() => handleCopy(claimText, "Claim")}
                    className="text-neutral-500 hover:text-neutral-300 transition-colors"
                  >
                    <Copy className="w-3 h-3" />
                  </button>
                </div>
                <p className="text-xs text-neutral-300 leading-normal bg-neutral-900/60 p-3 rounded-lg border border-white/5 font-sans">
                  {claimText}
                </p>
                {copiedSection === "Claim" && <span className="text-[9px] font-mono text-emerald-400 mt-1 block text-right">Copied Claim!</span>}
              </div>

              {/* Significance Block */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-violet-400 font-bold bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/20">
                    Significance
                  </span>
                  <button 
                    onClick={() => handleCopy(significanceText, "Significance")}
                    className="text-neutral-500 hover:text-neutral-300 transition-colors"
                  >
                    <Copy className="w-3 h-3" />
                  </button>
                </div>
                <p className="text-xs text-neutral-300 leading-normal bg-neutral-900/60 p-3 rounded-lg border border-white/5 font-sans">
                  {significanceText}
                </p>
                {copiedSection === "Significance" && <span className="text-[9px] font-mono text-emerald-400 mt-1 block text-right">Copied Significance!</span>}
              </div>

              {/* Entropy Block */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-rose-400 font-bold bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                    Entropy
                  </span>
                  <button 
                    onClick={() => handleCopy(entropyText, "Entropy")}
                    className="text-neutral-500 hover:text-neutral-300 transition-colors"
                  >
                    <Copy className="w-3 h-3" />
                  </button>
                </div>
                <p className="text-xs text-neutral-300 leading-normal bg-neutral-900/60 p-3 rounded-lg border border-white/5 font-sans">
                  {entropyText}
                </p>
                {copiedSection === "Entropy" && <span className="text-[9px] font-mono text-emerald-400 mt-1 block text-right">Copied Entropy!</span>}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Structural Concepts Breakdown */}
      <section className="px-6 max-w-5xl mx-auto relative z-10 mb-16">
        <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2">
          The Three Dimensions of AI Perspective Synthesis
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-neutral-900/40 border border-white/5 rounded-2xl p-5 hover:border-violet-500/20 transition-colors">
            <span className="text-xs font-mono text-violet-400 uppercase font-bold block mb-2">1. Claim (Objective Reality)</span>
            <p className="text-xs text-neutral-400 leading-relaxed font-sans">
              Extracts pure, verifiable assertions of fact from the photos and operator logs. Claims avoid interpretations or opinions, cataloging direct visual properties (e.g. coverage ratio, colour anomalies, pest presence) to build a firm baseline.
            </p>
          </div>

          <div className="bg-neutral-900/40 border border-white/5 rounded-2xl p-5 hover:border-violet-500/20 transition-colors">
            <span className="text-xs font-mono text-violet-400 uppercase font-bold block mb-2">2. Significance (Contextual Insight)</span>
            <p className="text-xs text-neutral-400 leading-relaxed font-sans">
              Evaluates the observation against the stated goal context. It highlights contradictions between the actual physical state and the operator&apos;s expectations (e.g. noting that mosquito larvae persist even when Azolla coverage reaches 100%).
            </p>
          </div>

          <div className="bg-neutral-900/40 border border-white/5 rounded-2xl p-5 hover:border-rose-500/20 transition-colors">
            <span className="text-xs font-mono text-rose-400 uppercase font-bold block mb-2">3. Entropy (Unresolved Unknowns)</span>
            <p className="text-xs text-neutral-400 leading-relaxed font-sans">
              Exposes new scientific unknowns, variables, or system blind spots uncovered by the observation. Highlighting entropy directs subsequent experiments, helping farmers isolate root causes (e.g. how larvae breathe under full coverage).
            </p>
          </div>
        </div>
      </section>

      {/* Evaluating Progress Against Farmer Values */}
      <section className="px-6 max-w-5xl mx-auto relative z-10">
        <div className="glass-panel rounded-3xl p-8 border border-teal-500/15 bg-teal-500/[0.01]">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-teal-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold">Evaluating Progress Against Farmer Values</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2 text-center font-sans">Projecting Expected Impact</h3>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-3xl mx-auto text-center mb-4 font-sans">
            By structuring observations into <strong>Claim</strong>, <strong>Significance</strong>, and <strong>Entropy</strong> rather than storing raw text, we build the cognitive framework for system agents like <strong>Maxwell</strong>. Behind the scenes, the database is structured exactly as Reinforcement Learning (RL) sees the world: <strong>States</strong> (observations), <strong>Actions</strong> (interventions), <strong>Policy</strong> (plans), and <strong>Rewards</strong> (values).
          </p>
          <p className="text-xs text-neutral-500 leading-relaxed max-w-3xl mx-auto text-center font-mono">
            This database design provides the flexibility to form communities that have aligned rewards (values) and solve problems together. Specifically, we value sustainable farming working with nature to build a thriving microbiome, organic inputs using the latest tech, honoring our word, quality, and efficiency. Low-friction value generation becomes possible across the collective network as these aligned nodes scale.
          </p>
        </div>
      </section>
    </main>
  );
}
