import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
<div className='flex flex-row'>
      <div className="p-2 m-2 text-gray-500 font-semibold ">Topics</div>
    <div className="flex flex-row  overflow-auto mb-8">
     {categories.map((category, index) => (
       <Link key={index} href={`/category/${category.slug}`}>
          <div className="p-2 m-2 whitespace-nowrap text-sm  cursor-pointer rounded-3xl shadow-sm bg-gray-50 text-gray-900 hover:bg-gray-100 text-center">
           {category.name}
          </div>
        </Link>
      ))}
    </div>
  </div>  
    //     <Link key={index} href={`/category/${category.slug}`}>
    //       <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}>{category.name}</span>
    //     </Link>
    //   ))}
    // </div>
  );
};

export default Categories;