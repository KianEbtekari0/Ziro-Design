import { useState } from 'react';

export default function Categories({ categories = [], filterProducts }) {
  const [mainCategory, setMainCategory] = useState('Discover');

  return (
    <div className="scroll-visibale relative flex w-full gap-5 overflow-x-auto py-2">
      <div className="flex gap-2 sm:gap-5">
        {categories.length > 0 &&
          categories.map((category, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  setMainCategory(category);
                  filterProducts(category);
                }}
                className={
                  category === mainCategory
                    ? 'glassBtn flex h-[46px] w-24 cursor-pointer items-center justify-center rounded-3xl font-Neue-Montreal-Regular text-sm text-white xl:h-[46px] xl:text-base'
                    : 'flex h-[46px] min-w-[96px] cursor-pointer items-center justify-center rounded-3xl font-Neue-Montreal-Regular text-sm text-white'
                }
              >
                {category || 'Unknown'}
              </button>
            );
          })}
      </div>
    </div>
  );
}
