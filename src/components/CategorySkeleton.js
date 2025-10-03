import React from 'react';
import { Skeleton } from './skeleton';

export function CategorySkeleton({ count }) {
  return (
    <div className="flex items-center justify-center gap-5">
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} className="animate-pulse bg-gray-200/20 h-[46px] w-24 rounded-3xl" />
      ))}
    </div>
  );
}
