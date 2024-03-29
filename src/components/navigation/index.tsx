import React from 'react';

const Navigation: React.FC = () => (
  <nav className='mt-10 ml-1 hidden lg:block'>
    <ul className='w-max'>
      <li className='list-margin-start-removed nav-item-hover'>
        <a href='#about' className='flex items-center py-3'>
          <span className='nav-indicator nav-indicator-selected mr-4'></span>
          <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500'>About</span>
        </a>
      </li>
      <li className='list-margin-start-removed nav-item-hover'>
        <a href='#experiences' className='flex items-center py-3'>
          <span className='nav-indicator nav-indicator-selected mr-4'></span>
          <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500'>Experiences</span>
        </a>
      </li>
      <li className='list-margin-start-removed nav-item-hover'>
        <a href='#projects' className='flex items-center py-3'>
          <span className='nav-indicator nav-indicator-selected mr-4'></span>
          <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500'>Projects</span>
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
