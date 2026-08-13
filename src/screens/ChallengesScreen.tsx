import React from 'react';
import { Flame, Medal, Target } from 'lucide-react';
import { Card, Button } from '../components/ui';
import { ScreenType } from '../App';

export function ChallengesScreen({ navigate }: { navigate: (s: ScreenType) => void }) {
  return (
    <div className="flex flex-col min-h-screen p-4 pt-10 gap-4">
      <header className="mb-2">
        <h1 className="text-2xl font-display font-black tracking-tight text-glow">CHALLENGES</h1>
        <p className="text-sm text-muted-foreground font-bold mt-1">Complete tasks to earn XP and unique badges.</p>
      </header>

      <div className="flex flex-col gap-4">
        {/* Featured Challenge */}
        <Card className="p-0 bg-gradient-to-br from-zinc-900 to-black border-primary/50 overflow-hidden relative group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-[id]?w=600&h=400&fit=crop')] opacity-20 group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
          
          <div className="relative p-5 flex flex-col h-[200px] justify-end">
            <div className="absolute top-4 right-4 bg-primary text-black text-[10px] font-black px-2 py-1 rounded-sm">HOT</div>
            <h2 className="font-display font-black text-2xl mb-1 text-glow">150 KG BENCH CLUB</h2>
            <p className="text-sm font-bold text-muted-foreground mb-4">Join 4,283 lifters who have reached 150 KG.</p>
            <div className="flex items-center gap-3">
              <Button size="sm" className="bg-primary/20 text-primary border-primary/50 flex-1 hover:bg-primary/30">JOIN CHALLENGE</Button>
              <div className="text-right">
                <p className="text-[10px] font-bold uppercase text-primary">Reward</p>
                <p className="text-sm font-bold flex items-center gap-1"><Medal size={14} className="text-primary"/> Badge</p>
              </div>
            </div>
          </div>
        </Card>

        {/* List */}
        {[
          { title: 'TOP 1% CHALLENGE', desc: 'Reach the top 1% of your bodyweight category.', reward: 'Title', icon: <Target size={24} className="text-cyan-400" /> },
          { title: 'WEEKLY BENCH', desc: 'Set your biggest valid bench this week.', reward: '+500 XP', icon: <Flame size={24} className="text-orange-400" /> }
        ].map((c, i) => (
          <Card key={i} className="p-4 bg-zinc-950 flex gap-4 items-center">
            <div className="w-14 h-14 rounded-xl bg-zinc-900 flex items-center justify-center flex-shrink-0">
              {c.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-display font-black text-lg mb-1 leading-tight">{c.title}</h3>
              <p className="text-xs font-bold text-muted-foreground">{c.desc}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-[10px] font-bold uppercase text-muted-foreground mb-0.5">Reward</p>
              <p className="text-sm font-bold text-primary">{c.reward}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}