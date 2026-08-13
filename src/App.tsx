import React, { useState } from 'react';
import { Home, Trophy, Plus, Users, User, ArrowUpRight, Medal, Flame, Play, MessageCircle, Heart, CheckCircle2, ChevronRight, Share, Activity, PlusCircle, Settings } from 'lucide-react';
import { Button, Card, RankBadge, cn } from './components/ui';

// SCREENS
import { WelcomeScreen } from './screens/WelcomeScreen';
import { HomeScreen } from './screens/HomeScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { GlobalRankingScreen } from './screens/GlobalRankingScreen';
import { SocialFeedScreen } from './screens/SocialFeedScreen';
import { FriendsScreen } from './screens/FriendsScreen';
import { GroupsScreen } from './screens/GroupsScreen';
import { UploadLiftScreen } from './screens/UploadLiftScreen';
import { LiftResultScreen } from './screens/LiftResultScreen';
import { ChallengesScreen } from './screens/ChallengesScreen';
import { AchievementsScreen } from './screens/AchievementsScreen';

export type ScreenType = 'WELCOME' | 'HOME' | 'PROFILE' | 'RANKING' | 'FEED' | 'FRIENDS' | 'GROUPS' | 'UPLOAD' | 'RESULT' | 'CHALLENGES' | 'ACHIEVEMENTS';

function App() {
  const [activeScreen, setActiveScreen] = useState<ScreenType>('WELCOME');
  
  // Mock function to navigate
  const navigate = (screen: ScreenType) => {
    setActiveScreen(screen);
    window.scrollTo(0, 0);
  };

  if (activeScreen === 'WELCOME') {
    return <WelcomeScreen onLogin={() => navigate('HOME')} />;
  }

  if (activeScreen === 'RESULT') {
    return <LiftResultScreen onContinue={() => navigate('PROFILE')} />;
  }

  return (
    <div className="flex h-full min-h-screen flex-col bg-background text-foreground pb-20 max-w-md mx-auto relative overflow-hidden border-x border-border/50">
      <main className="flex-1 overflow-y-auto scrollbar-hide">
        {activeScreen === 'HOME' && <HomeScreen navigate={navigate} />}
        {activeScreen === 'PROFILE' && <ProfileScreen navigate={navigate} />}
        {activeScreen === 'RANKING' && <GlobalRankingScreen navigate={navigate} />}
        {activeScreen === 'FEED' && <SocialFeedScreen navigate={navigate} />}
        {activeScreen === 'FRIENDS' && <FriendsScreen navigate={navigate} />}
        {activeScreen === 'GROUPS' && <GroupsScreen navigate={navigate} />}
        {activeScreen === 'UPLOAD' && <UploadLiftScreen navigate={navigate} onSuccess={() => navigate('RESULT')} />}
        {activeScreen === 'CHALLENGES' && <ChallengesScreen navigate={navigate} />}
        {activeScreen === 'ACHIEVEMENTS' && <AchievementsScreen navigate={navigate} />}
      </main>

      {/* BOTTOM NAV */}
      <nav className="absolute bottom-0 left-0 right-0 h-20 bg-background/90 backdrop-blur-xl border-t border-border flex items-center justify-around px-2 pb-safe">
        <NavItem icon={<Home size={24} />} label="Home" active={activeScreen === 'HOME'} onClick={() => navigate('HOME')} />
        <NavItem icon={<Trophy size={24} />} label="Ranking" active={activeScreen === 'RANKING'} onClick={() => navigate('RANKING')} />
        
        {/* CENTER ACTION BUTTON */}
        <div className="relative -top-5 flex flex-col items-center justify-center">
          <button 
            onClick={() => navigate('UPLOAD')}
            className="h-14 w-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-[0_0_20px_rgba(255,215,0,0.4)] active:scale-95 transition-transform"
          >
            <Plus size={32} strokeWidth={2.5} />
          </button>
          <span className="text-[10px] font-bold mt-1 text-primary">LIFT</span>
        </div>

        <NavItem icon={<Play size={24} />} label="Social" active={activeScreen === 'FEED'} onClick={() => navigate('FEED')} />
        <NavItem icon={<User size={24} />} label="Profile" active={activeScreen === 'PROFILE'} onClick={() => navigate('PROFILE')} />
      </nav>
    </div>
  );
}

function NavItem({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center w-16 h-14 gap-1 transition-colors",
        active ? "text-primary" : "text-muted-foreground hover:text-foreground"
      )}
    >
      <div className={cn("transition-transform", active && "scale-110")}>
        {icon}
      </div>
      <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
    </button>
  );
}

export default App;
