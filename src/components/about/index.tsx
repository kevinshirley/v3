import React from 'react';

const About: React.FC = () => (
  <section className='mb-36' id='about'>
    <div className='block lg:hidden mb-8'>
      <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>About</h2>
    </div>
    <div>
      <p className='mb-4 text-slate-400'>My coding journey began in 2015, sparked by curiosity about SEO and HTML. Since then, I’ve built cloud-based enterprise solutions across industries like finance, insurance and e-commerce.</p>
      <p className='mb-4 text-slate-400'>Today, I specialize in React, TypeScript, Node.js, and AWS, crafting scalable full-stack applications. I’m always exploring new technologies to refine my skills and stay ahead in the ever-evolving tech landscape.</p>
      <p className='mb-4 text-slate-400'>Beyond coding, I stay active at the gym, enjoy time with family, and plan my next travel adventure.</p>
    </div>
  </section>
);

export default About;
