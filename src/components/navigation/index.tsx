import React from 'react';

const Navigation: React.FC = () => (
  <nav className='mt-10 ml-1'>
    <ul className='w-max'>
      <li className='list-margin-start-removed nav-item-hover'>
        <a href='/' className='flex items-center py-3'>
          <span className='nav-indicator nav-indicator-selected mr-4'></span>
          <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500'>About</span>
        </a>
      </li>
      <li className='list-margin-start-removed nav-item-hover'>
        <a href='/' className='flex items-center py-3'>
          <span className='nav-indicator nav-indicator-selected mr-4'></span>
          <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500'>Experience</span>
        </a>
      </li>
      <li className='list-margin-start-removed nav-item-hover'>
        <a href='/' className='flex items-center py-3'>
          <span className='nav-indicator nav-indicator-selected mr-4'></span>
          <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500'>Projects</span>
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
