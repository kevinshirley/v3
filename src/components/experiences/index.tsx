import React from 'react';
import { Badge } from '@radix-ui/themes';
import { ExternalLinkIcon, ArrowRightIcon } from '@radix-ui/react-icons';

import { experiences, ExperienceType } from '@/data/experiences';
import { ui } from '@/data/ui';
import { Locale } from '@/i18n/config';

const Experiences: React.FC<{ locale: Locale }> = ({ locale }) => (
  <section className='mb-36' id='experiences'>
    <div className='block lg:hidden mb-8'>
      <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>{ui[locale].experiences.heading}</h2>
    </div>
    <div>
      {experiences.map((experience: ExperienceType) => (
        <div key={experience.id} className='mb-24 last:mb-0 md:mb-12 flex flex-col sm:flex-row gap-x-3'>
          <div className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 whitespace-nowrap'>
            {experience.from[locale]} ⎯ {experience.to[locale]}
          </div>
          <div>
            <h2 className='text-slate-200 font-bold flex flex-wrap items-center'>{experience.role[locale]} • <a href={experience.companyUrl} className='experience-company flex items-center gap-x-2 ml-1' target='_blank'>{experience.company} <ExternalLinkIcon /></a></h2>
            <h3 className='text-slate-500'>{experience.jobType[locale]}</h3>
            <ul className='my-2'>
              {experience.tasks[locale].map((task: string, index: number) => (
                <li key={index} className='text-slate-400 flex items-center py-2'>
                  <span className='mr-4'>⎯</span>
                  <span className='text-slate-400'>{task}</span>
                </li>
              ))}
            </ul>
            <ul className='flex flex-wrap'>
              {experience.skills?.map((skill: string, index: number) => (
                <li key={index} className='text-slate-200 flex items-center py-2'>
                  <Badge className='text-xs tracking-widest text-slate-200 mr-4 bg-blue-900' variant='solid' radius='full' color='blue'>
                    {skill}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
    <div className='mt-12'>
      <a className='text-slate-200 font-bold flex items-center gap-x-2 hover:gap-x-3 hover:underline transition-all' href='/resume.pdf' target='__blank'>{ui[locale].experiences.resume} <ArrowRightIcon /></a>
    </div>
  </section>
);

export default Experiences;
