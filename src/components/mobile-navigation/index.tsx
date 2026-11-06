"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import cx from 'classnames';

import { navItems, scrollToSection } from '@/components/navigation';
import { ui } from '@/data/ui';
import { Locale, localePaths, switchLabels } from '@/i18n/config';

const MobileNavigation: React.FC<{ locale: Locale }> = ({ locale }) => {
  const [activeSection, setActiveSection] = useState<string>(navItems[0]);
  const otherLocale: Locale = locale === 'en' ? 'fr' : 'en';

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

    navItems.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label='Sections' className='fixed bottom-4 left-1/2 z-50 -translate-x-1/2 lg:hidden'>
      <ul className='flex items-center rounded-full border border-white/10 bg-slate-800/70 p-1 shadow-lg shadow-black/40 backdrop-blur-xl'>
        {navItems.map((section) => {
          const isActive = activeSection === section;

          return (
            <li key={section}>
              <a
                href={`#${section}`}
                aria-current={isActive ? 'true' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
                className={cx(
                  'block whitespace-nowrap rounded-full px-3 py-3.5 text-xs font-semibold tracking-wide transition-colors duration-200 min-[360px]:px-4',
                  isActive ? 'bg-white/10 text-slate-100' : 'text-slate-400',
                )}
              >
                {ui[locale].nav[section]}
              </a>
            </li>
          );
        })}
        <li className='ml-1 border-l border-white/10 pl-1'>
          <Link
            href={localePaths[otherLocale]}
            hrefLang={otherLocale}
            lang={otherLocale}
            aria-label={switchLabels[otherLocale]}
            className='block rounded-full px-2.5 py-3.5 text-xs font-semibold uppercase tracking-wide text-slate-400 transition-colors duration-200 hover:text-slate-100'
          >
            {otherLocale}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavigation;
