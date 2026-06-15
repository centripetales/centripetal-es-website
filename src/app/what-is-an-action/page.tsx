"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  Handshake, 
  Brain, 
  Sparkles, 
  Layers, 
  Droplet, 
  CheckCircle2, 
  Play, 
  Send, 
  Plus,
  MessageSquare,
  Sprout,
  Clipboard,
  Flag,
  ChevronRight,
  TrendingUp,
  Settings,
  HelpCircle,
  Copy,
  User,
  ArrowRight,
  Database,
  Layout,
  RefreshCw
} from "lucide-react";
import { getAssetPath } from "../../utils/assetPath";

interface ChatMessage {
  sender: "user" | "ai";
  text: string;
}

export default function WhatIsAnAction() {
  const [selectedExample, setSelectedExample] = useState<"vermitea" | "fertilize">("vermitea");
  
  // Example 1: Vermitea tab state
  const [vermiteaTab, setVermiteaTab] = useState<"policy" | "implementation">("policy");
  const [vermiteaAgreed, setVermiteaAgreed] = useState(false);
  
  // Example 2: Fertilize tab state
  const [fertilizeTab, setFertilizeTab] = useState<"policy" | "implementation">("policy");
  const [fertilizeAgreed, setFertilizeAgreed] = useState(true);

  // Interactive Chat Simulator State
  const [selectedCondition, setSelectedCondition] = useState<string | null>(null);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const farmConditions = [
    {
      id: "super-el-nino",
      label: "Super El Niño Prep",
      summary: "Drought stress options to optimize hillside coconut yields.",
      userMsg: "Given my situation, what are my fertilization options to increase coconut yields given a super El Niño event is predicted?",
      aiResponse: "**Your current fertilization approach: multi-layer.**\n\n**Data from actions (completed):**\n- **Organic base**: manure, biochar already applied to coconut trees (March–April 2026)\n- **Mineral**: salt added post-soil-nutrient-check, using half-ring method for hillside application (March–April 2026)\n- **Soil prep**: compost + clay + sand mix used for seedlings; drainage emphasized\n\n**For super El Niño (drought stress):**\n\n**From organizational practice:**\n- Your **salt application + biochar combo** is sound for drought — biochar retains moisture and nutrients; salt provides minerals during water stress. Continue this.\n\n**General best practices to consider:**\n1. **Increase potassium** (beyond salt) — coconuts need K for yield under drought; consider organic sources like wood ash or seaweed extract if available.\n2. **Mulch heavily** — coconut leaves onsite; prevents evaporation during dry spells.\n3. **Soil testing before scaling** — you're already checking soil (noted in action); widen to all productive areas before El Niño hits.\n4. **Reduce nitrogen** during drought (over-stimulates leaf growth, not fruit); shift to P/K ratio.\n\n**Data gap:** No fertilization frequency or timing policy found. Consider documenting a drought-response protocol now.\n\n*Data sources (4 records)*\n- **Actions**: Coconut salt application (2026-03); organic amendments (manure, biochar); seedling soil mix with compost\n- **Context**: Most trees unfertilized (May 2026 observation); soil nutrient check protocol in place"
    },
    {
      id: "rainy-season-planting",
      label: "Rainy Season Planting",
      summary: "Madre de cacao & Ipil-ipil timing guidelines to establish roots before drought.",
      userMsg: "Given it is the rainy season, describe the timing of when I can plant Madre de cacao and Ipil-ipil to improve soil conditions so they have a chance to establsih before super el nino hits??",
      aiResponse: "Data found: CWF has recent experience propagating Madre de cacao (January–February 2026, water presprouting over 3 weeks) and working with soil prep and drainage. However, no records exist on Ipil-ipil planting or El Niño seasonal guidance in your knowledge base.\n\nFrom organizational data:\n- Madre de cacao takes ~3 weeks to pressprout in water; soil prep is critical (drainage needed in wet conditions).\n- CWF's rainy season work shows water management is a concern.\n\nFrom general knowledge (not in your data) in Capiz's tropical maritime climate:\n- **Plant now (June–July)**: Peak rainy season ensures soil moisture for root establishment through August–September.\n- **Madre de cacao & Ipil-ipil** need 4–6 months to establish strong root systems and canopy before stress.\n- **Super El Niño window** (typically late 2026–2027): If onset occurs, plants with deep roots + nitrogen-fixing capability (Ipil-ipil) will have better drought resilience.\n- **Target completion**: Full establishment by November 2026.\n- **Practical timing**: Propagate now via cuttings (Madre de cacao) and direct seed (Ipil-ipil); plant into field by late July. This gives 4 months before potential El Niño stress.\n\n*Data sources (5 actions)*\n- Plant madre de cacao (Jan–Feb 2026): water presprouting method, 3-week timeline\n- Sprout cuttings in water (Nov–Dec 2025): charcoal technique to reduce mortality\n- Prep TESDA area (Oct–Dec 2025): drainage & soil cultivation insights"
    },
    {
      id: "fermented-fish",
      label: "11-Month Fermented Fish",
      summary: "Best options for mature fish fertilizer (biochar charging or direct use).",
      userMsg: "What is the best use of my fish that have fermented 11 months?",
      aiResponse: "Primary use: **Fermented fish biochar for seedlings.** At 11 months, your fermented fish is mature and ideal for charging biochar to boost seedling vigor. This combines proven nutritional value with experimental validation happening on-site.\n\nFrom organizational data:\n- **Biochar charging** is the documented practice at CWF: fish fermentate is applied to biochar, then used as a 1-tablespoon amendment per seedling (tracked weekly). Expected benefits: improved height, leaf count, leaf color, and drought stress tolerance (2-month trial underway).\n- **Fertilizer use** is established: fermented fish with sugar is used directly on ricefields during dry season when water stress is high (completed March 2026).\n- **Cost history**: Fish fermentation projects tracked ₱215–₱330 per batch (Feb–Mar 2024), indicating organizational investment in the practice.\n\nSecondary use: **Direct field application.** If biochar charging feels experimental, apply the fermentate directly to crops during water stress periods — the documented fallback approach that saved the rice paddies.\n\nInference (general knowledge): After 11 months, the fermentate is nitrogen-rich and stable; it won't degrade further. Use it within the next 2–3 months to lock in value. If neither option fits, fermented fish can reduce pest pressure or improve soil biology when diluted and applied to root zones.\n\n**Next step**: Which crops most need attention right now — seedlings in nursery beds, ricefields, or field vegetables?\n\n*Data sources (5 financial records, 5 actions, 1 experiment state model)*\n- **Financial records**: Fish fermentation expenses (Kuya Juan, Feb–Mar 2024; Mae, Jan 2025) range ₱215–₱330, labeled for fertilizer use. Categories: Agriculture.\n- **Actions**: \"Making Fish Fertilizer\" (completed Mar 2026); \"Fish Fermentation Charged Biochar for Seedlings\" (experiment design, Jan 2026) — charging biochar with fermentate at 1 tbsp per seedling, tracking weekly growth metrics.\n- **Experiment model**: 2-month seedling trial with weekly height/leaf/color measurements, stress test via drought."
    }
  ];

  const handleSelectCondition = (conditionId: string) => {
    const condition = farmConditions.find(c => c.id === conditionId);
    if (!condition) return;

    setSelectedCondition(conditionId);
    setIsTyping(true);
    setChatHistory([
      { sender: "user", text: condition.userMsg }
    ]);

    setTimeout(() => {
      setChatHistory(prev => [
        ...prev,
        { sender: "ai", text: condition.aiResponse }
      ]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-neutral-100 pb-24">
      {/* Background Animated Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/15 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
        <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-teal-500/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[10%] left-[10%] w-[700px] h-[700px] bg-emerald-950/20 rounded-full mix-blend-screen filter blur-[150px] animate-blob animation-delay-4000" />
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
            <Handshake className="w-6 h-6 text-emerald-400" />
          </div>
          <span className="text-sm font-mono text-emerald-400 font-bold tracking-widest uppercase">
            Reinforcement Learning (RL) Framework
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 leading-tight">
          What is an <span className="text-gradient">Action</span>?
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 leading-relaxed mb-4">
          In Reinforcement Learning (RL), an **Action** is the mechanism by which an agent transitions the environment from a current state to a higher-value state. Within Centripetal ∈ S, farmers act as the agents, modifying their crops and setups to optimize biological yield and farm health.
        </p>

        <p className="text-sm text-neutral-500 max-w-3xl leading-relaxed">
          Rather than implementing ad-hoc changes, every intervention is framed as part of an **Action Plan**. This plan outlines the current environment conditions, defines the target state, and specifies a **Policy** (the strategic plan) to guide how actions are executed over time.
        </p>

        <div className="border-t border-white/10 my-8" />
      </section>

      {/* Conceptual Workflow Diagram */}
      <section className="px-6 max-w-5xl mx-auto mb-20 relative z-10">
        <div className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 bg-neutral-900/15 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 filter blur-[40px] pointer-events-none" />
          <h2 className="text-xl font-bold text-white mb-6 text-center md:text-left">The Action Plan Loop</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Step 1 */}
            <div className="bg-neutral-950/60 border border-white/5 p-5 rounded-2xl flex flex-col justify-between relative group hover:border-emerald-500/20 transition-all duration-300">
              <div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded font-bold uppercase tracking-wider">Step 1</span>
                <h3 className="font-bold text-white mt-4 mb-2 flex items-center gap-1.5">
                  <Brain className="w-4.5 h-4.5 text-emerald-400" />
                  Consult AI (Insights)
                </h3>
                <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                  The farmer queries local AI assistants (e.g. Claude Haiku) with current soil, crop conditions, and available farm materials to receive diagnostic and ordering suggestions.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-mono text-neutral-500">
                Inputs: stock index, materials list
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-neutral-950/60 border border-white/5 p-5 rounded-2xl flex flex-col justify-between relative group hover:border-teal-500/20 transition-all duration-300">
              <div>
                <span className="text-[10px] font-mono text-teal-400 bg-teal-500/10 border border-teal-500/20 px-2 py-1 rounded font-bold uppercase tracking-wider">Step 2</span>
                <h3 className="font-bold text-white mt-4 mb-2 flex items-center gap-1.5">
                  <Layers className="w-4.5 h-4.5 text-teal-400" />
                  Formulate Policy (Plan)
                </h3>
                <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                  The farmer evaluates the AI suggestions and manually creates the structured **Action Policy** (defining measurements, dilution rates, and steps). This forms the operational plan.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-mono text-neutral-500">
                Outcomes: structured measurements, steps
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-neutral-950/60 border border-white/5 p-5 rounded-2xl flex flex-col justify-between relative group hover:border-emerald-500/20 transition-all duration-300">
              <div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded font-bold uppercase tracking-wider">Step 3</span>
                <h3 className="font-bold text-white mt-4 mb-2 flex items-center gap-1.5">
                  <Sprout className="w-4.5 h-4.5 text-emerald-400" />
                  Log Observations
                </h3>
                <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                  As the action is performed, the farmer logs field observations to record what actually happens. Observations serve as the definitive ground truth of physical outcomes.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-mono text-neutral-500">
                Target: physical validation, telemetry
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Walkthrough & Interactive Simulator Selector */}
      <section className="px-6 max-w-6xl mx-auto mb-16 relative z-10">
        <div className="flex flex-col items-center mb-8">
          <label className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-3">Select Active Example Walkthrough</label>
          <div className="inline-flex bg-neutral-900 p-1.5 rounded-2xl border border-white/5">
            <button
              onClick={() => setSelectedExample("vermitea")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-350 flex items-center gap-2 ${
                selectedExample === "vermitea"
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/15"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              <Droplet className="w-4 h-4" />
              Example 1: Bio-Resource Synergies (Vermitea)
            </button>
            <button
              onClick={() => setSelectedExample("fertilize")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-350 flex items-center gap-2 ${
                selectedExample === "fertilize"
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/15"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              <Sprout className="w-4 h-4" />
              Example 2: Context-Aware AI (Coconut Fertilization)
            </button>
          </div>
        </div>

        {/* Dynamic Walkthrough Content */}
        {selectedExample === "vermitea" ? (
          <div>
            <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-400 animate-pulse" />
                  Action Plan: Bio-Resource Synergies (Brew & Apply Vermitea)
                </h2>
                <p className="text-sm text-neutral-400 mt-1">
                  Replicating compost-tea brewing parameters and field observation logging.
                </p>
              </div>
              <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest bg-white/5 border border-white/10 px-2 py-1 rounded w-fit">
                Walkthrough - Example 1
              </span>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Recreated HTML Mockup of the Action Page (Vermitea) */}
              <div className="bg-[#0b0c10] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative">
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-neutral-400 bg-neutral-800 px-2 py-1 rounded">Action Plan</span>
                    <h3 className="text-lg font-bold text-white">Brew and Apply Vermitea</h3>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button className="p-1.5 rounded hover:bg-white/5 text-neutral-400 hover:text-white transition-colors"><Clipboard className="w-3.5 h-3.5" /></button>
                    <button className="p-1.5 rounded hover:bg-white/5 text-neutral-400 hover:text-white transition-colors"><Flag className="w-3.5 h-3.5" /></button>
                    <button className="p-1.5 rounded hover:bg-white/5 text-neutral-400 hover:text-emerald-400 transition-colors"><CheckCircle2 className="w-3.5 h-3.5" /></button>
                  </div>
                </div>

                {/* Existing State Field */}
                <div className="mb-6">
                  <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-2">Existing State</label>
                  <div className="bg-neutral-950/60 border border-white/5 p-4 rounded-xl text-sm text-neutral-300 leading-relaxed">
                    We have a compost and mykovam was applied. I read vermitea is a complement to mykovam since they together operate a market where everyone ends up better off.
                  </div>
                </div>

                {/* Where we want to get to */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">Where we want to get to</label>
                    <button className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded flex items-center gap-1">
                      <Brain className="w-3 h-3" /> AI Assist
                    </button>
                  </div>
                  <div className="bg-neutral-950/60 border border-white/5 p-4 rounded-xl text-sm text-neutral-300">
                    A thriving fungal and biological population
                  </div>
                </div>

                {/* Assignment & Status */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="text-xs font-bold text-neutral-400 block mb-1">Assigned To</label>
                    <div className="bg-neutral-900 border border-white/5 px-3 py-2 rounded-lg text-xs text-neutral-300">Stefan Hamilton</div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-neutral-400 block mb-1">Participants</label>
                    <div className="bg-neutral-900 border border-white/5 px-3 py-2 rounded-lg text-xs text-neutral-500">None selected</div>
                  </div>
                </div>

                {/* Agreement Toggle */}
                <div className="flex items-center gap-3 bg-neutral-950/40 p-4 rounded-xl border border-white/5 mb-6">
                  <button 
                    onClick={() => setVermiteaAgreed(!vermiteaAgreed)} 
                    className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-200 focus:outline-none ${vermiteaAgreed ? 'bg-emerald-500' : 'bg-neutral-800'}`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-200 ${vermiteaAgreed ? 'translate-x-4' : 'translate-x-0'}`} />
                  </button>
                  <span className="text-xs text-neutral-300">Stefan Hamilton and leadership agreed to this action plan.</span>
                </div>

                {/* Linked Assets & Stock */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div>
                    <label className="text-xs font-bold text-neutral-400 block mb-2">Assets Linked</label>
                    <div className="bg-neutral-950/80 border border-white/5 p-3 rounded-xl flex items-center justify-between text-xs">
                      <div>
                        <span className="font-bold text-white block">Compost Tea Brewer</span>
                        <span className="text-[10px] font-mono text-neutral-500">SF071925BT01</span>
                      </div>
                      <span className="text-neutral-600 font-bold hover:text-white cursor-pointer">×</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-neutral-400 block mb-2">Stock Inventory Used</label>
                    <div className="bg-neutral-950/80 border border-white/5 p-3 rounded-xl flex items-center justify-between text-xs">
                      <div>
                        <span className="font-bold text-white block">Blackstrap Molasses</span>
                        <span className="text-[10px] font-mono text-neutral-400">0.5 Liters</span>
                      </div>
                      <span className="text-neutral-600 font-bold hover:text-white cursor-pointer">×</span>
                    </div>
                  </div>
                </div>

                {/* Tab Selectors */}
                <div className="border-t border-white/5 pt-6">
                  <div className="flex bg-neutral-950/80 p-1 rounded-xl border border-white/5 mb-4">
                    <button 
                      onClick={() => setVermiteaTab("policy")}
                      className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${vermiteaTab === "policy" ? "bg-neutral-800 text-white shadow" : "text-neutral-500 hover:text-neutral-300"}`}
                    >
                      Policy (Strategic Plan)
                    </button>
                    <button 
                      onClick={() => setVermiteaTab("implementation")}
                      className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${vermiteaTab === "implementation" ? "bg-neutral-800 text-white shadow" : "text-neutral-500 hover:text-neutral-300"}`}
                    >
                      Implementation (Logs)
                    </button>
                  </div>

                  {/* Tab Content */}
                  {vermiteaTab === "policy" ? (
                    <div className="bg-emerald-500/[0.02] border border-emerald-500/10 p-4 rounded-xl text-xs space-y-3">
                      <div className="flex items-center gap-2 text-emerald-400 font-bold">
                        <Brain className="w-4 h-4" />
                        <span>Action Policy</span>
                      </div>
                      <p className="text-neutral-300 font-sans">
                        Make vermi tea and apply it for maximal impact
                      </p>
                      <div className="bg-neutral-950 p-3 rounded-lg border border-white/5 space-y-1 text-[11px] font-mono text-neutral-400">
                        <div>Dilution Ratio: 10:1 (Water to Tea)</div>
                        <div>Application Target: Soil Rhizosphere & Foliar Spray</div>
                        <div>Timing Window: Late afternoon (UV Index &lt; 2)</div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2">
                      {/* Log 1 */}
                      <div className="bg-neutral-950/60 border border-white/5 p-4 rounded-xl">
                        <div className="flex items-center justify-between mb-3 text-[11px] text-neutral-500">
                          <span>Stefan Hamilton • May 4, 2026 7:22 PM</span>
                          <span className="font-mono text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">Verified Log</span>
                        </div>
                        <p className="text-xs text-neutral-300 leading-relaxed mb-3 font-sans">
                          I sprayed all of our new soil in endtime essentials as well as foilage to displace problem microbes. I also sprayed the places where I had placed our compost and mikrovam by coconuts. I sprayed mani mani and places where it seemed like there were better soil conditions where they could live. I also walked to my mani mani sod experiments toward the ati and sprayed them. I also sprayed my azolla experiment.
                        </p>
                        <div className="space-y-4 mt-4 border-t border-white/5 pt-3 text-[11px] text-neutral-400 font-sans">
                          <div className="flex flex-col sm:flex-row gap-3 items-start">
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 mt-1" />
                            <div className="flex-1">
                              <p className="mb-2">Foliage and soil application in Endtime Essentials. <span className="bg-neutral-900 border border-white/10 px-1 py-0.5 rounded text-[10px] text-neutral-500 font-mono">AI Description</span></p>
                              <div className="relative w-36 aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-neutral-950 mt-1.5">
                                <Image src={getAssetPath("/images/vermitea_spray1.jpg")} alt="Spraying soil and foliage" fill className="object-cover" />
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-3 items-start">
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 mt-1" />
                            <div className="flex-1">
                              <p className="mb-2">Spraying compost and mykovam areas near coconuts. <span className="bg-neutral-900 border border-white/10 px-1 py-0.5 rounded text-[10px] text-neutral-500 font-mono">AI Description</span></p>
                              <div className="relative w-36 aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-neutral-950 mt-1.5">
                                <Image src={getAssetPath("/images/vermitea_spray2.jpg")} alt="Spraying under tree canopy" fill className="object-cover" />
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-3 items-start">
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 mt-1" />
                            <div className="flex-1">
                              <p className="mb-2">The leaves are spotted. <span className="bg-neutral-900 border border-white/10 px-1 py-0.5 rounded text-[10px] text-neutral-500 font-mono">AI Description</span></p>
                              <div className="relative w-36 aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-neutral-950 mt-1.5">
                                <Image src={getAssetPath("/images/vermitea_spotted.jpg")} alt="Spotted leaf inspection" fill className="object-cover" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Log 2 */}
                      <div className="bg-neutral-950/60 border border-white/5 p-4 rounded-xl">
                        <div className="flex items-center justify-between mb-3 text-[11px] text-neutral-500">
                          <span>Stefan Hamilton • May 4, 2026 6:46 PM</span>
                          <span className="font-mono text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">Verified Log</span>
                        </div>
                        <p className="text-xs text-neutral-300 leading-relaxed mb-3 font-sans">
                          The tea was made with 250ml of molasses. When i used it 48 hours after starting, i could smell the molasses. I only needed 4 backpacks to treat everything from the ati to the bamboo treatment area. Potentially i will want to seal the air connections to the vermi cylinders
                        </p>
                        <div className="space-y-4 mt-4 border-t border-white/5 pt-3 text-[11px] text-neutral-400 font-sans">
                          <div className="flex flex-col sm:flex-row gap-3 items-start">
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 mt-1" />
                            <div className="flex-1">
                              <p className="mb-2">I notice there's a problem with the bubble in that air is leaking between the canisters instead of coming up through the vermi. I added additional water to cover the cylinders so there would be more diffusion of microbes out of the cylinders. <span className="bg-neutral-900 border border-white/10 px-1 py-0.5 rounded text-[10px] text-neutral-500 font-mono">AI Description</span></p>
                              <div className="relative w-36 aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-neutral-950 mt-1.5">
                                <Image src={getAssetPath("/images/vermitea_bubbles.jpg")} alt="Air leaking between canisters in brewer" fill className="object-cover" />
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row gap-3 items-start">
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 mt-1" />
                            <div className="flex-1">
                              <p className="mb-2">I diluted the vermi tea 10:1. since this is a 16l backpack i did about 1.5 l of vermitea <span className="bg-neutral-900 border border-white/10 px-1 py-0.5 rounded text-[10px] text-neutral-500 font-mono">AI Description</span></p>
                              <div className="relative w-36 aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-neutral-950 mt-1.5">
                                <Image src={getAssetPath("/images/vermitea_backpack.jpg")} alt="Vermi tea backpack dilution" fill className="object-cover" />
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-3 items-start">
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 mt-1" />
                            <div className="flex-1">
                              <p className="mb-2">I started this Saturday morning and used most of it Monday. <span className="bg-neutral-900 border border-white/10 px-1 py-0.5 rounded text-[10px] text-neutral-500 font-mono">AI Description</span></p>
                              <div className="relative w-36 aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-neutral-950 mt-1.5">
                                <Image src={getAssetPath("/images/vermitea_brewer.png")} alt="Compost Tea Brewer container setup" fill className="object-cover" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Log 3 */}
                      <div className="bg-neutral-950/60 border border-white/5 p-4 rounded-xl mt-4">
                        <div className="flex items-center justify-between mb-3 text-[11px] text-neutral-500">
                          <span>Stefan Hamilton • May 5, 2026 10:46 PM</span>
                          <span className="font-mono text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">Verified Log</span>
                        </div>
                        <p className="text-xs text-neutral-300 leading-relaxed mb-3 font-sans">
                          More was applied to newly planted Madre de cacao. I could smell it was still sweet with molasses so continue to aerate ans will continue using it.
                        </p>
                        <div className="space-y-4 mt-4 border-t border-white/5 pt-3 text-[11px] text-neutral-400 font-sans">
                          <div className="flex flex-col sm:flex-row gap-3 items-start">
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 mt-1" />
                            <div className="flex-1">
                              <p className="mb-2">I cut Madre de cacao from an old stump behind the chicken area. I left the small stems in the compost area so they can be shredded and used as a green for composting. <span className="bg-neutral-900 border border-white/10 px-1 py-0.5 rounded text-[10px] text-neutral-500 font-mono">AI Description</span></p>
                              <div className="relative w-36 aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-neutral-950 mt-1.5">
                                <Image src={getAssetPath("/images/vermitea_cuttings1.jpg")} alt="Cutting Madre de cacao cuttings" fill className="object-cover" />
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-3 items-start">
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 mt-1" />
                            <div className="flex-1">
                              <p className="mb-2">Dipped in anaa for 15min. Planted with mycovam and applied vermitea afterwards. <span className="bg-neutral-900 border border-white/10 px-1 py-0.5 rounded text-[10px] text-neutral-500 font-mono">AI Description</span></p>
                              <div className="relative w-36 aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-neutral-950 mt-1.5">
                                <Image src={getAssetPath("/images/vermitea_cuttings2.jpg")} alt="AA dip and planting with mycovam" fill className="object-cover" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  <Brain className="w-5 h-5 text-emerald-400" />
                  Action Plan: Context-Aware AI (Fertilize Coconut Trees)
                </h2>
                <p className="text-sm text-neutral-400 mt-1">
                  Replicating the layering advice query to the local AI and custom policy formulation.
                </p>
              </div>
              <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest bg-white/5 border border-white/10 px-2 py-1 rounded w-fit">
                Walkthrough - Example 2
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Side: Recreated UI from Screenshots */}
              <div className="lg:col-span-8 bg-[#0b0c10] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative space-y-6">
                
                {/* Header Info */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-neutral-400 bg-neutral-800 px-2 py-1 rounded">Action Plan</span>
                    <h3 className="text-lg font-bold text-white">Fertilize Coconut Trees</h3>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button className="p-1.5 rounded hover:bg-white/5 text-neutral-400 hover:text-white transition-colors"><Clipboard className="w-3.5 h-3.5" /></button>
                    <button className="p-1.5 rounded hover:bg-white/5 text-neutral-400 hover:text-white transition-colors"><Flag className="w-3.5 h-3.5" /></button>
                    <button className="p-1.5 rounded hover:bg-white/5 text-neutral-400 hover:text-emerald-400 transition-colors"><CheckCircle2 className="w-3.5 h-3.5" /></button>
                  </div>
                </div>

                {/* 1. The AI Chat consultation mockup */}
                <div className="bg-[#12131a] rounded-2xl border border-blue-500/25 overflow-hidden flex flex-col shadow-lg">
                  {/* Chat Console Bar */}
                  <div className="bg-neutral-900 px-4 py-2.5 border-b border-white/5 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-bold text-white">Maxwell Chat Workspace</span>
                    </div>
                    {/* Model selector dropdown */}
                    <div className="flex items-center gap-2">
                      <div className="bg-neutral-950 border border-white/10 px-2.5 py-1 rounded-md text-[10px] font-mono text-neutral-300 flex items-center gap-1 cursor-pointer">
                        <span className="text-amber-400 font-bold">⚡</span> Haiku (Fast)
                      </div>
                      <button className="p-1 text-neutral-500 hover:text-neutral-300 transition-colors"><Copy className="w-3 h-3" /></button>
                      <button className="p-1 text-neutral-500 hover:text-neutral-300 transition-colors"><RefreshCw className="w-3 h-3" /></button>
                    </div>
                  </div>

                  {/* Chat logs */}
                  <div className="p-4 space-y-4 max-h-[360px] overflow-y-auto">
                    {/* User message */}
                    <div className="flex justify-end">
                      <div className="max-w-[85%] rounded-2xl px-4 py-2.5 text-xs bg-neutral-800 text-white rounded-br-none font-sans">
                        if we dig a trench for these nutrients , what order should we use when applying ?
                      </div>
                    </div>

                    {/* AI message */}
                    <div className="flex justify-start">
                      <div className="max-w-[90%] rounded-2xl px-4 py-3 text-xs bg-neutral-950 border border-white/5 text-neutral-300 rounded-bl-none font-mono">
                        <span className="text-[10px] text-neutral-500 font-bold block mb-2 uppercase tracking-wide">Layering order (bottom to top in trench):</span>
                        
                        <ol className="space-y-4 text-[11px] leading-relaxed">
                          <li>
                            <strong className="text-white">1. Rock Phosphate</strong> (500–1,000g) — Place first on bare soil
                            <ul className="list-disc pl-4 mt-1 text-neutral-400 space-y-0.5">
                              <li>Slow-release; needs direct contact with soil for uptake</li>
                              <li>Acts as base layer</li>
                            </ul>
                          </li>
                          <li>
                            <strong className="text-white">2. Curing/Cooling Compost</strong> (5–10kg) — Layer over phosphate
                            <ul className="list-disc pl-4 mt-1 text-neutral-400 space-y-0.5">
                              <li>Provides organic matter & carbon for microbes</li>
                              <li>Buffers phosphate, prevents nutrient lock-up</li>
                            </ul>
                          </li>
                          <li>
                            <strong className="text-white">3. Mykovam</strong> (150g) — Mix into upper compost layer
                            <ul className="list-disc pl-4 mt-1 text-neutral-400 space-y-0.5">
                              <li>Microbial inoculant works best when surrounded by organic matter</li>
                              <li>Benefits from compost carbon as food source</li>
                            </ul>
                          </li>
                          <li>
                            <strong className="text-white">4. Fermented Fish</strong> (diluted) — Water in after layering
                            <ul className="list-disc pl-4 mt-1 text-neutral-400 space-y-0.5">
                              <li>Activates microbes in mykovam</li>
                            </ul>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  {/* Input Mock */}
                  <div className="p-3 bg-neutral-950 border-t border-white/5 flex gap-2">
                    <input
                      type="text"
                      placeholder="Ask Maxwell..."
                      disabled
                      className="flex-1 bg-neutral-900 border border-white/5 rounded-xl px-4 py-2 text-xs text-neutral-500 cursor-not-allowed"
                    />
                    <button disabled className="bg-neutral-800 text-neutral-600 px-3 py-2 rounded-xl text-xs font-bold cursor-not-allowed">
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* State Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-neutral-400 uppercase block mb-2">Existing State</label>
                    <div className="bg-neutral-950/60 border border-white/5 p-4 rounded-xl text-xs text-neutral-300 leading-relaxed min-h-[70px]">
                      Coconut trees have not been fertilized and yields are not high.
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-bold text-neutral-400 uppercase block">Where we want to get to</label>
                      <button className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.2 rounded border border-emerald-500/20"><Brain className="w-2.5 h-2.5 inline mr-1" /> AI Assist</button>
                    </div>
                    <div className="bg-neutral-950/60 border border-white/5 p-4 rounded-xl text-xs text-neutral-300 leading-relaxed min-h-[70px]">
                      We want to understand the impact of applying best practice relative to doing nothing.
                    </div>
                  </div>
                </div>

                {/* Assignment */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-neutral-400 block mb-1">Assigned To</label>
                    <div className="bg-neutral-900 border border-white/5 px-3 py-2 rounded-lg text-xs text-neutral-300">Stefan Hamilton</div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-neutral-400 block mb-1">Participants</label>
                    <div className="bg-neutral-900 border border-white/5 px-3 py-2 rounded-lg text-xs text-neutral-500">Select participants...</div>
                  </div>
                </div>

                {/* Assets & Stock */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-neutral-400 block mb-1">Linked Assets</label>
                    <div className="bg-neutral-950 border border-white/5 px-3 py-2 rounded-lg text-xs text-neutral-500 flex items-center justify-between">
                      <span>Add Asset...</span>
                      <Plus className="w-4 h-4 cursor-pointer" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-neutral-400 block mb-1">Stock Used</label>
                    <div className="bg-neutral-950 border border-white/5 px-3 py-2 rounded-lg text-xs text-neutral-500 flex items-center justify-between">
                      <span>Search Stock...</span>
                      <Plus className="w-4 h-4 cursor-pointer" />
                    </div>
                  </div>
                </div>

                {/* Tab selector and editor content (Action Policy) */}
                <div className="border-t border-white/5 pt-6">
                  <div className="flex bg-neutral-950/80 p-1 rounded-xl border border-white/5 mb-4">
                    <button 
                      onClick={() => setFertilizeTab("policy")}
                      className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${fertilizeTab === "policy" ? "bg-neutral-800 text-white shadow" : "text-neutral-500 hover:text-neutral-300"}`}
                    >
                      Policy (Strategic Plan)
                    </button>
                    <button 
                      onClick={() => setFertilizeTab("implementation")}
                      className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${fertilizeTab === "implementation" ? "bg-neutral-800 text-white shadow" : "text-neutral-500 hover:text-neutral-300"}`}
                    >
                      Implementation (Logs)
                    </button>
                  </div>

                  {fertilizeTab === "policy" ? (
                    <div className="bg-[#12131a] rounded-2xl border border-white/10 p-5 md:p-6 space-y-4">
                      {/* Editor Toolbars */}
                      <div className="flex items-center justify-between border-b border-white/5 pb-3">
                        <span className="text-xs font-bold text-white uppercase tracking-wider">Action Policy</span>
                        <div className="flex items-center gap-3">
                          <button className="text-[10px] font-mono text-neutral-300 bg-neutral-800 hover:bg-neutral-700 px-3 py-1 rounded-lg border border-white/5 flex items-center gap-1">
                            <Copy className="w-3 h-3" /> Copy Context
                          </button>
                          <button className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-lg flex items-center gap-1">
                            <Brain className="w-3 h-3" /> AI Assist
                          </button>
                        </div>
                      </div>

                      {/* editor text */}
                      <div className="text-xs leading-relaxed space-y-5 text-neutral-300 font-sans">
                        <div>
                          <h4 className="text-md font-extrabold text-white mb-2.5">Required Materials & Measurements Per Adult Tree</h4>
                          <ul className="space-y-1.5 list-disc pl-4 text-neutral-400">
                            <li><strong className="text-neutral-200">Mykovam: 150 grams</strong> per tree (roughly 1.5 small cups).</li>
                            <li><strong className="text-neutral-200">Rock Phosphate: 500 to 1,000 grams</strong> per tree (0.5 to 1 kilogram, depending on if your soil is highly acidic).</li>
                            <li><strong className="text-neutral-200">Curing/Cooling Compost: 5 to 10 kilograms</strong> per tree (about 1 to 2 standard agricultural buckets).</li>
                            <li><strong className="text-neutral-200">Mani-Mani (Arachis pintoi): 10-20ft</strong>.</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-md font-extrabold text-white mb-2.5">The Cogon-Clearing & Planting Procedure</h4>
                          
                          <div className="space-y-4">
                            <div>
                              <span className="text-[10px] font-mono text-emerald-400 font-bold block mb-1">1. Clear the Surface and Pull Cogon Roots</span>
                              <span className="text-[10px] text-neutral-500 italic block mb-1">Zone: 1.5 to 2 meters out from the trunk</span>
                              <p className="text-neutral-400 text-[11px] leading-relaxed">
                                Clear the surface weeds along the drip line. Dig your semi-circular trench 10–15 cm deep. As you dig, manually trace and pull out the thick, white, sharp underground cogon rhizomes (runners). Removing these roots prevents them from shooting back up through your compost.
                              </p>
                            </div>

                            <div>
                              <span className="text-[10px] font-mono text-emerald-400 font-bold block mb-1">2. Lay the Rock Phosphate Placement</span>
                              <span className="text-[10px] text-neutral-500 italic block mb-1">Dosage: 500g - 1,000g down first</span>
                              <p className="text-neutral-400 text-[11px] leading-relaxed">
                                Scatter the rock phosphate evenly along the bare floor of the trench, making direct contact with the exposed feeder roots. Because phosphate does not move in soil, this precise placement ensures the roots can immediately absorb it as it slowly breaks down.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-neutral-950/60 p-4 rounded-xl border border-white/5 text-center text-xs text-neutral-500 py-8">
                      No implementation logs or observations recorded for this action plan yet.
                    </div>
                  )}
                </div>

              </div>

              {/* Right Side: Informative Card detailing the workflow */}
              <div className="lg:col-span-4 space-y-6">
                <div className="glass-card rounded-3xl p-6 border border-white/5 bg-neutral-900/10 flex flex-col justify-between overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 filter blur-[40px] pointer-events-none" />
                  
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                      <Layout className="w-4 h-4 text-emerald-400" />
                      Context-Aware AI
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                      By feeding active materials and baseline conditions as context to the local AI assistant, farmers obtain optimized suggestions.
                    </p>

                    <div className="bg-neutral-950 p-4 rounded-xl border border-white/5 space-y-3.5 text-xs">
                      <div>
                        <span className="text-[10px] text-emerald-400 font-mono block mb-1">AI CONSULTATION INPUT</span>
                        <p className="text-neutral-400 text-[11px] leading-normal font-sans">
                          Available materials: Curing compost, rock phosphate, Mykovam inoculant, Fermented fish supplement. Crop: Adult Coconut trees.
                        </p>
                      </div>
                      <div className="border-t border-white/5 pt-3">
                        <span className="text-[10px] text-teal-400 font-mono block mb-1">AI RECOMMENDATION INSIGHT</span>
                        <p className="text-neutral-400 text-[11px] leading-normal font-sans">
                          Place rock phosphate first so feeder roots touch it directly. Add compost to feed the microbial inoculant (Mykovam). Water in with fish amino acids to trigger activity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Interactive AI Policy Planner (Simulated Chat) */}
      <section className="px-6 max-w-4xl mx-auto relative z-10">
        <div className="glass-panel rounded-3xl p-8 border border-white/10 bg-neutral-900/20">
          <div className="mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold bg-emerald-400/10 px-3 py-1.5 rounded-lg border border-emerald-400/20">
              Interactive Simulation
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-4 mb-2 tracking-tight">
              Develop a Custom Policy with AI
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              In RL, environment states are highly dynamic. A farmer can chat with the local AI assistant to automatically digest conditions (soil, weather, crop type) and formulate a specific, optimized policy.
            </p>
          </div>

          {/* Condition Selector */}
          <div className="mb-6">
            <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-3">
              1. Select a Farm Condition State (S)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {farmConditions.map((condition) => (
                <button
                  key={condition.id}
                  onClick={() => handleSelectCondition(condition.id)}
                  className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                    selectedCondition === condition.id
                      ? "bg-emerald-500/10 border-emerald-500/40 text-white"
                      : "bg-neutral-900/60 border-white/5 text-neutral-400 hover:border-emerald-500/20"
                  }`}
                >
                  <span className="font-bold text-xs block mb-1 text-white">{condition.label}</span>
                  <span className="text-[10px] text-neutral-500 block leading-tight">{condition.summary}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Interface */}
          <div>
            <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-3">
              2. Simulated AI Assist Workspace
            </label>
            
            <div className="bg-neutral-950 border border-white/5 rounded-2xl overflow-hidden flex flex-col min-h-[300px]">
              {/* Chat Header */}
              <div className="bg-neutral-900 px-4 py-3 border-b border-white/5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-bold text-white">Maxwell Policy Compiler</span>
                </div>
                <span className="font-mono text-neutral-500 text-[10px]">Context-Aware (Capiz, PH)</span>
              </div>

              {/* Chat Logs */}
              <div className="flex-1 p-4 space-y-4 overflow-y-auto max-h-[350px]">
                {chatHistory.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6">
                    <MessageSquare className="w-8 h-8 text-neutral-700 mb-2" />
                    <p className="text-xs text-neutral-500 max-w-xs leading-normal font-sans">
                      Select one of the agricultural condition states above to simulate a policy development chat with the AI assistant.
                    </p>
                  </div>
                ) : (
                  chatHistory.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                          msg.sender === "user"
                            ? "bg-neutral-800 text-white rounded-br-none"
                            : "bg-emerald-500/10 border border-emerald-500/20 text-neutral-300 rounded-bl-none font-sans"
                        }`}
                      >
                        {msg.sender === "ai" ? (
                          <div className="whitespace-pre-line font-mono text-[11px] leading-normal">
                            {msg.text}
                          </div>
                        ) : (
                          msg.text
                        )}
                      </div>
                    </div>
                  ))
                )}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-neutral-900 rounded-2xl px-4 py-3 text-xs text-neutral-500 rounded-bl-none flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input Mock */}
              <div className="p-3 bg-neutral-900 border-t border-white/5 flex gap-2">
                <input
                  type="text"
                  placeholder="Select a condition above to chat..."
                  disabled
                  className="flex-1 bg-neutral-950 border border-white/5 rounded-xl px-4 py-2 text-xs text-neutral-600 cursor-not-allowed"
                />
                <button
                  disabled
                  className="bg-neutral-800 text-neutral-600 px-3 py-2 rounded-xl text-xs font-bold cursor-not-allowed flex items-center justify-center"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 border-t border-white/5 py-12 px-6 bg-neutral-950 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Image src={getAssetPath("/centripetal-logo.png")} alt="Centripetal Logo" width={24} height={24} className="rounded-md animate-spin [animation-duration:12s]" />
            <span className="font-bold text-lg text-white">Centripetal ∈ S</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-500 text-sm">
            <span>Evidence Backs Claims • Privacy-First Telemetry</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
