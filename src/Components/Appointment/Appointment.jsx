import React from 'react';

const Appointment = ({ appointment,handleCancelAppointment}) => {
    const { id,education, speciality,designation,fee } = appointment;
    // const { id, name, image, education, speciality, experience, registrationNumber, designation, workplace, fee, availability } = appointment;
    return (
        <div className='bg-white rounded-3xl text-center md:text-left p-5 md:p-8 mt-10'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0'>
                <div>
                    <h2 className='font-bold text-2xl'>{appointment.name}</h2>
                    <h3 className='text-lg mt-3 text-gray-500'>{education} - {speciality}, {designation}</h3>
                </div>
                <p className='text-xl font-medium text-gray-500'>Appointment Fee: {fee} Taka + Vat</p>
            </div>
            <div className='border-b-2 border-gray-400 border-dashed my-3'></div>
            <div className='text-center mt-6'>
                <button onClick={()=>handleCancelAppointment(id)} className='btn btn-outline text-red-500 border-2 md:w-[50%] font-bold text-xl py-6 px-5 rounded-full'>Cancel Appointment</button>
            </div>
        </div>
    );
};

export default Appointment;