'use client';

import clsx from 'clsx';
import useConversation from '../_hooks/useConversation';
import EmptyState from '../_components/EmptyState';

function Page() {
  const { isOpen } = useConversation();

  return (
    <div
      className={clsx('lg:pl-80 h-full lg:block', isOpen ? 'block' : 'hidden')}
    >
      <EmptyState />
    </div>
  );
}

export default Page;
