"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Eye, 
  Sprout, 
  Handshake, 
  Brain,
  Lock,
  Calendar,
  Camera,
  Database,
  Receipt,
  Info
} from "lucide-react";
import metrics from "../data/metrics.json";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-neutral-100">
      {/* Background Animated Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-teal-500/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[800px] h-[800px] bg-emerald-900/30 rounded-full mix-blend-screen filter blur-[150px] animate-blob animation-delay-4000" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/10 flex items-center justify-center">
              <Image src="/centripetal-logo.png" alt="Centripetal Logo" width={40} height={40} className="animate-spin [animation-duration:12s]" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              Centripetal ∈ S
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <a href="#mission" className="hover:text-emerald-400 transition-colors">Mission</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="mission" className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center relative">
        {/* Massive Translucent Spinning Galaxy Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-15 pointer-events-none -z-10 mix-blend-screen">
          <Image src="/centripetal-logo.png" alt="Centripetal Galaxy Background" fill className="animate-spin [animation-duration:90s] object-contain rounded-full" />
        </div>
        
        <div className="max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-[1.1]">
            Centripetal ∈ S
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            We help organic farmers in Capiz use simple, image-based digital tools to capture their daily operations and leverage AI to learn faster, make better decisions, and continuously improve their farms.
          </p>
        </div>
      </section>

      {/* Telemetry Metrics Dashboard */}
      <section className="pb-16 px-6 max-w-7xl mx-auto relative z-10">
        <div className="glass-panel rounded-[2.5rem] p-8 md:p-12 border border-emerald-500/10 bg-emerald-500/[0.02] relative overflow-hidden">
          {/* Subtle inner glowing points */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-emerald-500/5 filter blur-[60px] pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-between relative z-10">
            <div className="max-w-md text-left">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold bg-emerald-400/10 px-3 py-1.5 rounded-lg border border-emerald-400/20">
                System Telemetry
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-4 mb-4 tracking-tight">
                Operational Intelligence at Scale
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Live operational totals aggregated across organic farms in Capiz, Philippines. This secure, continuously growing dataset demonstrates the density of real-world agricultural activity and enables increasingly powerful AI-assisted farming.
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-mono text-neutral-500">
                <Calendar className="w-3.5 h-3.5 text-neutral-600" />
                <span>Last updated: {metrics.lastUpdated.split('T')[0]}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full lg:max-w-3xl">
              {[
                {
                  icon: <Database className="w-5 h-5 text-emerald-400" />,
                  value: metrics.assets.toLocaleString(),
                  growth: metrics.growth.assets,
                  label: "Active Assets & Plots",
                  desc: "UID-tagged crop setups",
                  href: "/what-is-an-asset"
                },
                {
                  icon: <Eye className="w-5 h-5 text-teal-400" />,
                  value: metrics.observations.toLocaleString(),
                  growth: metrics.growth.observations,
                  label: "Observations Logged",
                  desc: "Secure crop status logs",
                  href: "/what-is-an-observation"
                },
                {
                  icon: <Handshake className="w-5 h-5 text-emerald-400" />,
                  value: metrics.actions.toLocaleString(),
                  growth: metrics.growth.actions,
                  label: "Actions Logged",
                  desc: "Supplements & interventions",
                  href: "/what-is-an-action"
                },
                {
                  icon: <Camera className="w-5 h-5 text-teal-400" />,
                  value: metrics.images.toLocaleString(),
                  growth: metrics.growth.images,
                  label: "Field Photos Ingested",
                  desc: "Visual diagnostic training data",
                  href: "/why-field-photos"
                },
                {
                  icon: <Receipt className="w-5 h-5 text-emerald-400" />,
                  value: metrics.transactions.toLocaleString(),
                  growth: metrics.growth.transactions,
                  label: "Receipts & Evidence Transactions",
                  desc: "Verifiable cash tracking logs",
                  href: "/why-expenses-matter"
                },
                {
                  icon: <Brain className="w-5 h-5 text-teal-400" />,
                  value: metrics.ai.toLocaleString(),
                  growth: metrics.growth.ai,
                  label: "AI Collaborations",
                  desc: "Interactive chats using farm context",
                  tooltip: "Powered by Anthropic Claude 3.5 Sonnet on AWS Bedrock",
                  href: "/ai-collaborations"
                }
              ].map((m, i) => {
                const cardContent = (
                  <>
                    <div className="w-10 h-10 rounded-xl bg-neutral-800/60 flex items-center justify-center border border-white/5 mb-4 shrink-0">
                      {m.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                          {m.value}
                        </span>
                        {m.growth > 0 && (
                          <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded font-mono font-semibold shrink-0">
                            +{m.growth}
                          </span>
                        )}
                      </div>
                      <div className="text-xs font-bold text-neutral-300 mt-1 flex items-center gap-1.5">
                        <span>{m.label}</span>
                        {m.tooltip && (
                          <div className="relative flex items-center group/tooltip">
                            <Info className="w-3.5 h-3.5 text-neutral-500 hover:text-emerald-400 cursor-help transition-colors" />
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-neutral-950 border border-white/10 rounded-lg text-[10px] text-neutral-300 font-normal leading-normal opacity-0 pointer-events-none group-hover/tooltip:opacity-100 transition-opacity z-50 text-center shadow-xl">
                              {m.tooltip}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="text-[10px] text-neutral-500 mt-0.5">{m.desc}</div>
                    </div>
                  </>
                );

                const cardClassName = "glass-card p-6 rounded-2xl border border-white/5 bg-neutral-900/20 flex flex-col justify-between min-h-[170px] transition-all duration-300 text-left hover:border-emerald-500/30 hover:bg-neutral-900/40 hover:-translate-y-1";

                if ('href' in m && m.href) {
                  return (
                    <Link key={i} href={m.href} className={cardClassName}>
                      {cardContent}
                    </Link>
                  );
                }

                return (
                  <div key={i} className={cardClassName}>
                    {cardContent}
                  </div>
                );
              })}
            </div>
          </div>


        </div>
      </section>



      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Image src="/centripetal-logo.png" alt="Centripetal Logo" width={24} height={24} className="rounded-md animate-spin [animation-duration:12s]" />
            <span className="font-bold text-lg text-white">Centripetal ∈ S</span>
          </div>

        </div>
      </footer>
    </main>
  );
}
