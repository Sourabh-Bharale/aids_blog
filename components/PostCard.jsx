import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
import Categories from './Categories';

import { graphCMSImageLoader } from '../util';

const PostCard = ({ post }) => (

  <div className="  bg-white  rounded-xl  ">
    <div className="flex flex-row  border-t-2  pt-8 pb-2">
      <Image
        unoptimized
        loader={graphCMSImageLoader}
        alt={post.author.name}
        height="30px"
        width="30px"
        className="rounded-full"
        src={post.author.photo.url}
      />
      <h2 className="ml-4 font-semibold text-gray-900">{post.author.name}</h2>
      <p className="ml-4 pt-1 text-sm text-gray-500">
        {moment(post.createdAt).format('DD MMM, YY')}
      </p>
    </div>

    <div className="bg-white p-1 mb-3 flex flex-row ">
      <div className="text-semibold w-50 w-2/3">
        <h1 className="text-xl font-bold">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
        <p className="mt-4 mb-8 ">{post.excerpt}</p>
        <Link href={`/post/${post.slug}`}>
          <span className="cursor-pointer whitespace-nowrap rounded-3xl  bg-gray-100 p-2 m text-center text-sm text-gray-900 shadow-sm hover:bg-gray-200 ">
            Continue Reading
          </span>
        </Link>
      </div>
      <div className=' float-right ml-auto'>
        <Image
          unoptimized
          src={post.featuredImage.url}
          loader={graphCMSImageLoader}
          alt={post.title}
          width="150px"
          height="150px"
          objectFit='contain'
          className='rounded-xl'
        />
      </div>
    </div>
</div>

)

export default PostCard;