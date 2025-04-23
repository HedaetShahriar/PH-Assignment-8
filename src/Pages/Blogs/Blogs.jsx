import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from '../../Components/BLog/Blog';

const Blogs = () => {
    const blogs = useLoaderData();
    return (
        <div className='container mx-auto mt-6 mb-10'>
            <h1 className='font-extrabold text-3xl text-center'>Blogs</h1>
            {
                blogs.map((blog,index)=><Blog key={index} index={index+1} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;