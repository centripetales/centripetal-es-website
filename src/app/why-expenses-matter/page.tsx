"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, TrendingDown, Search, ShieldCheck, ExternalLink, Receipt, Edit, Trash2, Camera, FileText, User, Share2, Fuel, Ruler } from "lucide-react";
import { getAssetPath } from "../../utils/assetPath";

export default function WhyExpensesMatter() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-neutral-100 pb-24">
      {/* Background Animated Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-emerald-500/15 rounded-full mix-blend-screen filter blur-[120px] animate-blob" />
        <div className="absolute top-[40%] right-[10%] w-[600px] h-[600px] bg-teal-500/10 rounded-full mix-blend-screen filter blur-[150px] animate-blob animation-delay-2000" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5 bg-neutral-900/50 backdrop-blur-md">
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
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-36 pb-12 px-6 max-w-5xl mx-auto text-left relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
            <Receipt className="w-6 h-6 text-emerald-400" />
          </div>
          <span className="text-sm font-mono text-emerald-400 font-bold tracking-widest uppercase">
            Financial Transparency
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 leading-tight">
          Why Expenses <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Matter</span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl mb-8">
          Digitizing everyday expenses transforms basic record-keeping into a powerful engine for operational intelligence. By capturing handwritten receipts and pairing them with structured data, we go beyond simple accounting. This transparency allows our AIs to optimize material quality and cost, enables trusted networks to share reliable data on local pricing, quality, and follow-through, and turns routine purchases into precise telemetry that reveals hidden inefficiencies.
        </p>

        <div className="border-t border-white/10 my-8" />
      </section>

      {/* Show Instead of Tell: Interactive Transaction Detail Mockup */}
      <section className="px-6 max-w-5xl mx-auto mb-20 relative z-10">
        {/* Transaction Detail Card Replica */}
        <div className="glass-panel rounded-3xl border border-white/10 bg-neutral-900/60 p-6 md:p-8 space-y-8 shadow-2xl backdrop-blur-md">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center">
                <ArrowLeft className="w-4 h-4 text-neutral-400" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Transaction Detail</h3>
            </div>
            
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-white/10 bg-neutral-800/50 hover:bg-neutral-800 text-sm font-medium text-neutral-300 transition-all cursor-pointer">
                <Edit className="w-4 h-4" />
                Edit
              </button>
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 text-sm font-medium text-red-400 transition-all cursor-pointer">
                <Trash2 className="w-4 h-4" />
                Delete
              </button>
            </div>
          </div>

          {/* Photos Block */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Camera className="w-5 h-5 text-emerald-400" />
              Photos
            </h4>
            
            <div className="space-y-6">
              {/* Photo 1 */}
              <div className="flex flex-col md:flex-row gap-6 p-4 rounded-2xl bg-neutral-950/40 border border-white/5 hover:border-emerald-500/20 transition-all duration-300">
                <div className="w-full md:w-56 h-56 rounded-xl overflow-hidden border border-white/10 shrink-0 relative group">
                  <img 
                    src={getAssetPath("/images/nipa_receipt.png")} 
                    alt="Borda's Bamboo & Nipa Seller receipt"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider mb-2 block">
                    AI Description:
                  </span>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    The image shows a hand holding a sales invoice from Borda's Bamboo & Nipa Seller. The invoice is printed on a white piece of paper and contains several details. The business address is listed as "PC," and the item description is "Nipa." The quantity sold is 50, the unit price is ₱54, and the total amount is ₱2,700. The invoice is dated May 9, 2024, and the document number is 9374. The background shows a bamboo structure, indicating the business's location.
                  </p>
                </div>
              </div>

              {/* Photo 2 */}
              <div className="flex flex-col md:flex-row gap-6 p-4 rounded-2xl bg-neutral-950/40 border border-white/5 hover:border-emerald-500/20 transition-all duration-300">
                <div className="w-full md:w-56 h-56 rounded-xl overflow-hidden border border-white/10 shrink-0 relative group">
                  <img 
                    src={getAssetPath("/images/nipa_transport.png")} 
                    alt="Nipa transport delivery motorcycle"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <span className="text-xs font-mono text-teal-400 font-bold uppercase tracking-wider mb-2 block">
                    AI Description:
                  </span>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    The image depicts a man standing next to a motorcycle with a sidecar. The motorcycle is loaded with bamboo sticks, which are tied with ropes. The man is wearing a blue shirt and purple shorts. He is holding a rope, possibly to secure the bamboo sticks. The motorcycle has a canopy over the sidecar, providing shade. In the background, there is a traditional nipa hut with a thatched roof. Another man is standing near the hut, wearing a green shirt and jeans. The scene appears to be in a rural setting, possibly a bamboo farm or a village.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Details & Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Transaction Details */}
            <div className="p-6 rounded-2xl bg-neutral-950/40 border border-white/5 space-y-4">
              <h4 className="text-base font-semibold text-white border-b border-white/5 pb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-400" />
                Transaction Details
              </h4>
              
              <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                <div>
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">Amount</span>
                  <span className="text-base font-bold text-emerald-400 mt-1 block">₱2,700.00</span>
                </div>
                <div>
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">Transaction Date</span>
                  <span className="text-sm font-semibold text-neutral-200 mt-1 block">5/6/2026</span>
                </div>
                <div className="col-span-2">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">Description</span>
                  <span className="text-sm font-semibold text-neutral-200 mt-1 block">500 pcs of nipa</span>
                </div>
                <div>
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">Payment Method</span>
                  <span className="inline-flex items-center mt-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    Cash
                  </span>
                </div>
              </div>
            </div>

            {/* Record Info */}
            <div className="p-6 rounded-2xl bg-neutral-950/40 border border-white/5 space-y-4">
              <h4 className="text-base font-semibold text-white border-b border-white/5 pb-2 flex items-center gap-2">
                <User className="w-4 h-4 text-teal-400" />
                Record Info
              </h4>
              
              <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                <div className="col-span-2">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">Created By</span>
                  <span className="text-sm font-semibold text-neutral-200 mt-1 block">Mae Dela Torre</span>
                </div>
                <div>
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">Created At</span>
                  <span className="text-xs font-semibold text-neutral-300 mt-1 block">5/6/2026, 8:10:44 PM</span>
                </div>
                <div>
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">Last Updated</span>
                  <span className="text-xs font-semibold text-neutral-300 mt-1 block">5/6/2026, 8:10:44 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Operational Insights */}
      <section className="px-6 max-w-5xl mx-auto mb-24 relative z-10">
        <div className="mb-10 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Impact of Tracking Expenses
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-3xl">
            They drive optimization, establish network effects, and uncover physical operational issues that would otherwise go unnoticed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Kimbee Material Optimization */}
          <div className="glass-panel rounded-3xl p-8 border border-white/5 bg-neutral-900/40 relative overflow-hidden group hover:border-emerald-500/20 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Ruler className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Supplier Cost & AI Optimization</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                I haven't found any local stores that publish prices online, but some allow me to take pictures of their price list. This has allowed me to let my AI consider cost and availability when deciding whether to make walls out of plywood or cement board. What is the most cost-effective way to make a roof given a dozen different options?
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white p-2.5 shadow-inner mt-auto">
              <img 
                src={getAssetPath("/images/price_list.png")} 
                alt="Supplier construction materials price list"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Card 2: Shared transparency / local network effects */}
          <div className="glass-panel rounded-3xl p-8 border border-white/5 bg-neutral-900/40 relative overflow-hidden group hover:border-teal-500/20 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-teal-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Share2 className="w-7 h-7 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Shared Velocity & Network Effects</h3>
              <div className="text-neutral-400 text-sm leading-relaxed space-y-4 mb-6">
                <p>
                  Finding quality suppliers, like for crushed rock, takes time since they lack digital profiles. By sharing pricing and image-backed supplier details (like the river rock sample below) internally, we avoid the legal risks of public reviews in the Philippines. Pooling this local knowledge with trusted partners allows our AIs to support better community planning.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mt-auto">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 p-1 flex items-center justify-center h-28">
                <img 
                  src={getAssetPath("/images/river_rock.jpg")} 
                  alt="Supplier sample claimed as 3/4 river rock"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 p-1 flex items-center justify-center h-28">
                <img 
                  src={getAssetPath("/images/crushed_rock.jpg")} 
                  alt="High quality crushed rock bed"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Card 3: Fuel efficiency (km/l tracking) */}
          <div className="glass-panel rounded-3xl p-8 border border-white/5 bg-neutral-900/40 relative overflow-hidden group hover:border-emerald-500/20 transition-all duration-500 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Fuel className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Operational Diagnostics (km/l)</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Adopting a policy of always filling the tank and tracking odometer readings allows us to calculate km/l. This metrics-driven approach led to detecting a driver with 10% better efficiency via smoother acceleration, and helped diagnose low tire pressure in another vehicle.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white p-2.5 shadow-inner mt-auto">
              <img 
                src={getAssetPath("/images/barako_kml.png")} 
                alt="Barako km/l calculations chart"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
