import React from 'react';
import Image from 'next/image';

import { graphCMSImageLoader } from '../util';

const Author = ({ author }) => (
  <div className='flex flex-col  '>
    <div className='flex flex-row'>
    <div className="bg-pink-300 pl-1 rounded-full mr-4"></div>
    <div className="text-gray-900 text-xl ">About author</div>
    </div>
    <div className=" pb-2 mt-8">
    <Image
        unoptimized
        loader={graphCMSImageLoader}
        alt={author.name}
        height="75px"
        width="75px"
        className="align-middle rounded-full"
        src={author.photo.url}
      />
    </div>
    <div>
      <h3 className="text-gray-900 pl-2  text-lg font-semibold">{author.name}</h3>
      <p className="text-gray-500 pl-2 pt-2 font semibold">{author.bio}</p>
    </div>
  </div>
  
);

export default Author;