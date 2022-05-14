import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
import { graphCMSImageLoader } from '../util';

import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="rounded-lg bg-white  pb-12  float-right">
      
      <div className='mt-4 mb-8 flex flex-row' >
        <div className="bg-green-300 pl-1 rounded-full"></div>
        <h1 className=" text-bold pl-4 text-3xl text-gray-900">
        Recent Posts
        </h1>
      </div>
      {relatedPosts.map((post,index)=>(
        <div className='flex flex-row pb-2'>
          <div>
            <Image
            unoptimized
            loader={graphCMSImageLoader}
            
            height="50px"
            width="50px"
            className="rounded-full"
            src={post.featuredImage.url}/>
            </div>
            <div className="text-sm">
            <p className="text-gray-500 font-xl pl-2 ">{moment(post.createdAt).fromNow()}</p>
            <div className='text-gray-900 text-lg  border-l-2 pl-2 ml-2 '>
            <Link  href={`/post/${post.slug}`}  key={index}>{post.title}</Link>
            </div>
            </div>
          
        </div>
      ))}
     
    </div>
    
  )
};

export default PostWidget;