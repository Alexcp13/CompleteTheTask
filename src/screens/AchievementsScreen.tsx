import React from 'react';
import { Trophy, Lock, Medal, Star, Shield, Zap, Globe } from 'lucide-react';
import { Card } from '../components/ui';
import { ScreenType } from '../App';

export function AchievementsScreen({ navigate }: { navigate: (s: ScreenType) => void }) {
  return (
    <div className="flex flex-col min-h-screen p-4 pt-10 gap-4">
      <header className="mb-4">
        <h1 className="text-2xl font-display font-black tracking-tight text-glow text-center">ACHIEVEMENTS</h1>
        <div className="mt-6 p-4 bg-zinc-900 rounded-2xl flex items-center justify-between border border-zinc-800">
          <div>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Total Trophies</p>
            <p className="text-3xl font-display font-black">12<span className="text-lg text-zinc-600">/45</span></p>
          </div>
          <Trophy size={40} className="text-primary opacity-50" strokeWidth={1.5} />
        </div>
      </header>

      <div className="grid grid-cols-2 gap-3">
        {[
          { name: 'First 100 KG', icon: <Medal size={28} className="text-orange-400" />, unlocked: true },
          { name: '150 KG Club', icon: <FlameIcon />, unlocked: false },
          { name: 'Diamond Rank', icon: <div className="text-3xl">💎</div>, unlocked: true },
          { name: 'Top 1% Global', icon: <div className="text-3xl">👑</div>, unlocked: false },
          { name: '10 Valid Lifts', icon: <Zap size={28} className="text-yellow-400" />, unlocked: true },
          { name: 'Intl Ranking', icon: <Globe size={28} className="text-cyan-400" />, unlocked: true },
        ].map((a, i) => (
          <Card key={i} className={`p-4 aspect-square flex flex-col items-center justify-center text-center gap-3 relative overflow-hidden transition-all ${a.unlocked ? 'bg-zinc-900 border-zinc-700 hover:border-primary/50' : 'bg-zinc-950 border-zinc-900 opacity-50 grayscale'}`}>
            <div className={`w-16 h-16 rounded-full flex items-center justify-center ${a.unlocked ? 'bg-black shadow-inner' : 'bg-zinc-900'}`}>
              {a.unlocked ? a.icon : <Lock size={24} className="text-zinc-700" />}
            </div>
            <p className="font-display font-bold text-sm leading-tight">{a.name}</p>
            
            {a.unlocked && <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />}
          </Card>
        ))}
      </div>
    </div>
  );
}

function FlameIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7 text-red-500">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
    </svg>
  );
}