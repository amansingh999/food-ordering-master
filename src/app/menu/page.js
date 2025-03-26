'use client';
import SectionHeaders from '@/components/layout/SectionHeaders';
import MenuItem from '@/components/menu/MenuItem';
import PizzaLoader from '@/libs/Loader';
import { useEffect, useState } from 'react';

export default function MenuPage() {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);

    // Wait for both APIs to complete before setting loading to false
    Promise.all([
      fetch('/api/categories').then((res) => res.json()),
      fetch('/api/menu-items').then((res) => res.json()),
    ])
      .then(([categoriesData, menuItemsData]) => {
        setCategories(categoriesData);
        setMenuItems(menuItemsData);
      })
      .finally(() => setLoading(false)); // Set loading false only when both APIs complete
  }, []);
  return (
    <>
      {loading && <PizzaLoader />}
      <section className='mt-8'>
        {categories?.length > 0 &&
          categories.map((c) => (
            <div key={c._id}>
              <div className='text-center'>
                <SectionHeaders mainHeader={c.name} />
              </div>
              <div className='grid sm:grid-cols-3 gap-4 mt-6 mb-12'>
                {menuItems
                  .filter((item) => item.category === c._id)
                  .map((item) => (
                    <MenuItem key={item._id} {...item} />
                  ))}
              </div>
            </div>
          ))}
      </section>
    </>
  );
}
