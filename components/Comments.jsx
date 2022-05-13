<<<<<<< HEAD
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
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length}
            {' '}
            Comments
          </h3>
            {comments.map((comment, index) => (
              <div key={index} className="border-b border-gray-100 mb-4 pb-4">
                <p className="mb-4">
                  <span className="font-semibold">{comment.name}</span>
                  {' '}
                  on
                  {' '}
                  {moment(comment.createdAt).format('MMM DD, YYYY')}
                </p>
                <p className="whitespace-pre-line text-gray-600 w-full">{parse(comment.comment)}</p>
              </div>
            ))}
        </div>
      )}
    </>
  );
};
=======
import React,{useState,useEffect} from 'react'
import moment from 'moment'
import parse from 'html-react-parser'
import { getComments } from '../services'
import {comment} from 'postcss'


const Comments = ({slug}) => {
  const [comments, setComments] = useState([])
  useEffect(()=>{
    // getComments(slug)
    getComments(slug)
    .then((res)=>setComments(res))
  },[])

  return (
    <>
    {comment.length>0 &&(
      <div className="text-white shadow-lg rounded-lg p-8 pb-12 mb-8 bg-black bg-opacity-50">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">
          {/* {comment.length} */}
          
          {' '}
          Discuss
        </h3>
        {comments.map((comment)=>(
          <div
          key={comment.createdAt} className='border-b border-gray-100 mb-4 pb-4'>
            <p className="mb-4">
              <span className="font-semibold">{comment.name}</span>
              {' '}
              on
              {' '}
              {moment(comment.createdAt).format('MMM DD,YYYY')}
            </p>
            <p className="whitespace-pre-line text-gray-600 w-full">
              {parse(comment.comment)}
            </p>
          </div>
        ))}
      </div>
    )}
      </>
  )
}
>>>>>>> 43c0789214ea5b0f15a7ef02b768431b5b9a670d

export default Comments;