import React from 'react';
import { Button } from '../components/ui';

export function WelcomeScreen({ onLogin }: { onLogin: () => void }) {
  return (
    <div className="flex flex-col min-h-screen bg-background items-center justify-center p-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="flex-1 flex flex-col items-center justify-center w-full z-10 max-w-sm mx-auto">
        {/* LOGO */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-zinc-800 flex items-center justify-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/10" />
            <span className="text-4xl font-display font-black tracking-tighter text-white">LK</span>
            {/* Minimal Crown/K suggestion */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(255,215,0,0.8)]" />
          </div>
        </div>

        <h1 className="text-4xl font-display font-black tracking-tight mb-2 text-glow">LIFT KING</h1>
        <p className="text-xl font-display font-bold text-primary mb-6 text-center uppercase tracking-wide">
          Prove how strong you are.
        </p>
        
        <p className="text-center text-muted-foreground mb-12 text-sm leading-relaxed px-4">
          Upload your lifts. Climb the global rankings. Challenge your friends.
        </p>

        <div className="w-full space-y-4">
          <Button className="w-full" size="lg" onClick={onLogin}>
            Create Account
          </Button>
          <Button className="w-full" variant="outline" size="lg" onClick={onLogin}>
            Log In
          </Button>
        </div>
        
        <div className="w-full mt-8 pt-8 border-t border-border flex flex-col gap-3">
          <Button variant="secondary" className="w-full font-sans normal-case font-medium text-sm gap-2" onClick={onLogin}>
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/></svg>
            Continue with Facebook
          </Button>
          <Button variant="secondary" className="w-full font-sans normal-case font-medium text-sm gap-2" onClick={onLogin}>
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
            Continue with Google
          </Button>
        </div>
      </div>
    </div>
  );
}