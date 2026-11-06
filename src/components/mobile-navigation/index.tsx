"use client";

import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import { navItems, scrollToSection } from '@/components/navigation';

const MobileNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(navItems[0].scrollTo);

  useEffect(() => {
    // Shrinks the observed area to a line 40% down the screen, so the active
    // section is whichever one is crossing that line. In the gaps between
    // sections nothing intersects and the previous highlight is kept.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -60% 0px' },
    );

    navItems.forEach(({ scrollTo }) => {
      const section = document.getElementById(scrollTo);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label='Sections' className='fixed bottom-4 left-1/2 z-50 -translate-x-1/2 lg:hidden'>
      <ul className='flex items-center rounded-full border border-white/10 bg-slate-800/70 p-1 shadow-lg shadow-black/40 backdrop-blur-xl'>
        {navItems.map(({ item, scrollTo }) => {
          const isActive = activeSection === scrollTo;

          return (
            <li key={scrollTo}>
              <a
                href={`#${scrollTo}`}
                aria-current={isActive ? 'true' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(scrollTo);
                }}
                className={cx(
                  'block rounded-full px-4 py-3.5 text-xs font-semibold tracking-wide transition-colors duration-200',
                  isActive ? 'bg-white/10 text-slate-100' : 'text-slate-400',
                )}
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileNavigation;
