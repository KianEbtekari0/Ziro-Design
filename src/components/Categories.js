import { useState, useEffect } from 'react';

export default function Categories({ categories = [], filterProducts }) {
  const [mainCategory, setMainCategory] = useState('Discover');

  useEffect(() => {
    console.log('categories prop:', categories);
  }, [categories]);

  return (
    <div className="flex items-center justify-center gap-5">
      {categories.length > 0 &&
        categories.map((category, index) => (
          <button
            key={index}
            onClick={() => {
              setMainCategory(category);
              filterProducts(category);
            }}
            className={
              category === mainCategory
                ? 'glassBtn flex h-[46px] w-24 cursor-pointer items-center justify-center rounded-3xl font-Neue-Montreal-Regular text-sm text-white xl:h-[46px] xl:text-base'
                : 'h-[46px] w-24 cursor-pointer font-Neue-Montreal-Regular text-sm text-white xl:h-[46px] xl:text-base'
            }
          >
            {category || 'Unknown'}
          </button>
        ))}
    </div>
  );
}
