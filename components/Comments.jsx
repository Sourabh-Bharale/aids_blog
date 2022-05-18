import React, { useEffect, useState } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';

import { getComments } from '../services';

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    });
  }, []);

  return (
    <>
      {comments.length > 0 && (
        <div className="bg-white  mt-8   mb-8">
          <div className="flex flex-row mb-8">

          <div className="pl-1 rounded-full bg-red-300"></div>
          <h3 className="text-xl ml-4 text-gray-900">
            Comments
          </h3>
          </div>
          {/* <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length}
            {' '}
            Comments
          </h3> */}
            {comments.map((comment, index) => (
              <div key={index} className="border-b  border-gray-100 mb-2">
                <p >
                  <span className="font-semibold">{comment.name}</span>
                </p>
                <p className='text-sm  pl-2 border-l-2'>{moment(comment.createdAt).fromNow()}</p>
                <p className="whitespace-pre-line mt-2 text-gray-600 w-full">{parse(comment.comment)}</p>
              </div>
            ))}
        </div>
      )}
    </>
  );
};
export default Comments;