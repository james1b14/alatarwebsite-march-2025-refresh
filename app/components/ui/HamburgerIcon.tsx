'use client';

interface HamburgerIconProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export default function HamburgerIcon({ isOpen, onClick, className = '' }: HamburgerIconProps) {
  return (
    <button
      onClick={onClick}
      className={`relative w-8 h-8 flex justify-center items-center rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 ${className}`}
      aria-expanded={isOpen ? 'true' : 'false'}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <div className="block w-5 absolute">
        <span 
          className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
            isOpen ? 'rotate-45' : '-translate-y-1.5'
          }`}
        />
        <span 
          className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span 
          className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
            isOpen ? '-rotate-45' : 'translate-y-1.5'
          }`}
        />
      </div>
    </button>
  );
}
