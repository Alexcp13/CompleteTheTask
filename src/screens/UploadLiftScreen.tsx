import React, { useState } from 'react';
import { Camera, Video, UploadCloud } from 'lucide-react';
import { Button, Card, cn } from '../components/ui';
import { ScreenType } from '../App';

export function UploadLiftScreen({ navigate, onSuccess }: { navigate: (s: ScreenType) => void, onSuccess: () => void }) {
  const [exercise, setExercise] = useState('BENCH PRESS');
  
  return (
    <div className="flex flex-col min-h-screen p-4 pt-10 gap-6">
      <header>
        <h1 className="text-2xl font-display font-black tracking-tight text-glow mb-2">UPLOAD LIFT</h1>
        <p className="text-sm text-muted-foreground">Select your exercise and enter your stats.</p>
      </header>

      {/* Exercise Selection */}
      <div className="flex flex-col gap-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Exercise</h3>
        <div className="grid grid-cols-3 gap-2">
          {['BENCH PRESS', 'SQUAT', 'DEADLIFT'].map(e => (
            <button
              key={e}
              onClick={() => setExercise(e)}
              className={cn(
                "py-3 px-2 rounded-xl text-xs font-display font-bold uppercase transition-all",
                exercise === e ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(255,215,0,0.3)] scale-105" : "bg-zinc-900 text-muted-foreground border border-zinc-800"
              )}
            >
              {e}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Input */}
      <div className="flex gap-4">
        <div className="flex-1 flex flex-col gap-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Weight Lifted</h3>
          <div className="relative">
            <input type="number" defaultValue="145" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-4 px-4 text-3xl font-display font-black text-white focus:outline-none focus:border-primary transition-colors text-center" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-muted-foreground">KG</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Bodyweight</h3>
          <div className="relative">
            <input type="number" defaultValue="82.5" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-4 px-4 text-3xl font-display font-black text-white focus:outline-none focus:border-primary transition-colors text-center" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-muted-foreground">KG</span>
          </div>
        </div>
      </div>

      {/* Video Upload */}
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Upload Video</h3>
        <button className="flex-1 w-full bg-zinc-900/50 border-2 border-dashed border-zinc-800 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-primary/50 hover:bg-primary/5 transition-all group">
          <div className="w-16 h-16 rounded-full bg-zinc-800 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
            <Video size={32} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <div className="text-center">
            <p className="font-display font-bold text-lg mb-1">RECORD OR SELECT</p>
            <p className="text-xs text-muted-foreground">Must clearly show the entire lift.</p>
          </div>
        </button>
      </div>

      <Button size="lg" className="w-full py-6 text-xl mb-4 shadow-[0_0_20px_rgba(255,215,0,0.5)] animate-pulse" onClick={onSuccess}>
        SUBMIT LIFT
      </Button>
    </div>
  );
}