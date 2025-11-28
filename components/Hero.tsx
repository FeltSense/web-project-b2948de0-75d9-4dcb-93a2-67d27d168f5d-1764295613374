'use client';

import { TrendingUp, Users, BarChart3, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-slate-950 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-violet-600/10 border border-violet-500/20 rounded-full px-4 py-2 mb-8">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span className="text-violet-300 text-sm font-medium">AI-Powered People Analytics</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white mb-8">
              Decode Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-emerald-400">
                Workplace Culture
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Transform employee feedback into actionable insights. Predict attrition, boost engagement, and build a culture where top talent thrives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md inline-flex items-center justify-center gap-2">
                Start Free Trial
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#services" className="border-2 border-slate-700 text-white hover:bg-slate-800 font-semibold rounded-xl px-8 py-4 transition-all duration-300 inline-flex items-center justify-center gap-2">
                See How It Works
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-slate-800">
              <p className="text-slate-500 text-sm mb-4">Trusted by 2,500+ HR teams worldwide</p>
              <div className="flex items-center justify-center lg:justify-start gap-8">
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">94%</p>
                  <p className="text-slate-500 text-sm">Retention Rate</p>
                </div>
                <div className="w-px h-10 bg-slate-800" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">3.2M</p>
                  <p className="text-slate-500 text-sm">Employees Analyzed</p>
                </div>
                <div className="w-px h-10 bg-slate-800" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">47%</p>
                  <p className="text-slate-500 text-sm">Less Turnover</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dashboard Preview */}
          <div className="relative">
            <div className="relative bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-slate-800/50 px-6 py-4 border-b border-slate-700 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 bg-slate-700 rounded-lg h-6 max-w-xs" />
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6 space-y-6">
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-violet-400" />
                      <span className="text-slate-400 text-xs">Engagement</span>
                    </div>
                    <p className="text-2xl font-bold text-white">87%</p>
                    <p className="text-emerald-400 text-xs">+12% this quarter</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <span className="text-slate-400 text-xs">eNPS Score</span>
                    </div>
                    <p className="text-2xl font-bold text-white">+72</p>
                    <p className="text-emerald-400 text-xs">Excellent</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="w-4 h-4 text-violet-400" />
                      <span className="text-slate-400 text-xs">Retention</span>
                    </div>
                    <p className="text-2xl font-bold text-white">94%</p>
                    <p className="text-emerald-400 text-xs">Above target</p>
                  </div>
                </div>
                
                {/* Chart Placeholder */}
                <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white font-medium">Culture Health Score</span>
                    <span className="text-emerald-400 text-sm">Live</span>
                  </div>
                  <div className="flex items-end gap-2 h-32">
                    {[65, 72, 68, 80, 75, 82, 78, 85, 88, 87, 90, 92].map((height, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-violet-600 to-violet-400 rounded-t-sm" style={{ height: `${height}%` }} />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-slate-500 text-xs">
                    <span>Jan</span>
                    <span>Jun</span>
                    <span>Dec</span>
                  </div>
                </div>
                
                {/* Insights */}
                <div className="bg-violet-600/10 border border-violet-500/20 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">AI Insight</p>
                      <p className="text-slate-400 text-xs mt-1">Engineering team shows 23% higher engagement after flexible work policy. Consider expanding to other departments.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-slate-900 font-semibold text-sm">Attrition Risk</p>
                  <p className="text-emerald-600 text-xs font-medium">Down 34%</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <p className="text-slate-900 font-semibold text-sm">Team Sentiment</p>
                  <p className="text-violet-600 text-xs font-medium">92% Positive</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
