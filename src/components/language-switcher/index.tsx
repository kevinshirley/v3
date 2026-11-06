import React, { Fragment } from 'react';
import Link from 'next/link';

import { Locale, localePaths, locales, switchLabels } from '@/i18n/config';

const LanguageSwitcher: React.FC<{ locale: Locale }> = ({ locale }) => (
  <div className='-my-2 flex items-center gap-x-2 text-xs font-bold uppercase tracking-widest'>
    {locales.map((option, index) => (
      <Fragment key={option}>
        {index > 0 && <span aria-hidden='true' className='text-slate-600'>/</span>}
        {option === locale ? (
          <span aria-current='true' className='py-2 text-slate-200'>{option}</span>
        ) : (
          <Link
            href={localePaths[option]}
            hrefLang={option}
            lang={option}
            aria-label={switchLabels[option]}
            className='py-2 text-slate-400 transition-colors hover:text-slate-200'
          >
            {option}
          </Link>
        )}
      </Fragment>
    ))}
  </div>
);

export default LanguageSwitcher;
