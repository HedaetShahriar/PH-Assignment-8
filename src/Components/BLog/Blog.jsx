import React from 'react';

const Blog = ({blog,index}) => {
    const {question,answer} = blog;
    return (
        <div className='bg-white rounded-3xl p-6 md:p-8 mt-6'>
            <h2 className='font-bold text-xl'>{index}. {question}</h2>
            <div className='border-b-2 border-gray-400 border-dashed my-3'></div>
            <p className='text-xl font-medium text-gray-700'>{answer}</p>
        </div>
    );
};

export default Blog;