import React from 'react';
import { Settings, Share } from 'lucide-react';
import { Card, RankBadge, Button } from '../components/ui';
import { ScreenType } from '../App';

export function ProfileScreen({ navigate }: { navigate: (s: ScreenType) => void }) {
  return (
    <div className="flex flex-col min-h-screen p-4 pt-10 gap-6">
      <header className="flex justify-between items-center">
        <h1 className="text-xl font-display font-black tracking-tight">MY PROFILE</h1>
        <div className="flex gap-3">
          <button className="text-muted-foreground hover:text-foreground"><Share size={20} /></button>
          <button className="text-muted-foreground hover:text-foreground"><Settings size={20} /></button>
        </div>
      </header>

      {/* Header Info */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-zinc-800 border-2 border-primary overflow-hidden shadow-[0_0_15px_rgba(255,215,0,0.3)]">
            <img src="https://images.unsplash.com/photo-[id]?w=150&h=150&fit=crop" alt="Alex" className="w-full h-full object-cover opacity-80" />
          </div>
          <div className="absolute -bottom-2 -right-2">
            <RankBadge rank="DIAMOND" className="text-[10px] px-1.5 py-0" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-display font-black">Alex</h2>
          <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground mt-1">
            <span>🇪🇸 Spain</span>
            <span>•</span>
            <span>82.5 KG BW</span>
          </div>
        </div>
      </div>

      {/* Ranks & XP */}
      <Card className="p-4 bg-zinc-950">
        <div className="flex justify-between items-center mb-3">
          <div>
            <p className="text-xs font-bold text-muted-foreground uppercase">Global Rank</p>
            <p className="text-xl font-display font-bold text-glow">#4,523</p>
          </div>
          <div className="w-px h-8 bg-border" />
          <div>
            <p className="text-xs font-bold text-muted-foreground uppercase">Country Rank</p>
            <p className="text-xl font-display font-bold">#137 🇪🇸</p>
          </div>
          <div className="w-px h-8 bg-border" />
          <div>
            <p className="text-xs font-bold text-muted-foreground uppercase">Top</p>
            <p className="text-xl font-display font-bold text-primary">2.4%</p>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between text-xs font-bold mb-1.5">
            <span className="text-muted-foreground">XP 7,840 / 10,000</span>
            <span className="text-purple-400">2,160 XP to MASTER</span>
          </div>
          <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-purple-500 w-[78%] shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
          </div>
        </div>
      </Card>

      {/* Core Lifts */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">Strength Statistics</h3>
        <div className="grid grid-cols-2 gap-3">
          <Card className="p-4 bg-primary/10 border-primary/30">
            <p className="text-xs font-bold text-primary mb-1 uppercase">Bench Press</p>
            <p className="text-3xl font-display font-black text-white">145 <span className="text-lg text-primary">KG</span></p>
          </Card>
          <Card className="p-4 bg-zinc-900 border-zinc-800 opacity-60">
            <p className="text-xs font-bold text-muted-foreground mb-1 uppercase">Squat</p>
            <p className="text-3xl font-display font-black">200 <span className="text-lg text-muted-foreground">KG</span></p>
          </Card>
          <Card className="p-4 bg-zinc-900 border-zinc-800 opacity-60">
            <p className="text-xs font-bold text-muted-foreground mb-1 uppercase">Deadlift</p>
            <p className="text-3xl font-display font-black">240 <span className="text-lg text-muted-foreground">KG</span></p>
          </Card>
          <Card className="p-4 bg-zinc-900 border-zinc-800">
            <p className="text-xs font-bold text-muted-foreground mb-1 uppercase">Total</p>
            <p className="text-3xl font-display font-black">585 <span className="text-lg text-muted-foreground">KG</span></p>
          </Card>
        </div>
      </div>

      <div className="flex gap-3 mt-4">
        <Button className="flex-1" variant="outline">Edit Profile</Button>
        <Button className="flex-1">Share Profile</Button>
      </div>
    </div>
  );
}