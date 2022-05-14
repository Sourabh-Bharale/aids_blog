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
    <div className="float-right rounded-lg  bg-white  pb-12">
      <div className="mt-4 mb-8 flex flex-row">
        <div className="rounded-full bg-green-300 pl-1"></div>
        <h1 className="pl-4  text-gray-900">
          {slug ? (
            <span className="text-bold text-xl ">Recommended Posts</span>
          ) : (
            <span className="text-bold text-xl ">Recent Posts</span>
          )}
        </h1>
      </div>
      {relatedPosts.map((post, index) => (
        <div className="flex flex-row pb-2">
          <div>
            <Image
              unoptimized
              loader={graphCMSImageLoader}
              height="50px"
              width="50px"
              className="rounded-full"
              src={post.featuredImage.url}
            />
          </div>
          <div className="text-sm">
            <p className="font-xl pl-2 text-gray-500 ">
              {moment(post.createdAt).fromNow()}
            </p>
            <div className="ml-2 border-l-2  pl-2 text-lg text-gray-900 ">
              <Link href={`/post/${post.slug}`} key={index}>
                {post.title}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
};

export default PostWidget;