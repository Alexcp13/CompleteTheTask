import React from 'react';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import { Card, RankBadge, Button } from '../components/ui';
import { ScreenType } from '../App';

export function HomeScreen({ navigate }: { navigate: (s: ScreenType) => void }) {
  return (
    <div className="flex flex-col min-h-screen p-4 pt-10 gap-6">
      <header className="flex justify-between items-start">
        <div>
          <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Good Evening,</p>
          <h1 className="text-2xl font-display font-black">ALEX</h1>
        </div>
        <div className="text-right">
          <RankBadge rank="DIAMOND" className="mb-1" />
          <p className="text-sm font-bold">GLOBAL #4,523</p>
        </div>
      </header>

      {/* Goal Card */}
      <Card className="p-4 bg-gradient-to-br from-zinc-900 to-black border-zinc-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px]" />
        <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Your Next Goal</h2>
        <p className="text-xl font-display font-bold mb-3 text-glow">150 KG BENCH</p>
        
        <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden mb-2">
          <div className="h-full bg-primary w-[90%] shadow-[0_0_10px_rgba(255,215,0,0.5)]" />
        </div>
        <div className="flex justify-between text-xs font-bold">
          <span className="text-muted-foreground">145 KG</span>
          <span className="text-primary">5 KG TO GO</span>
        </div>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="p-4 flex flex-col justify-center items-center text-center cursor-pointer hover:border-primary/50 transition-colors" onClick={() => navigate('CHALLENGES')}>
          <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-2">
            <ArrowUpRight size={18} strokeWidth={3} />
          </div>
          <p className="text-xs font-bold text-muted-foreground uppercase mb-1">Weekly Pos.</p>
          <p className="text-xl font-display font-bold text-green-400">+183</p>
        </Card>
        <Card className="p-4 flex flex-col justify-center items-center text-center cursor-pointer hover:border-primary/50 transition-colors" onClick={() => navigate('ACHIEVEMENTS')}>
          <div className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center mb-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
          </div>
          <p className="text-xs font-bold text-muted-foreground uppercase mb-1">XP to Master</p>
          <p className="text-xl font-display font-bold text-purple-400">2,160</p>
        </Card>
      </div>

      {/* Friends Feed Preview */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Your Friends Are Lifting</h2>
          <button className="text-xs font-bold text-primary flex items-center" onClick={() => navigate('FEED')}>
            VIEW ALL <ChevronRight size={14} />
          </button>
        </div>
        
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="min-w-[140px] h-[200px] flex-shrink-0 relative overflow-hidden group cursor-pointer" onClick={() => navigate('FEED')}>
              <img src={`https://images.unsplash.com/photo-[id]?w=300&h=400&fit=crop&auto=format`} alt="Lift thumbnail" className="absolute inset-0 w-full h-full object-cover bg-zinc-800 opacity-60 group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-[10px] font-bold text-primary mb-1">180 KG BENCH</p>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-zinc-700" />
                  <p className="text-xs font-bold truncate">Mike</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Challenges Preview */}
      <Card className="p-4 border-primary/20 bg-primary/5 cursor-pointer" onClick={() => navigate('CHALLENGES')}>
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-display font-bold text-lg">150 KG BENCH CLUB</h3>
          <span className="text-xs font-bold bg-primary text-black px-2 py-0.5 rounded-sm">HOT</span>
        </div>
        <p className="text-xs text-muted-foreground mb-3">Join 4,283 lifters who have reached 150 KG.</p>
        <Button size="sm" variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary/20">VIEW CHALLENGE</Button>
      </Card>
    </div>
  );
}