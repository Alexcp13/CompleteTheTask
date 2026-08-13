import React, { useState } from 'react';
import { Search, Filter, Trophy, ArrowUp } from 'lucide-react';
import { Card, RankBadge, cn } from '../components/ui';
import { ScreenType } from '../App';

export function GlobalRankingScreen({ navigate }: { navigate: (s: ScreenType) => void }) {
  const [activeTab, setActiveTab] = useState('WORLD');

  return (
    <div className="flex flex-col min-h-screen p-4 pt-10 gap-4">
      <header>
        <h1 className="text-2xl font-display font-black tracking-tight text-glow mb-4">GLOBAL RANKING</h1>
        
        {/* Tabs */}
        <div className="flex gap-2 border-b border-border pb-1">
          {['WORLD', 'COUNTRY', 'FRIENDS'].map(t => (
            <button 
              key={t}
              onClick={() => setActiveTab(t)}
              className={cn(
                "px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors border-b-2",
                activeTab === t ? "text-primary border-primary" : "text-muted-foreground border-transparent hover:text-white"
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </header>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
        <button className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold text-white">
          BENCH PRESS
        </button>
        <button className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold text-muted-foreground">
          BODYWEIGHT <Filter size={12} />
        </button>
        <button className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold text-muted-foreground">
          AGE <Filter size={12} />
        </button>
      </div>

      {/* User Status Bar */}
      <Card className="p-3 bg-primary/10 border-primary/30 flex items-center justify-between shadow-[0_0_15px_rgba(255,215,0,0.15)] sticky top-0 z-10 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="text-xl font-display font-black text-primary w-12">#4,523</span>
          <div>
            <p className="text-xs font-bold uppercase">You (145 KG)</p>
            <p className="text-[10px] text-green-400 font-bold flex items-center"><ArrowUp size={10} className="mr-0.5" /> 183 positions this week</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-muted-foreground font-bold uppercase">Next Goal</p>
          <p className="text-xs font-bold">12 KG to reach #4,000</p>
        </div>
      </Card>

      {/* Ranking List */}
      <div className="flex flex-col gap-2 mt-2">
        {/* Top 3 Demo */}
        <div className="flex flex-col gap-2">
          <RankingRow rank={1} name="Mike" country="🇺🇸" lift="220" userRank="LEGEND" />
          <RankingRow rank={2} name="James" country="🇬🇧" lift="210" userRank="MASTER" />
          <RankingRow rank={3} name="Carlos" country="🇪🇸" lift="205" userRank="DIAMOND" />
          <div className="h-px bg-zinc-800 my-2" />
          <RankingRow rank={4520} name="David" country="🇩🇪" lift="145.5" userRank="PLATINUM" />
          <RankingRow rank={4521} name="John" country="🇨🇦" lift="145" userRank="PLATINUM" />
          <RankingRow rank={4522} name="Lucas" country="🇫🇷" lift="145" userRank="PLATINUM" />
          {/* User row embedded */}
          <Card className="p-3 flex items-center justify-between bg-zinc-900 border-primary/50 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
            <div className="flex items-center gap-3">
              <span className="text-lg font-display font-black text-primary w-12">4523</span>
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex-shrink-0" />
              <div>
                <p className="text-sm font-bold flex items-center gap-1.5">You 🇪🇸</p>
                <RankBadge rank="DIAMOND" className="mt-0.5 text-[9px] px-1.5 py-0" />
              </div>
            </div>
            <div className="text-right">
              <p className="text-xl font-display font-black">145 <span className="text-xs text-muted-foreground font-sans">KG</span></p>
            </div>
          </Card>
          <RankingRow rank={4524} name="Sam" country="🇦🇺" lift="144" userRank="GOLD" />
          <RankingRow rank={4525} name="Tom" country="🇺🇸" lift="144" userRank="GOLD" />
        </div>
      </div>
    </div>
  );
}

function RankingRow({ rank, name, country, lift, userRank }: { rank: number, name: string, country: string, lift: string, userRank: string }) {
  
  let rowStyle = "bg-zinc-950 border-zinc-900";
  if (userRank === 'LEGEND') rowStyle = "bg-gradient-to-r from-zinc-900 to-purple-900/20 border-purple-500/30";
  if (userRank === 'MASTER') rowStyle = "bg-gradient-to-r from-zinc-900 to-orange-900/20 border-orange-500/30";
  if (userRank === 'DIAMOND') rowStyle = "bg-gradient-to-r from-zinc-900 to-cyan-900/10 border-cyan-500/20";
  
  return (
    <Card className={cn("p-3 flex items-center justify-between", rowStyle)}>
      <div className="flex items-center gap-3">
        <span className="text-lg font-display font-black text-muted-foreground w-12">{rank}</span>
        <div className="w-10 h-10 rounded-full bg-zinc-800 flex-shrink-0" />
        <div>
          <p className="text-sm font-bold flex items-center gap-1.5">{name} {country}</p>
          <RankBadge rank={userRank} className="mt-0.5 text-[9px] px-1.5 py-0" />
        </div>
      </div>
      <div className="text-right">
        <p className="text-xl font-display font-black">{lift} <span className="text-xs text-muted-foreground font-sans">KG</span></p>
      </div>
    </Card>
  );
}