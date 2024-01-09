import React from 'react';
import cx from 'classnames';
import { LinkedInLogoIcon, GitHubLogoIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';

import { socials } from '@/data/socials';

interface SocialsType {
  hidden?: boolean;
}

const Socials: React.FC<SocialsType> = ({
  hidden = false,
}) => {
  const socialsClasses = cx({
    'lg:hidden': hidden,
  }, 'flex justify-start gap-x-6 mt-8 lg:mt-0');

  return (
    <ul className={socialsClasses}>
      <li className='text-slate-200'>
        <a href={socials.linkedIn} target='_blank'>
          <LinkedInLogoIcon className='w-6 h-6 text-slate-400' />
        </a>
      </li>
      <li className='text-slate-200'>
        <a href={socials.github} target='_blank'>
          <GitHubLogoIcon className='w-6 h-6 text-slate-400' />
        </a>
      </li>
      <li className='text-slate-200'>
        <a href={`mailto:${socials.email}`} target='_blank'>
          <EnvelopeClosedIcon className='w-6 h-6 text-slate-400' />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
