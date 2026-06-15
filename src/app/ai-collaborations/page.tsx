"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Brain, Sparkles, Sprout, CheckCircle2, FlaskConical, Target, Database, ChevronRight, FileText } from "lucide-react";

export default function AICollaborations() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-neutral-100 pb-24">
      {/* Background Animated Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-teal-500/15 rounded-full mix-blend-screen filter blur-[120px] animate-blob" />
        <div className="absolute top-[40%] right-[10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full mix-blend-screen filter blur-[150px] animate-blob animation-delay-2000" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5 bg-neutral-900/50 backdrop-blur-md">
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
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-36 pb-12 px-6 max-w-5xl mx-auto text-left relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
            <Brain className="w-6 h-6 text-teal-400" />
          </div>
          <span className="text-sm font-mono text-teal-400 font-bold tracking-widest uppercase">
            Context-Aware Intelligence
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 leading-tight">
          AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Collaborations</span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl mb-8">
          Here&apos;s an example of why context matters. AI is able to generate some good ideas that utilize assets we have and doesn&apos;t repeat items we are already running.
        </p>

        <div className="border-t border-white/10 my-8" />
      </section>

      {/* Example Collaboration Section */}
      <section className="px-6 max-w-5xl mx-auto mb-20 relative z-10">
        <div className="mb-10 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-teal-400" />
            Collaboration Example: Cogon Grass Conversion
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-3xl">
            This transcript shows how an AI analyzes existing farm capabilities (like biochar production and mani-mani establishment) to propose systematic, un-tested experiments for converting degraded cogon grass areas into carbon-building soil.
          </p>
        </div>

        {/* AI Output Container Replica */}
        <div className="glass-panel rounded-3xl border border-white/10 bg-neutral-900/60 p-6 md:p-10 space-y-12 shadow-2xl backdrop-blur-md">
          
          {/* Header/Prompt Context */}
          <div className="p-6 rounded-2xl bg-teal-500/5 border border-teal-500/20 mb-8">
            <h3 className="text-lg font-bold text-teal-400 mb-2 font-mono flex items-center gap-2">
              <FileText className="w-5 h-5" />
              USER PROMPT
            </h3>
            <p className="text-neutral-300 italic">
              &quot;What are some high roi value experiments to run that have not already been done for converting degraded cogon grass areas to soil that is building carbon and fertility. We want to develop a policy that is efficient.&quot;
            </p>
          </div>

          {/* AI Response Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 border-b border-white/10 pb-6">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <Brain className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white">AI Synthesis: High-ROI Cogon Grass → Carbon-Building Soil</h3>
            </div>

            <div className="prose prose-invert prose-emerald max-w-none">
              <p className="text-neutral-300 text-lg">
                <strong>Context from your data:</strong> CWF has already explored mani-mani establishment in weak cogon zones (Stefan, Sep 2025–Jan 2026, with promising results), cut cogon for vermicompost/compost inputs, collected cogon-soil samples, and is actively running azolla, biochar, vermicompost, and Mykovam programs. The gap is connecting these capabilities into a <strong>systematic, measured cogon conversion protocol</strong>.
              </p>
            </div>

            {/* What's Already Done */}
            <div className="p-6 rounded-2xl bg-neutral-950/40 border border-white/5 space-y-4">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                What&apos;s Already Been Done (Don&apos;t Repeat)
              </h4>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start gap-3"><span className="text-emerald-400 mt-1">✓</span> <span><strong>Mani-mani in weak cogon zones</strong> — working; roots-pushed-into-soil method showed new leaves within 2 weeks</span></li>
                <li className="flex items-start gap-3"><span className="text-emerald-400 mt-1">✓</span> <span><strong>Cogon cut → vermibed/compost input</strong> — completed May 2026</span></li>
                <li className="flex items-start gap-3"><span className="text-emerald-400 mt-1">✓</span> <span><strong>Soil sample from cogon area</strong> — baseline collected Oct 2025</span></li>
                <li className="flex items-start gap-3"><span className="text-emerald-400 mt-1">✓</span> <span><strong>Biochar production + training</strong> — completed Mar 2026</span></li>
                <li className="flex items-start gap-3"><span className="text-emerald-400 mt-1">✓</span> <span><strong>Neem seedlings in cogon soil</strong> — control/vermi/fermented treatment groups (Oct 2025)</span></li>
                <li className="flex items-start gap-3"><span className="text-emerald-400 mt-1">✓</span> <span><strong>Mykovam + biochar inoculant</strong> — tested in seedling trays & coconut trees</span></li>
              </ul>
            </div>

            {/* Experiments */}
            <div className="space-y-6 pt-4">
              <h4 className="text-xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-4">
                <FlaskConical className="w-6 h-6 text-blue-400" />
                High-ROI Experiments NOT Yet Done (Ranked by effort-to-learning ratio)
              </h4>

              {/* Exp 1 */}
              <div className="p-6 rounded-2xl bg-neutral-900/80 border border-white/5 hover:border-blue-500/30 transition-colors">
                <h5 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <span className="bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded text-sm">1</span> 
                  🔥 Cogon Chop-and-Drop + In-Situ Biochar Trench
                </h5>
                <p className="text-neutral-400 text-sm mb-4">Highest ROI • Derived from pending action d16323e8</p>
                <div className="space-y-3 text-sm text-neutral-300">
                  <p><strong>Action:</strong> Cut cogon, char it <em>in place</em> using a small trench burn, then immediately plant a nitrogen-fixer canopy species (ipil-ipil or madre de cacao) over the charred trench.</p>
                  <p><strong>Why:</strong> Converts cogon biomass to stable soil carbon without removal labor. Char suppresses regrowth by eliminating allelopathic root chemicals. Madre de cacao shade gives mani-mani the competitive edge.</p>
                  <p><strong>Measure:</strong> Soil carbon (Munsell color), worm count, mani-mani cover % at 30/60/90 days vs. control.</p>
                </div>
              </div>

              {/* Exp 2 */}
              <div className="p-6 rounded-2xl bg-neutral-900/80 border border-white/5 hover:border-blue-500/30 transition-colors">
                <h5 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded text-sm">2</span> 
                  💧 Azolla Green Manure Pre-Planting Treatment
                </h5>
                <p className="text-neutral-400 text-sm mb-4">Derived from azolla pond progress df83e270</p>
                <div className="space-y-3 text-sm text-neutral-300">
                  <p><strong>Action:</strong> Flood a small cogon-cleared patch → grow azolla for 4–6 weeks → incorporate as green manure before planting pioneer species.</p>
                  <p><strong>Why:</strong> Azolla fixes 80–120 kg N/ha/year. Applying it to cogon conversion adds near-zero-cost nitrogen input before permanent planting.</p>
                  <p><strong>Measure:</strong> Plant establishment rate and leaf color of pioneer species vs. non-treated plots.</p>
                </div>
              </div>

              {/* Exp 3 */}
              <div className="p-6 rounded-2xl bg-neutral-900/80 border border-white/5 hover:border-blue-500/30 transition-colors">
                <h5 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-sm">3</span> 
                  🌱 Shaded Mani-Mani &quot;Sod Transplant&quot; + Mykovam Inoculation
                </h5>
                <p className="text-neutral-400 text-sm mb-4">Combines Mykovam proven protocol 6c979f5f with promising mani-mani data 2c94cf19</p>
                <div className="space-y-3 text-sm text-neutral-300">
                  <p><strong>Action:</strong> Expand sod-transplant method BUT pre-charge the planting hole with Mykovam + biochar bunker mix.</p>
                  <p><strong>Why:</strong> Adding Mykovam could accelerate phosphorus access in depleted cogon clay soils and reduce the window during which cogon can re-invade.</p>
                  <p><strong>Measure:</strong> % ground cover at 30 days vs. mani-mani alone.</p>
                </div>
              </div>

              {/* Exp 4 */}
              <div className="p-6 rounded-2xl bg-neutral-900/80 border border-white/5 hover:border-blue-500/30 transition-colors">
                <h5 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <span className="bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded text-sm">4</span> 
                  🍄 Cogon Biomass → Vermicompost Applied Back to Zone
                </h5>
                <p className="text-neutral-400 text-sm mb-4">Tests if vermicomposting neutralizes cogon allelopathy</p>
                <div className="space-y-3 text-sm text-neutral-300">
                  <p><strong>Action:</strong> Cut cogon → compost/vermicompost → apply back to cleared cogon area as a surface mulch layer (5–10cm) before replanting.</p>
                  <p><strong>Why:</strong> Neutralizes allelopathic chemicals and closes the nutrient loop using existing composter infrastructure.</p>
                  <p><strong>Measure:</strong> Germination rate and survival of pioneer seedlings vs. unamended plots.</p>
                </div>
              </div>

              {/* Exp 5 */}
              <div className="p-6 rounded-2xl bg-neutral-900/80 border border-white/5 hover:border-blue-500/30 transition-colors">
                <h5 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <span className="bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded text-sm">5</span> 
                  📊 Side-by-Side Shade Trials: Madre de Cacao vs. Ipil-ipil
                </h5>
                <p className="text-neutral-400 text-sm mb-4">Iterating on past failure (1c459d17: 6/50 survival in clay)</p>
                <div className="space-y-3 text-sm text-neutral-300">
                  <p><strong>Action:</strong> Repeat terrace cutting trial but pre-amend planting holes with biochar + vermicompost. Test 3 treatments: madre de cacao alone, ipil-ipil alone, and madre de cacao + mani-mani.</p>
                  <p><strong>Why:</strong> The previous failure defines exactly what variable to test next (soil amendment in clay).</p>
                  <p><strong>Measure:</strong> Survival rate at 30/60/90 days, shade canopy coverage, cogon re-emergence rate.</p>
                </div>
              </div>
            </div>

            {/* Suggested Design & Policy */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="p-6 rounded-2xl bg-neutral-950/40 border border-white/5 space-y-4">
                <h4 className="text-lg font-semibold text-white flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-teal-400" />
                  Suggested Experiment Design
                </h4>
                <p className="text-sm text-neutral-400 mb-3">3-plot minimum to establish policy foundation:</p>
                <div className="space-y-2 text-sm text-neutral-300">
                  <div className="bg-white/5 p-2 rounded"><strong>Plot A:</strong> Full stack (chop-char + azolla + Mykovam sod)</div>
                  <div className="bg-white/5 p-2 rounded"><strong>Plot B:</strong> Single variable isolation</div>
                  <div className="bg-white/5 p-2 rounded"><strong>Plot C:</strong> Control (cogon regrowth, no intervention)</div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-teal-950/30 border border-teal-500/20 space-y-4">
                <h4 className="text-lg font-semibold text-white flex items-center gap-2 mb-2">
                  <Sprout className="w-5 h-5 text-emerald-400" />
                  Resulting Policy Direction
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  A robust policy will likely have 3 phases: 
                  <br/><br/>
                  <strong>(1) Deplete</strong> cogon via cutting + in-situ char.<br/>
                  <strong>(2) Seed</strong> with nitrogen-fixer canopy + azolla mulch.<br/>
                  <strong>(3) Colonize</strong> with shade-tolerant mani-mani + Mykovam. 
                  <br/><br/>
                  The Mykovam + biochar protocol already developed is Phase 3&apos;s core tool—it just needs field validation.
                </p>
              </div>
            </div>

            {/* Data Sources Context Block */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <details className="group">
                <summary className="flex items-center gap-2 cursor-pointer text-sm font-mono text-neutral-500 hover:text-teal-400 transition-colors list-none outline-none">
                  <Database className="w-4 h-4" />
                  <span>View 28 Synthesized Data Records</span>
                  <ChevronRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="mt-4 p-4 rounded-xl bg-black/50 border border-white/5 text-xs text-neutral-400 font-mono space-y-4">
                  <div>
                    <strong className="text-neutral-300">Actions (Key):</strong>
                    <ul className="mt-2 space-y-1 list-disc list-inside opacity-80">
                      <li>2c94cf19 — Support conversion to Maniani (Sep 2025–Jan 2026)</li>
                      <li>57e83e89 — Grass cut (cogon for vermicompost, May 2026)</li>
                      <li>430fa39e — Collect soil sample from cogon area (Oct 2025)</li>
                      <li>57da7e1e — Plant Neem seedlings in cogon soil (Oct 2025)</li>
                      <li>6c979f5f — Create plant starter soil with Mykovam + biochar protocol (Apr 2026)</li>
                      <li>d16323e8 — Biochar trench method (not started)</li>
                      <li>7d58c576 — Azolla/duckweed rapid growth experiment (in progress)</li>
                      <li>df83e270 — Build azolla pond (in progress)</li>
                      <li>bfdd3441 — Plant mani-mani for erosion/beautification (Feb 2026)</li>
                      <li>8c3584e7 — Plant madre de cacao (Jan 2026)</li>
                      <li>1c459d17 — State: 6/50 survival in clay, madre de cacao vs ipil-ipil terrace trial</li>
                      <li>0fcee827 — Biochar training (Mar 2026)</li>
                      <li>f1d79177 — Create Compost (Mar–Apr 2026)</li>
                      <li>2acdd4ae — Apply vermi/leachate/biochar/fermented fish experiment (Jan–Feb 2026)</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-neutral-300">States (Key):</strong>
                    <ul className="mt-2 space-y-1 list-disc list-inside opacity-80">
                      <li>d6ad693a — Stefan&apos;s cogon conversion strategy observation (Sep 2025)</li>
                      <li>b294a16d — Azolla pH troubleshooting</li>
                      <li>db1d5981, 00f6cb2b — Mani-mani establishment in cogon zones</li>
                      <li>902facbd — Mykovam + vermitea application across multiple zones</li>
                    </ul>
                  </div>
                </div>
              </details>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
