import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'outline' | 'solid' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({
  href,
  onClick,
  variant = 'outline',
  size = 'md',
  children,
  className,
  type = 'button',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center tracking-[0.25em] uppercase transition-all duration-400';
  const sizes = {
    sm: 'text-[9px] px-6 py-2.5',
    md: 'text-[10px] px-8 py-3.5',
    lg: 'text-[10px] px-10 py-4',
  };
  const variants = {
    outline:
      'border border-[#2C2C2C]/25 text-[#2C2C2C]/70 hover:border-[#2C2C2C] hover:text-[#2C2C2C]',
    solid: 'bg-[#2C2C2C] text-[#F8F5F0] hover:bg-[#3D3D3D]',
    ghost: 'text-[#2C2C2C]/60 hover:text-[#2C2C2C] border-b border-transparent hover:border-[#2C2C2C]/30 rounded-none px-0',
  };

  const classes = cn(base, sizes[size], variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} style={{ fontFamily: 'Inter, sans-serif' }}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} style={{ fontFamily: 'Inter, sans-serif' }}>
      {children}
    </button>
  );
}
