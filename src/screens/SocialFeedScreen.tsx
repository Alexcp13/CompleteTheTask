import React from 'react';
import { Heart, MessageCircle, Share2, CheckCircle2, AlertTriangle, Play } from 'lucide-react';
import { RankBadge } from '../components/ui';
import { ScreenType } from '../App';

export function SocialFeedScreen({ navigate }: { navigate: (s: ScreenType) => void }) {
  return (
    <div className="flex flex-col h-screen bg-black relative snap-y snap-mandatory overflow-y-auto pb-20 scrollbar-hide">
      
      {/* Video Item 1 */}
      <div className="h-full w-full relative snap-start shrink-0 flex items-center justify-center bg-zinc-900 overflow-hidden">
        {/* Mock Video Background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-[id]?w=800&h=1600&fit=crop')] bg-cover bg-center opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90" />
        
        {/* Play overlay mock */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <Play size={64} className="text-white/50" />
        </div>

        {/* Content */}
        <div className="absolute bottom-6 left-4 right-16 flex flex-col gap-2 z-10">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-10 h-10 rounded-full bg-zinc-800 border border-primary" />
            <div>
              <p className="text-sm font-bold flex items-center gap-1">Marcus 🇺🇸</p>
              <RankBadge rank="MASTER" className="text-[9px] px-1.5 py-0" />
            </div>
          </div>
          
          <h2 className="text-3xl font-display font-black text-glow tracking-tight uppercase leading-none">180 KG BENCH PRESS</h2>
          
          <div className="flex items-center gap-3 mt-1">
            <span className="text-xs font-bold text-primary">#1,204 GLOBAL</span>
            <span className="text-xs font-bold text-green-400 flex items-center gap-1"><CheckCircle2 size={12} /> 98% VALID</span>
          </div>
          
          {/* Validation Voting */}
          <div className="flex gap-2 mt-3">
            <button className="flex-1 bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/30 rounded-lg py-2 text-xs font-bold uppercase transition-colors">
              Valid
            </button>
            <button className="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30 rounded-lg py-2 text-xs font-bold uppercase transition-colors">
              Dubious
            </button>
          </div>
        </div>

        {/* Action Bar */}
        <div className="absolute bottom-10 right-2 flex flex-col items-center gap-6 z-10">
          <button className="flex flex-col items-center gap-1 group">
            <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Heart size={24} className="text-white group-hover:text-primary transition-colors" />
            </div>
            <span className="text-[10px] font-bold">12.4K</span>
          </button>
          <button className="flex flex-col items-center gap-1 group">
            <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <MessageCircle size={24} className="text-white group-hover:text-primary transition-colors" />
            </div>
            <span className="text-[10px] font-bold">342</span>
          </button>
          <button className="flex flex-col items-center gap-1 group">
            <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Share2 size={24} className="text-white group-hover:text-primary transition-colors" />
            </div>
            <span className="text-[10px] font-bold">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}