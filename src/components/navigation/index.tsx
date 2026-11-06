"use client";

import React from 'react';

import { ui } from '@/data/ui';
import { Locale } from '@/i18n/config';

interface ListItemProps {
  item: string;
  scrollTo: string;
}

export const navItems = ['about', 'experiences', 'projects'] as const;

export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: 'smooth' });
};

const ListItem: React.FC<ListItemProps> = ({ item, scrollTo }) => (
  <li className='list-margin-start-removed nav-item-hover flex items-center py-3' onClick={() => scrollToSection(scrollTo)}>
    <span className='nav-indicator nav-indicator-selected mr-4'></span>
    <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500'>{item}</span>
  </li>
);

const Navigation: React.FC<{ locale: Locale }> = ({ locale }) => (
  <nav className='mt-10 ml-1 hidden lg:block'>
    <ul className='w-max'>
      {navItems.map((section) => (
        <ListItem key={section} item={ui[locale].nav[section]} scrollTo={section} />
      ))}
    </ul>
  </nav>
);

export default Navigation;
