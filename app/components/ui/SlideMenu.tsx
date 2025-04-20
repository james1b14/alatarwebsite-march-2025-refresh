'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SlideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  lang: string; // For i18n support
}

export default function SlideMenu({ isOpen, onClose, lang }: SlideMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  
  // Handle click outside to close menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && isOpen) {
        onClose();
      }
    }
    
    // Handle escape key press
    function handleEscKey(event: KeyboardEvent) {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    }
    
    // Add event listeners
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);
    
    // Lock body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Clean up event listeners
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);
  
  // Define menu links
  const menuLinks = [
    { href: '/services', label: 'Services' },
    { href: '/transport-haulage', label: 'Transport & Haulage' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    // Future pages with "coming soon" indicator
    { href: '#', label: 'Careers', comingSoon: true },
    { href: '#', label: 'Create Account', comingSoon: true },
  ];
  
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity z-40 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Side Menu Panel */}
      <div 
        ref={menuRef}
        className={`fixed top-0 right-0 bottom-0 w-80 max-w-[90vw] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
      >
        {/* Menu Header */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Menu Links */}
        <nav className="p-4">
          <ul className="space-y-2">
            {menuLinks.map((link) => {
              // Check if this is a current/active page
              const isActive = link.href !== '#' && pathname.endsWith(link.href);
              // Full path including language
              const fullPath = link.href.startsWith('#') ? link.href : `/${lang}${link.href}`;
              
              return (
                <li key={link.label}>
                  <Link
                    href={fullPath}
                    className={`flex items-center px-3 py-3 rounded-lg transition-colors ${
                      isActive 
                        ? 'bg-primary/10 text-primary' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={onClose}
                  >
                    <span className="flex-grow">{link.label}</span>
                    {link.comingSoon && (
                      <span className="text-xs font-medium bg-amber-100 text-amber-800 rounded-full px-2 py-0.5">
                        Coming Soon
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        {/* Contact Information */}
        <div className="mt-auto p-4 border-t border-gray-200 bg-gray-50">
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              <strong>Contact Us:</strong>
            </p>
            <p>
              <a href="tel:07803561679" className="text-primary hover:underline">
                07803 561679
              </a>
            </p>
            <p>
              <a href="mailto:sales@alatargroup.co.uk" className="text-primary hover:underline">
                sales@alatargroup.co.uk
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
