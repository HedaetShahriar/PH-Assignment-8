import React from 'react';
import { AiOutlineTrademarkCircle } from "react-icons/ai";
import { useNavigate } from 'react-router';

const Doctor = ({ doctor }) => {
    const { name, image, education, speciality, experience, registrationNumber,availability } = doctor;

    const date = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = daysOfWeek[date.getDay()];
    const isAvailable=availability.includes(day);

    const navigate = useNavigate()
    const handleViewDetails = (regNo) => {
        navigate(`/doctorDetails/${regNo}`)
    }

    return (
        <div className='bg-white rounded-2xl p-6 md:p-8'>
            <div className='bg-cover rounded-2xl aspect-[4/3] shadow-sm'>
                <img className='border-1 border-gray-200 rounded-2xl w-full h-full object-cover' src={image} alt="" />
            </div>
            <div className='flex gap-2 my-4'>
                {
                    isAvailable ? (<div className='rounded-full bg-green-100 border-1 border-green-200 py-1.5 px-3.5 text-sm text-green-400'>Available</div>) :(<div className='rounded-full bg-red-100 border-1 border-red-200 py-1.5 px-3.5 text-sm text-red-400'>Unavailable</div>)
                }
                <div className='rounded-full bg-blue-100 border-1 border-blue-200 py-1.5 px-3.5 text-sm text-blue-400'>{experience} Experience</div>
            </div>
            <h2 className='font-extrabold text-2xl'>{name}</h2>
            <h3 className='font-medium text-lg mt-1.5 text-gray-500'>{education} - {speciality}</h3>
            <div className='border-b-1 border-gray-600 border-dashed my-3'></div>
            <div className='flex gap-1 items-center text-gray-500'>
                <AiOutlineTrademarkCircle size={20} />
                <h4 className='font-medium text-lg '>Reg No: {registrationNumber}</h4>

            </div>
            <div className='flex flex-col mt-4'>
                <button onClick={() => handleViewDetails(registrationNumber)} className='btn btn-outline rounded-full border-2 border-[#176AE5] text-xl font-bold text-[#176AE5]'>View Details</button>
            </div>
        </div>
    );
};

export default Doctor;