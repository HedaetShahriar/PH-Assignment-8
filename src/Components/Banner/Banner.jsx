import React from 'react';
import bannerImg from '../../assets/banner-img-1.png';
const Banner = () => {
    return (
        <div className='container mx-auto border-3 border-white rounded-3xl py-10 md:py-14 lg:py-16  md:px-6 bg-gradient-to-t from-white to-[#1 to-50%]'>
            <div className='flex flex-col justify-center items-center'>
                <div className='text-center max-w-[1000px] px-4'>
                    <h1 className='font-extrabold text-3xl md:text-5xl mb-4'>Dependable Care, Backed by Trusted Professionals.</h1>
                    <p className='text-sm md:text-base'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                </div>
                <div className='justify-center text-center items-center flex flex-col md:flex-row gap-3 mt-6 w-full px-4'>
                    <input type="text" className='border rounded-full bg-white py-2 px-4.5 w-full md:w-[550px]' placeholder='Search any doctor...' />
                    <button className='btn rounded-full py-[15px] px-[20px] bg-[#176AE5] text-lg md:text-xl font-semibold text-white'>Search</button>
                </div>
                <div className='flex flex-col md:flex-row gap-5 mt-10 px-4'>
                    <img className='w-full md:w-[calc(50%-12px)]' src={bannerImg} alt="" />
                    <img className='w-full md:w-[calc(50%-12px)]' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;