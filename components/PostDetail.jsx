import React from 'react';

import moment from 'moment';
import Image from 'next/image';


const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.slice(0).reverse().map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.slice(0).reverse().map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'heading-two':
        return <h2 key={index} className="text-xl font-semibold mb-4">{modifiedText.slice(0).reverse().map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>;
      case 'heading-one':
        return <div className='bg-gradient-to-r from-gray-200 to to-gray-100  rounded-xl p-2 pb-0'><h1 key={index} className="text-xl font-semibold mb-4">{modifiedText.slice(0).reverse().map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h1></div>;
      case 'paragraph':
        return <p key={index} className="mb-8  rounded-lg p-2">{modifiedText.slice(0).reverse().map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
            className='p-4'
          />
        );
        case 'code-block':
          return (
            <div className="overflow-x rounded-2xl bg-gray-900 pt-2 m-4">
              <div className='flex flex-row '>

              <div className="bg-red-500 m-2 p-2  rounded-full w-2"></div>
              <div className="bg-yellow-500 m-2 p-2 rounded-full w-2"></div>
              <div className="bg-green-500 m-2 p-2 rounded-full w-2"></div>
              </div>
              <pre className="overflow-auto rounded-xl bg-gradient-to-b from-gray-900 to-gray-600  scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-500 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                <div className="p-8 ">
                  <code
                    key={index}
                    className="text-md mb-4 text-white"
                  >
                    {modifiedText.slice(0).reverse().map((item, i) => (
                      <React.Fragment key={i}>{item}</React.Fragment>
                    ))}
                  </code>
                </div>
              </pre>
            </div>
          )

        case 'block-quote':
          return <div className='flex flex-row'><div className='p-1 m-1 rounded-lg bg-red-200'></div><h1 key={index} className="text-lg p-1 font-semibold mb-4">{modifiedText.slice(0).reverse().map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h1></div>;


      default:
        return modifiedText;
    }
  };

  return (
    <>
      <div className="lg:ml-20">
        <div className="flex flex-row ">
          <Image
            unoptimized
            width={50}
            height={50}
            src={post.author.photo.url}
            alt={post.author.name}
            className="rounded-full "
            objectFit="fill"
          />
          <div className="ml-4 flex flex-row">
            <div className="m-2 rounded-xl bg-blue-300 pl-1"></div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                {post.author.name}
              </h1>
              <div className="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 inline h-4 w-4 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm text-gray-500">
                  {moment(post.createdAt).fromNow()}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 ">
          <h1 className="text-3xl font-semibold text-gray-900">{post.title}</h1>
        </div>
        <div className="mb-6 overflow-hidden ">
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className="h-full w-full rounded-t-lg object-cover  object-top lg:rounded-lg"
          />
        </div>
        <div className="bg-white rounded-xl">
        {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <div className="p-1 bg-gray-700 ml-4 rounded-full"></div>
        <div className="p-1 bg-gray-500 ml-4 rounded-full"></div>
        <div className="p-1 bg-gray-300 ml-4 rounded-full"></div>
      </div>
    </>
  )
};

export default PostDetail;