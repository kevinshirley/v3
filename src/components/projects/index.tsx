import React from 'react';
import Image from 'next/image';
import { Badge } from '@radix-ui/themes';
import { ExternalLinkIcon } from '@radix-ui/react-icons';

import SortableList, { SortedItems } from '@/components/sortable-list';
import { projects, ProjectType } from '@/data/projects';
import { ui } from '@/data/ui';
import { Locale } from '@/i18n/config';

const projectGroups = [
  {
    key: 'builtWithAI',
    projects: projects.filter((project: ProjectType) => project.builtWithAI),
  },
  {
    key: 'builtBeforeAI',
    projects: projects.filter((project: ProjectType) => !project.builtWithAI),
  },
] as const;

const ProjectCard: React.FC<{ project: ProjectType; locale: Locale }> = ({ project, locale }) => (
  <div className='project-card mb-24 md:mb-12 last:mb-0'>
    <div className='flex flex-col gap-x-3'>
      <div className='z-10 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 whitespace-nowrap mb-4'>
        <a href={project.url} target='_blank'>
          <Image
            src={project.image}
            alt={project.title}
            width={200}
            height={48}
            priority
          />
        </a>
      </div>
      <div>
        <p className='text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1'>{project.year}</p>
        <h2 className='text-slate-200 font-bold flex flex-wrap items-center gap-x-2 mb-2'><a href={project.url} target='_blank'>{project.title} <ExternalLinkIcon /></a>{project.github && <> • <a href={project.github} target='_blank'>Github <ExternalLinkIcon /></a></>}</h2>
        <p className='text-slate-500 mb-2'>{project.description[locale]}</p>
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
  </div>
);

const Projects: React.FC<{ locale: Locale }> = ({ locale }) => (
  <section className='mb-36' id='projects'>
    <SortableList
      heading={ui[locale].projects.heading}
      sortOldestFirst={ui[locale].projects.sortOldestFirst}
      sortNewestFirst={ui[locale].projects.sortNewestFirst}
      items={projectGroups.map((group) => (
        <div key={group.key} className='mb-24 last:mb-0'>
          <div className='mb-8 border-b border-slate-700 pb-3'>
            <h3 className='text-sm font-bold uppercase tracking-widest text-slate-200'>{ui[locale].projects[group.key].title}</h3>
            <p className='text-sm text-slate-500 mt-1'>{ui[locale].projects[group.key].description}</p>
          </div>
          <SortedItems
            items={group.projects.map((project: ProjectType) => (
              <ProjectCard key={project.id} project={project} locale={locale} />
            ))}
          />
        </div>
      ))}
    />
  </section>
);

export default Projects;
