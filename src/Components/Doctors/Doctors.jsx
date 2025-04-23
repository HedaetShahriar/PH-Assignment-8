import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [viewAll, setViewAll] = useState(false);
    const [loading, setLoading] = useState(false);


    const handleViewAll = () => {
        setLoading(true);
        setTimeout(() => {
            setViewAll(!viewAll);
            setLoading(false);
        }, 500);
    }

    const doctors = useLoaderData();
    // console.log(doctors);

    return (
        <div className='container mx-auto my-10 md:my-14 lg:my-[80px] text-center'>
            <h1 className='text-3xl md:text-4xl font-extrabold'>Our Best Doctors</h1>
            <p className='text-base md:text-lg my-4 mx-auto max-w-[1000px]'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div>
                <div className={`mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 text-left`}>
                    {
                        (viewAll ? doctors : doctors.slice(0, 6)).map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                    }
                </div>
                <button
                    onClick={handleViewAll}
                    className='btn rounded-full py-[20px] px-[25px] bg-[#176AE5] text-xl font-semibold text-white mt-10'
                >
                    {loading ? 'Loading...' : (viewAll ? 'Show less' : 'View All Doctors')}
                </button>
            </div>
        </div>
    );
};

export default Doctors;