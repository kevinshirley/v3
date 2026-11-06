import React from 'react';

import { ui } from '@/data/ui';
import { Locale } from '@/i18n/config';

const About: React.FC<{ locale: Locale }> = ({ locale }) => (
  <section className="mb-36" id="about">
    <div className="block lg:hidden mb-8">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">{ui[locale].about.heading}</h2>
    </div>
    <div>
      {ui[locale].about.paragraphs.map((paragraph: string) => (
        <p key={paragraph} className="mb-4 text-slate-400">{paragraph}</p>
      ))}
    </div>
  </section>
);

export default About;
