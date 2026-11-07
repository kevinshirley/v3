'use client';

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { ArrowDownIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

const NewestFirstContext = createContext(true);

const useSortedItems = (items: React.ReactNode[]) => {
  const newestFirst = useContext(NewestFirstContext);

  return newestFirst ? items : [...items].reverse();
};

// Follows the order of the surrounding SortableList, so nested lists flip too.
export const SortedItems: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
  <>{useSortedItems(items)}</>
);

interface CollapseOptions {
  visibleCount: number;
  showAll: string;
  showLess: string;
}

const pillClassName = 'flex items-center gap-x-2 rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-700 transition-colors';

// Shows the first items, fades the next one and hides the rest until expanded.
const CollapsibleItems: React.FC<{ items: React.ReactNode[]; collapse: CollapseOptions }> = ({ items, collapse }) => {
  const { visibleCount, showAll, showLess } = collapse;
  const sortedItems = useSortedItems(items);
  const [expanded, setExpanded] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const showAllRef = useRef<HTMLButtonElement>(null);

  // React only renders a plain `hidden`, which find-in-page can't search.
  useEffect(() => {
    listRef.current?.querySelectorAll('[hidden]').forEach((item) => item.setAttribute('hidden', 'until-found'));
  });

  // Lets the browser's find-in-page reveal hidden items.
  useEffect(() => {
    const list = listRef.current;
    const expand = () => setExpanded(true);

    list?.addEventListener('beforematch', expand);
    return () => list?.removeEventListener('beforematch', expand);
  }, []);

  const minimize = (event: React.MouseEvent<HTMLButtonElement>) => {
    const section = event.currentTarget.closest('section');

    // Commit the shorter list first so the scroll lands on the final layout.
    flushSync(() => setExpanded(false));
    section?.scrollIntoView();
    showAllRef.current?.focus({ preventScroll: true });
  };

  return (
    <>
      <div ref={listRef}>
        {sortedItems.map((item, index) => {
          if (expanded || index < visibleCount) {
            return <div key={index} className='mb-24 last:mb-0 md:mb-12'>{item}</div>;
          }

          if (index > visibleCount) {
            return <div key={index} hidden>{item}</div>;
          }

          return (
            <div key={index} className='relative max-h-48 overflow-clip'>
              {item}
              <div className='absolute inset-0 flex items-end justify-center pb-2 bg-gradient-to-b from-transparent via-slate-900/80 to-slate-900'>
                <button ref={showAllRef} type='button' aria-expanded={false} onClick={() => setExpanded(true)} className={pillClassName}>
                  {showAll} <ChevronDownIcon />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {expanded && (
        <div className='mt-12 flex justify-center'>
          <button type='button' aria-expanded={true} onClick={minimize} className={pillClassName}>
            {showLess} <ChevronUpIcon />
          </button>
        </div>
      )}
    </>
  );
};

interface SortableListProps {
  heading: string;
  sortOldestFirst: string;
  sortNewestFirst: string;
  // Expected newest first, which is the default order.
  items: React.ReactNode[];
  collapse?: CollapseOptions;
}

const SortableList: React.FC<SortableListProps> = ({ heading, sortOldestFirst, sortNewestFirst, items, collapse }) => {
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
      {collapse ? (
        <CollapsibleItems items={items} collapse={collapse} />
      ) : (
        <div>
          <SortedItems items={items} />
        </div>
      )}
    </NewestFirstContext.Provider>
  );
};

export default SortableList;
