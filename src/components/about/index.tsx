import React from 'react';

const About: React.FC = () => (
  <section className='mb-36' id='about'>
    <div className='block lg:hidden mb-8'>
      <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>About</h2>
    </div>
    <div>
      <p className='mb-4 text-slate-400'>In 2015, my journey into coding began with a curiosity sparked by learning SEO and exploring HTML tags. Today, I’ve developed software for diverse industries—from travel and e-commerce to financial institutions.</p>
      <p className='mb-4 text-slate-400'>Currently, my passion lies in spearheading projects and building full stack enterprise-level software solutions. Beyond this, I enjoy freelance work on software products for startups.</p>
      <p className='mb-4 text-slate-400'>Away from the screen, you’ll find me at the gym, cherishing moments with my family, or planning my next travel adventure.</p>
    </div>
  </section>
);

export default About;
