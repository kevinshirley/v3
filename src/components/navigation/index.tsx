'use client'
import React, { useEffect, useState } from 'react';
import toast from '@/utils/toast';

const Navigation: React.FC = () => {
  const saveSettings = (data: any) => console.log(`Loaded after: ${data.a} | ${data.b}`);

  const [isPositive, setIsPositive] = useState(false);

  useEffect(() => {
    if (isPositive) {
      toast({
        appearance: 'success',
        message: 'This is a cool toast',
        callback: saveSettings,
        callbackParam: { a: 'apple', b: 'microsoft' },
      });

      setIsPositive(false);
    }
  }, [isPositive]);

  console.log({ isPositive })

  return (
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
        <li
          className='list-margin-start-removed nav-item-hover'
          onClick={() => setIsPositive(true)}
        >
          <span className='nav-indicator nav-indicator-selected mr-4'></span>
          <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500'>Toast</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
