import React from 'react';
import cx from 'classnames';

import { LinkedInLogoIcon, GitHubLogoIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';

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
        <LinkedInLogoIcon className='w-6 h-6 text-slate-400' />
      </li>
      <li className='text-slate-200'>
        <GitHubLogoIcon className='w-6 h-6 text-slate-400' />
      </li>
      <li className='text-slate-200'>
        <EnvelopeClosedIcon className='w-6 h-6 text-slate-400' />
      </li>
    </ul>
  );
};

export default Socials;
