"use client";

import React from 'react';

interface ListItemProps {
  item: string;
  scrollTo: string;
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: 'smooth' });
};

const ListItem: React.FC<ListItemProps> = ({ item, scrollTo }) => (
  <li className='list-margin-start-removed nav-item-hover flex items-center py-3' onClick={() => scrollToSection(scrollTo)}>
    <span className='nav-indicator nav-indicator-selected mr-4'></span>
    <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500'>{item}</span>
  </li>
);

const Navigation: React.FC = () => (
  <nav className='mt-10 ml-1 hidden lg:block'>
    <ul className='w-max'>
      <ListItem
        item='About'
        scrollTo='about'
      />
      <ListItem
        item='Experiences'
        scrollTo='experiences'
      />
      <ListItem
        item='Projects'
        scrollTo='projects'
      />
    </ul>
  </nav>
);

export default Navigation;
