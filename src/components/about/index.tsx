import React from 'react';

const About: React.FC = () => (
  <section className='mb-36' id='about'>
    <div className='block lg:hidden mb-8'>
      <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>About</h2>
    </div>
    <div>
      <p className=’mb-4 text-slate-400’>My coding journey began in 2015, sparked by curiosity about SEO and HTML. Since then, I’ve grown into a Senior Salesforce Developer building enterprise solutions across industries like finance, insurance, and e-commerce.</p>
      <p className=’mb-4 text-slate-400’>Today, I specialize in Salesforce (Apex, LWC, Flow, CPQ) backed by 8+ years of full-stack experience in React, Node.js, and AWS. I thrive on complex integrations and architecture-heavy projects that go beyond declarative solutions.</p>
      <p className=’mb-4 text-slate-400’>Beyond coding, I stay active at the gym, enjoy time with family, and plan my next travel adventure.</p>
    </div>
  </section>
);

export default About;
