import React from 'react';
import { Users, Search, UserPlus } from 'lucide-react';
import { Card, RankBadge, Button } from '../components/ui';
import { ScreenType } from '../App';

export function FriendsScreen({ navigate }: { navigate: (s: ScreenType) => void }) {
  return (
    <div className="flex flex-col min-h-screen p-4 pt-10 gap-4">
      <header className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-display font-black tracking-tight text-glow">MY FRIENDS</h1>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800"><Search size={18} /></button>
          <button className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center border border-primary/30"><UserPlus size={18} /></button>
        </div>
      </header>

      {/* Competitive Comparison */}
      <Card className="p-4 bg-gradient-to-r from-zinc-900 to-zinc-950 border-primary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[30px]" />
        <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-4 text-center">Rivalry</h3>
        
        <div className="flex items-center justify-between">
          <div className="text-center w-1/3">
            <p className="font-display font-black text-xl mb-1">YOU</p>
            <p className="text-2xl font-display font-black text-glow mb-1">145 KG</p>
            <p className="text-xs font-bold text-muted-foreground">#4,523</p>
          </div>
          
          <div className="text-center font-display font-black text-3xl text-zinc-800 italic w-1/3">VS</div>
          
          <div className="text-center w-1/3">
            <p className="font-display font-black text-xl mb-1">MIKE</p>
            <p className="text-2xl font-display font-black mb-1">150 KG</p>
            <p className="text-xs font-bold text-muted-foreground">#4,120</p>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-zinc-800 text-center">
          <p className="text-sm font-bold">Mike is <span className="text-primary text-glow">5 KG</span> ahead of you.</p>
        </div>
      </Card>

      {/* Friends List */}
      <div className="flex flex-col gap-2 mt-4">
        {[
          { name: 'Mike', country: '🇺🇸', rank: 'MASTER', lift: 150, global: '#4,120' },
          { name: 'Sarah', country: '🇨🇦', rank: 'DIAMOND', lift: 90, global: '#12,400' },
          { name: 'David', country: '🇬🇧', rank: 'PLATINUM', lift: 130, global: '#18,203' },
          { name: 'Alex (You)', country: '🇪🇸', rank: 'DIAMOND', lift: 145, global: '#4,523', isYou: true }
        ].sort((a,b) => b.lift - a.lift).map((f, i) => (
          <Card key={i} className={`p-3 flex items-center justify-between ${f.isYou ? 'bg-primary/5 border-primary/50' : 'bg-zinc-950'}`}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-zinc-800 flex-shrink-0" />
              <div>
                <p className="text-sm font-bold flex items-center gap-1.5">{f.name} {f.country}</p>
                <RankBadge rank={f.rank} className="mt-0.5 text-[9px] px-1.5 py-0" />
              </div>
            </div>
            <div className="text-right">
              <p className="text-xl font-display font-black">{f.lift} <span className="text-xs text-muted-foreground font-sans">KG</span></p>
              <p className="text-[10px] font-bold text-muted-foreground">{f.global}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}