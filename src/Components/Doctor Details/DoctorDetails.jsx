import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { AiOutlineTrademarkCircle } from 'react-icons/ai';
import { PiWarningCircleBold } from "react-icons/pi";
import { Slide, toast } from 'react-toastify';
import { addToDB } from '../../utilities/addToDB';

const DoctorDetails = () => {
    const navigate = useNavigate();
    const { registrationNumber } = useParams();
    const doctorData = useLoaderData();
    const doctor = doctorData.find(doc => doc.registrationNumber === registrationNumber);

    // const [isBooked, setBooked]=useState(false);
    if (!doctor) {
        return (
            <div className='container bg-white rounded-3xl px-3 py-6 md:py-10 mx-auto mb-10'>
                <div className='text-center mt-5'>
                    <h1 className='font-extrabold text-4xl'>Doctor Not Found</h1>
                    <p className='text-lg mt-4 text-gray-600'>
                        No doctor found with the given registration number -
                    </p>

                    <div className='justify-center flex gap-1 items-center text-gray-700 mt-2'>
                        <AiOutlineTrademarkCircle size={20} />
                        <h4 className='font-medium text-lg '>Reg No: {registrationNumber}</h4>

                    </div>
                    <button onClick={()=>navigate('/')} className='btn mt-5 btn-primary rounded-full bg-[#176AE5]'>View All Doctors</button>
                </div>
            </div>

        );
    }
    const { id, name, image, education, speciality, designation, workplace, fee, availability } = doctor;

    const date = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = daysOfWeek[date.getDay()];
    const isAvailable=availability.includes(day);
    
    document.title = `${name}`;
    const handleBookAppointment = (id) => {
        const isBooked = addToDB(id);
        if (isBooked) {
            error();
            return;
        }
        else {
            success();
            navigate(`/my-bookings`);
        }
    }
    const success = () => {
        toast.success(`Appointment successfully booked for Dr. ${name}!`, {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            transition: Slide,
        });
    }
    const error = () => {
        toast.error(`You have already booked an appointment with ${name}!`, {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            transition: Slide,
        });
    }

    return (
        <div className='container mx-auto my-10'>
            <div className='text-center bg-white rounded-3xl py-15 px-3 md:px-40'>
                <h1 className='font-extrabold text-3xl'>Doctor's Profile Details</h1>
                <p className='text-lg mt-4 '>
                    Welcome to the doctor's profile page. Here, you can find detailed information about the doctor. Our doctors are committed to providing the best care for their patients.
                </p>
            </div>
            <div className='flex flex-col md:flex-row bg-white rounded-3xl gap-5 items-center mt-10 p-4 md:p-8'>
                <div className='bg-cover rounded-2xl md:aspect-[4/5] shadow-sm md:w-2/8'>
                    <img className='border-1 border-gray-200 rounded-2xl w-full h-full object-cover' src={image} alt="" />
                </div>
                <div className='md:w-5/8 font-medium'>
                    <h2 className='font-extrabold text-2xl'>{name}</h2>
                    <h3 className='text-lg mt-3 text-gray-500'>{education}</h3>
                    <h3 className='text-lg mt-1.5 text-gray-500'>{speciality}, {designation}</h3>
                    <h3 className='text-lg mt-3 text-gray-500'>Working at</h3>
                    <h3 className='font-bold text-xl mt-1.5'>{workplace}</h3>
                    <div className='border-b-1 border-gray-600 border-dashed my-4'></div>
                    <div className='flex gap-1 items-center text-gray-500'>
                        <AiOutlineTrademarkCircle size={20} />
                        <h4 className='font-medium text-lg '>Reg No: {registrationNumber}</h4>

                    </div>
                    <div className='border-b-1 border-gray-600 border-dashed my-4'></div>
                    <div className='flex flex-wrap gap-3 items-center'>
                        <h4 className='font-semibold'>Availability </h4>
                        {availability.map((day, index) => (
                            <div key={index} className='bg-orange-100 rounded-full border-1 border-orange-300 py-1.5 px-3.5 text-sm font-medium text-orange-500'>{day}
                            </div>
                        ))}
                    </div>
                    <h4 className='font-bold mt-4 text-blue-500' ><span className='text-black mr-2'>Consultation Fee:</span><span>Taka : {fee}</span><span className='text-gray-500 font-medium mx-1'>(incl. Vat)</span><span className='font-medium'>Per Consultation</span></h4>
                </div>
            </div>
            <div className='bg-white text-center md:text-left rounded-3xl p-8 mt-10'>
                <h1 className='font-extrabold text-2xl'>Book an Appointment</h1>
                <div className='border-b-1 border-gray-600 border-dashed my-4'></div>
                <div className='flex flex-col gap-4 md:flex-row justify-between items-center'>
                    <h4 className="font-bold text-lg">Availability</h4>
                    {
                        isAvailable ? (<h4 className="font-medium px-4 py-2 text-sm bg-green-50 text-green-500 rounded-full border-1 border-green-300">Doctor Available Today</h4>):(<h4 className="font-medium px-4 py-2 text-sm bg-red-50 text-red-500 rounded-full border-1 border-red-300">Doctor Not Available Today</h4>)
                    }
                </div>
                <div className='border-b-1 border-gray-600 border-dashed my-4'></div>
                <div className='rounded-3xl lg:rounded-full flex items-center gap-2 bg-orange-100 text-orange-500 py-2 px-4'>
                    <PiWarningCircleBold size={20} />
                    <h4 className='font-medium'>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</h4>
                </div>
                <div className='text-center mt-6'>
                    <button onClick={() => handleBookAppointment(id)} className='btn bg-[#176AE5] text-white md:w-[50%] font-bold text-xl py-6 px-5 rounded-full'>Book <span className='hidden md:inline'>Appointment</span> Now</button>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;