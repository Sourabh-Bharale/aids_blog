import React from 'react';
import Image from 'next/image';

import { graphCMSImageLoader } from '../util';

const Author = ({ author }) => (
  <div className='flex flex-col  bg-white'>
    <div className='flex flex-row'>
    <div className="bg-violet-300 pl-1 rounded-full mr-4"></div>
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
  // <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
  //   <div className="absolute left-0 right-0 -top-14">
  //     <Image
  //       unoptimized
  //       loader={graphCMSImageLoader}
  //       alt={author.name}
  //       height="100px"
  //       width="100px"
  //       className="align-middle rounded-full"
  //       src={author.photo.url}
  //     />
  //   </div>
  //   <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author.name}</h3>
  //   <p className="text-white text-ls">{author.bio}</p>
  // </div>
);

export default Author;