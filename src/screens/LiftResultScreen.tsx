import React, { useEffect, useState } from 'react';
import { CheckCircle2, ArrowUp, Share2 } from 'lucide-react';
import { Button, RankBadge } from '../components/ui';

export function LiftResultScreen({ onContinue }: { onContinue: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 1000);
    const t2 = setTimeout(() => setStep(2), 2500);
    const t3 = setTimeout(() => setStep(3), 4000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black items-center justify-center p-6 relative overflow-hidden text-center">
      {/* Background glow */}
      <div className={`absolute inset-0 bg-primary/20 blur-[100px] transition-opacity duration-1000 ${step >= 2 ? 'opacity-100' : 'opacity-0'}`} />

      {/* Step 0 & 1: Validation */}
      <div className={`transition-all duration-700 transform ${step === 0 ? 'scale-90 opacity-0' : 'scale-100 opacity-100'} ${step >= 2 ? 'translate-y-[-100px] scale-75 opacity-50' : ''}`}>
        <div className="flex items-center justify-center gap-3 text-green-400 mb-2">
          <CheckCircle2 size={48} className="animate-bounce" />
          <h1 className="text-4xl font-display font-black tracking-tight uppercase">VALID LIFT</h1>
        </div>
        <p className="text-muted-foreground font-bold uppercase tracking-widest text-sm">Community Verified</p>
      </div>

      {/* Step 2: Rank Change */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full transition-all duration-700 transform ${step < 2 ? 'scale-90 opacity-0 translate-y-[50px]' : 'scale-100 opacity-100'} ${step >= 3 ? 'translate-y-[-120px] scale-75 opacity-0' : ''}`}>
        <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">New Rank</h2>
        <div className="flex items-center justify-center gap-6 mb-4">
          <div className="text-right opacity-50">
            <p className="text-xs font-bold uppercase">Previous</p>
            <p className="text-2xl font-display font-black line-through">#5,012</p>
          </div>
          <div className="text-primary text-5xl font-display font-black text-glow">
            #4,523
          </div>
        </div>
        <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-green-500/20 text-green-400 font-bold border border-green-500/30">
          <ArrowUp size={16} /> 489 POSITIONS
        </div>
      </div>

      {/* Step 3: New Tier Achieved */}
      <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 w-full transition-all duration-1000 transform ${step < 3 ? 'scale-50 opacity-0 translate-y-[100px]' : 'scale-100 opacity-100'}`}>
        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4 animate-pulse">NEW RANK ACHIEVED</h2>
        
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-cyan-500/30 blur-[40px] rounded-full" />
          <div className="w-32 h-32 mx-auto rounded-full border-4 border-cyan-400 bg-zinc-900 flex items-center justify-center text-6xl shadow-[0_0_50px_rgba(34,211,238,0.5)] relative z-10">
            💎
          </div>
        </div>

        <h1 className="text-5xl font-display font-black text-cyan-400 mb-2 tracking-tighter" style={{ textShadow: '0 0 20px rgba(34,211,238,0.5)' }}>
          DIAMOND III
        </h1>

        <p className="text-2xl font-display font-bold text-white mb-8">+450 XP</p>
        
        <div className="w-64 mx-auto mb-2">
          <div className="flex justify-between text-[10px] font-bold uppercase mb-2">
            <span className="text-cyan-400">Current</span>
            <span className="text-muted-foreground">1,200 XP TO DIAMOND II</span>
          </div>
          <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden">
            <div className="h-full bg-cyan-400 w-[20%]" />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className={`absolute bottom-10 left-6 right-6 transition-all duration-1000 transform ${step < 3 ? 'translate-y-20 opacity-0' : 'translate-y-0 opacity-100'}`}>
        <div className="flex flex-col gap-3">
          <Button size="lg" className="w-full text-lg gap-2 shadow-[0_0_20px_rgba(255,215,0,0.3)]">
            <Share2 size={20} /> SHARE MY RESULT
          </Button>
          <Button size="lg" variant="ghost" className="w-full text-muted-foreground hover:text-white" onClick={onContinue}>
            CONTINUE
          </Button>
        </div>
      </div>
    </div>
  );
}