import React from 'react';
import { RichText } from '@graphcms/rich-text-react-renderer';
import moment from 'moment';


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
    console.log(type)
    switch (type) {
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'heading-two':
        return <h2 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>;
      case 'heading-one':
        return <div className='bg-gradient-to-r from-gray-200 to to-gray-100  rounded-xl p-2 pb-0'><h1 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h1></div>;
      case 'paragraph':
        return <p key={index} className="mb-8 bg-gray-100 rounded-lg p-2">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
            className='bg-gray-100 rounded-3xl m-4 p-4'
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
                    {modifiedText.map((item, i) => (
                      <React.Fragment key={i}>{item}</React.Fragment>
                    ))}
                  </code>
                </div>
              </pre>
            </div>
          )
        
        case 'block-quote':
          return <div className='flex flex-row'><div className='p-1 m-1 rounded-lg bg-red-200'></div><h1 key={index} className="text-lg p-1 font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h1></div>;

      
      default:
        return modifiedText;
    }
  };

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6">
          <img src={post.featuredImage.url} alt="" className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
        </div>
        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-8 w-full">
            <div className="hidden md:flex  justify-center lg:mb-0 lg:w-auto mr-8 items-center">
              <img
                alt={post.author.name}
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src={post.author.photo.url}
              />
              <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
            </div>
            <div className="font-medium text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>

    </>
  );
};

export default PostDetail;