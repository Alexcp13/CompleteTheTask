import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'ghost' | 'outline', size?: 'sm' | 'md' | 'lg' | 'icon' }>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-display font-bold uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          {
            'bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(255,215,0,0.3)]': variant === 'primary',
            'bg-secondary text-secondary-foreground hover:bg-secondary/80': variant === 'secondary',
            'border-2 border-border bg-transparent hover:bg-accent hover:text-accent-foreground': variant === 'outline',
            'hover:bg-accent hover:text-accent-foreground': variant === 'ghost',
            'h-10 px-4 py-2': size === 'md',
            'h-9 rounded-md px-3': size === 'sm',
            'h-12 rounded-lg px-8 text-lg': size === 'lg',
            'h-10 w-10': size === 'icon',
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-xl border border-border bg-card text-card-foreground shadow-sm", className)}
      {...props}
    />
  )
)
Card.displayName = "Card"

export const RankBadge = ({ rank, className }: { rank: string, className?: string }) => {
  const getRankColors = (r: string) => {
    switch(r.toUpperCase()) {
      case 'BRONZE': return 'bg-[#CD7F32]/10 text-[#CD7F32] border-[#CD7F32]/20';
      case 'SILVER': return 'bg-[#C0C0C0]/10 text-[#C0C0C0] border-[#C0C0C0]/20';
      case 'GOLD': return 'bg-[#FFD700]/10 text-[#FFD700] border-[#FFD700]/20';
      case 'PLATINUM': return 'bg-[#E5E4E2]/10 text-[#E5E4E2] border-[#E5E4E2]/20';
      case 'DIAMOND': return 'bg-[#b9f2ff]/10 text-[#b9f2ff] border-[#b9f2ff]/20 shadow-[0_0_10px_rgba(185,242,255,0.2)]';
      case 'MASTER': return 'bg-[#ff4500]/10 text-[#ff4500] border-[#ff4500]/30 shadow-[0_0_15px_rgba(255,69,0,0.3)]';
      case 'LEGEND': return 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-[#e0b0ff] border-purple-500/30 shadow-[0_0_15px_rgba(160,32,240,0.4)]';
      default: return 'bg-secondary text-secondary-foreground border-border';
    }
  }

  const getRankIcon = (r: string) => {
    if (r.toUpperCase() === 'LEGEND') return '👑';
    if (r.toUpperCase() === 'MASTER') return '🔥';
    if (r.toUpperCase() === 'DIAMOND') return '💎';
    return '';
  }

  return (
    <div className={cn("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-bold font-display uppercase", getRankColors(rank), className)}>
      {getRankIcon(rank) && <span>{getRankIcon(rank)}</span>}
      {rank}
    </div>
  )
}
