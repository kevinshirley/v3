import React from 'react';

import Socials from '@/components/socials';
import Navigation from '@/components/navigation';

const Header: React.FC = () => (
  <header className='w-full lg:w-1/2 lg:sticky top-0 lg:max-h-screen lg:py-24 flex justify-between flex-col pb-24'>
    <div>
      <div>
        <h1 className='text-5xl text-slate-200 font-bold'><a href='/'>Kevin Shirley</a></h1>
        <h2 className='text-slate-200 font-medium mt-3 sm:text-xl'>Software Developer</h2>
        <p className='text-slate-400 mt-4 max-w-xs'>Experienced Software Developer specializing in React, TypeScript, and AWS, building cloud-based enterprise solutions.</p>
        <Socials hidden />
      </div>
      <Navigation />
    </div>
    <div className='hidden lg:block'>
      <Socials />
    </div>
  </header>
);

export default Header;
