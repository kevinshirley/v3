import React from 'react';
import Image from 'next/image';
import { Badge } from '@radix-ui/themes';
import { ExternalLinkIcon } from '@radix-ui/react-icons';

import { projects, ProjectType } from '@/data/projects';

const Projects: React.FC = () => (
  <section className='mb-36'>
    <div className='block lg:hidden mb-8'>
      <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>Projects</h2>
    </div>
    <div>
      {projects.map((project: ProjectType) => (
        <div key={project.id} className='project-card mb-24 md:mb-12 last:mb-0'>
          <a href={project.url} target='_blank'>
            <div className='flex flex-col gap-x-3'>
              <div className='z-10 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 whitespace-nowrap mb-4'>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={200}
                  height={48}
                  priority
                />
              </div>
              <div>
                <h2 className='text-slate-200 font-bold flex items-center gap-x-2 mb-2'>{project.title} <ExternalLinkIcon /></h2>
                <p className='text-slate-500 mb-2'>{project.description}</p>
                <ul className='flex flex-wrap'>
                  {project.skills?.map((skill: string, index: number) => (
                    <li key={index} className='text-slate-200 flex items-center py-2'>
                      <Badge className='text-xs tracking-widest text-slate-200 mr-4 bg-blue-900' variant='solid' radius='full' color='blue'>
                        {skill}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
