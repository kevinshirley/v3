import React from 'react';
import Link from 'next/link';

import Socials from '@/components/socials';
import Navigation from '@/components/navigation';
import { ui } from '@/data/ui';
import { Locale, localePaths } from '@/i18n/config';

const Header: React.FC<{ locale: Locale }> = ({ locale }) => (
  <header className='w-full lg:w-1/2 lg:sticky top-0 lg:max-h-screen lg:py-24 flex justify-between flex-col pb-24'>
    <div>
      <div>
        <h1 className='text-5xl text-slate-200 font-bold'><Link href={localePaths[locale]}>Kevin Shirley</Link></h1>
        <h2 className='text-slate-200 font-medium mt-3 sm:text-xl'>{ui[locale].header.title}</h2>
        <p className='text-slate-400 mt-4 max-w-xs'>{ui[locale].header.bio}</p>
        <Socials locale={locale} hidden />
      </div>
      <Navigation locale={locale} />
    </div>
    <div className='hidden lg:block'>
      <Socials locale={locale} />
    </div>
  </header>
);

export default Header;
