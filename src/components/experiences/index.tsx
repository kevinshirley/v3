import React from 'react';
import { Badge } from '@radix-ui/themes';

import { experiences, ExperienceType } from '@/mock/experiences';

const Experiences: React.FC = () => (
  <section className='mt-10 mb-10'>
    <div className='hidden'>
      <h2 className='text-slate-400'>Experience</h2>
    </div>
    <div>
      {experiences.map((experience: ExperienceType) => (
        <div key={experience.id} className='mb-8 flex flex-between gap-x-3'>
          <div className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'>
            {experience.from} ⎯ {experience.to}
          </div>
          <div>
            <h2 className='text-slate-200 font-bold'>{experience.role} • {experience.company}</h2>
            <h2 className='text-slate-500'>{experience.jobType}</h2>
            <ul className='my-2'>
              {experience.tasks.map((task: string, index: number) => (
                <li key={index} className='text-slate-400 flex items-center py-2'>
                  <span className='mr-4'>⎯</span>
                  <span className='text-xs tracking-widest text-slate-400'>{task}</span>
                </li>
              ))}
            </ul>
            <ul className='flex flex-wrap'>
              {experience.skills?.map((skill: string, index: number) => (
                <li key={index} className='text-slate-400 flex items-center py-2'>
                  <Badge className='text-xs tracking-widest text-slate-400 mr-4' variant="solid" radius="full" color="cyan">
                    {skill}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experiences;
