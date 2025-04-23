import React from 'react';
import successDoctor from '../../assets/success-doctor.png';
import successReview from '../../assets/success-review.png';
import successPatient from '../../assets/success-patients.png';
import successStaffs from '../../assets/success-staffs.png';
import CountUp from 'react-countup';

const Services = () => {

    return (
        <div className='container mx-auto pb-10 md:pb-16'>
            <div className='text-center mb-8'>
                <h1 className='text-3xl font-extrabold md:text-4xl mb-4'>We Provide Best Medical Services</h1>
                <h4>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </h4>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
                <div className='bg-white py-6 px-8 rounded-2xl'>
                    <div className='w-51 flex flex-col items-center md:items-start mx-auto md:mx-0'>
                        <img className='w-16 h-16' src={successDoctor} alt="" />
                        <h1 className='font-extrabold md:text-6xl text-5xl mt-4 mb-3'><CountUp end={199} enableScrollSpy />+</h1>
                        <h4 className='font-semibold text-2xl text-gray-400'>Total Doctors</h4>
                    </div>
                </div>
                <div className='bg-white py-6 px-8 rounded-2xl'>
                    <div className='w-51 flex flex-col items-center md:items-start mx-auto md:mx-0'>
                        <img className='w-16 h-16' src={successReview} alt="" />
                        <h1 className='font-extrabold md:text-6xl text-5xl mt-4 mb-3'><CountUp end={467} enableScrollSpy />+</h1>
                        <h4 className='font-semibold text-2xl text-gray-400'>Total Reviews</h4>
                    </div>
                </div>
                <div className='bg-white py-6 px-8 rounded-2xl'>
                    <div className='w-51 flex flex-col items-center md:items-start mx-auto md:mx-0'>
                        <img className='w-16 h-16' src={successPatient} alt="" />
                        <h1 className='font-extrabold md:text-6xl text-5xl mt-4 mb-3'><CountUp end={1900} enableScrollSpy />+</h1>
                        <h4 className='font-semibold text-2xl text-gray-400'>Total Patients</h4>
                    </div>
                </div>
                <div className='bg-white py-6 px-8 rounded-2xl'>
                    <div className='w-51 flex flex-col items-center md:items-start mx-auto md:mx-0'>
                        <img className='w-16 h-16' src={successStaffs} alt="" />
                        <h1 className='font-extrabold md:text-6xl text-5xl mt-4 mb-3'><CountUp end={300} enableScrollSpy />+</h1>
                        <h4 className='font-semibold text-2xl text-gray-400'>Total Staffs</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;