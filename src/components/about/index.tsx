import React from 'react';

const About: React.FC = () => (
  <section className='mb-36' id='about'>
    <div className='block lg:hidden mb-8'>
      <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>About</h2>
    </div>
    <div>
      <p className='mb-4 text-slate-400'>Back in 2015, I decided to learn SEO, got introduced to HTML tags, got very curious about it and dived head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for a travel company, an e-commerce brand and financial institutions.</p>
      <p className='mb-4 text-slate-400'>My main focus these days is building products and leading projects for fortune 500 enterprises. In my free time, I build software products for start-ups as a freelance.</p>
      <p className='mb-4 text-slate-400'>When I’m not at the computer, I’m usually at the gym, hanging out with my wife and my son, or looking for my next travel destination.</p>
    </div>
  </section>
);

export default About;
