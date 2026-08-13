import React from 'react';
import { Users, Plus } from 'lucide-react';
import { Card, Button } from '../components/ui';
import { ScreenType } from '../App';

export function GroupsScreen({ navigate }: { navigate: (s: ScreenType) => void }) {
  return (
    <div className="flex flex-col min-h-screen p-4 pt-10 gap-4">
      <header className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-display font-black tracking-tight text-glow">GROUPS</h1>
        <Button size="icon" variant="outline" className="rounded-full border-primary/30 text-primary">
          <Plus size={20} />
        </Button>
      </header>

      <div className="flex flex-col gap-3">
        {[
          { name: 'My Gym 💪', members: 32, leader: 'Mike (180 KG)', type: 'Private' },
          { name: 'Bench Bros', members: 12, leader: 'Alex (165 KG)', type: 'Invite Only' },
          { name: 'Marbella Lifters', members: 48, leader: 'Carlos (205 KG)', type: 'Public' },
        ].map((g, i) => (
          <Card key={i} className="p-4 bg-zinc-950 border-zinc-900 cursor-pointer hover:border-primary/50 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-display font-black text-xl mb-1">{g.name}</h3>
                <p className="text-xs font-bold text-muted-foreground flex items-center gap-1.5">
                  <Users size={12} /> {g.members} members • {g.type}
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <Users size={20} className="text-zinc-500" />
              </div>
            </div>
            
            <div className="bg-zinc-900 rounded-lg p-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1">Current Leader</p>
              <p className="text-sm font-bold text-white">{g.leader}</p>
            </div>
          </Card>
        ))}
      </div>
      
      <Button className="mt-4 py-6 w-full" variant="outline">
        CREATE GROUP
      </Button>
    </div>
  );
}