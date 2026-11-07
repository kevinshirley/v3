'use client';

import React, { createContext, useContext, useState } from 'react';
import { ArrowDownIcon } from '@radix-ui/react-icons';

const NewestFirstContext = createContext(true);

// Follows the order of the surrounding SortableList, so nested lists flip too.
export const SortedItems: React.FC<{ items: React.ReactNode[] }> = ({ items }) => {
  const newestFirst = useContext(NewestFirstContext);

  return <>{newestFirst ? items : [...items].reverse()}</>;
};

interface SortableListProps {
  heading: string;
  sortOldestFirst: string;
  sortNewestFirst: string;
  // Expected newest first, which is the default order.
  items: React.ReactNode[];
}

const SortableList: React.FC<SortableListProps> = ({ heading, sortOldestFirst, sortNewestFirst, items }) => {
  const [newestFirst, setNewestFirst] = useState(true);
  const label = newestFirst ? sortOldestFirst : sortNewestFirst;

  return (
    <NewestFirstContext.Provider value={newestFirst}>
      <div className='flex items-center gap-x-1 mb-8'>
        <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200'>{heading}</h2>
        <button
          type='button'
          aria-label={label}
          title={label}
          onClick={() => setNewestFirst(!newestFirst)}
          className='p-2 -my-2 text-slate-400 hover:text-slate-200 transition-colors'
        >
          <ArrowDownIcon className={`transition-transform ${newestFirst ? '' : 'rotate-180'}`} />
        </button>
      </div>
      <div>
        <SortedItems items={items} />
      </div>
    </NewestFirstContext.Provider>
  );
};

export default SortableList;
