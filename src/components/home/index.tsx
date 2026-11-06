import React from 'react';

import CustomCursor from '@/components/custom-cursor';
import Header from '@/components/header';
import About from '@/components/about';
import Experiences from '@/components/experiences';
import Projects from '@/components/projects';
import MobileNavigation from '@/components/mobile-navigation';
import { Locale } from '@/i18n/config';

const Home: React.FC<{ locale: Locale }> = ({ locale }) => (
  <div className='relative py-12 px-6 md:py-20 md:px-12 lg:py-0 lg:px-0'>
    <div className='bg-slate-900 lg:py-0 lg:px-24'>
      <div className='flex flex-col lg:flex-row max-w-screen-xl mx-auto'>
        <Header locale={locale} />
        <main className='w-full lg:w-1/2 lg:pt-24'>
          <About locale={locale} />
          <Experiences locale={locale} />
          <Projects locale={locale} />
        </main>
      </div>
    </div>
    <CustomCursor />
    <MobileNavigation locale={locale} />
  </div>
);

export default Home;
