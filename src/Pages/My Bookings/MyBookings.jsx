import React, { useEffect, useState } from 'react';
import { getStoredAppointments, removeFromDB } from '../../utilities/addToDB';
import { useLoaderData, useNavigate } from 'react-router';
import Appointment from '../../Components/Appointment/Appointment';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { Slide, toast } from 'react-toastify';


// Triangle bar shape function
const getPath = (x, y, width, height) => (
    `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
   Z`
);

// Custom triangle bar component
const TriangleBar = (props) => {
    const { x, y, width, height, index } = props;
    const colors = ['#FF5A5F', '#0099FF', '#00C49F', '#FFBB28'];
    const fill = colors[index % colors.length];
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const MyBookings = () => {
    const navigate = useNavigate();
    const data = useLoaderData();
    const [myAppointments, setMyAppointments] = useState([]);

    useEffect(() => {
        const bookedAppointments = getStoredAppointments();
        const convertedIDs = bookedAppointments.map(appointment => parseInt(appointment));
        const appointments = data.filter(appointment => convertedIDs.includes(appointment.id));
        setMyAppointments(appointments);
    }, []);

    const handleCancelAppointment = (id) => {
        removeFromDB(id);
        const remainingAppointments = myAppointments.filter(appointment => appointment.id !== id);
        setMyAppointments(remainingAppointments);
        const appointment = data.find(appointment => appointment.id === id);
        const { name } = appointment;
        error(name);
    }
    const error = (name) => {
        toast.error(`Your Appointment with ${name} has been cancelled!`, {
            position:'top-right',
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
        myAppointments.length === 0 ? (
            <div className='container mx-auto text-center flex flex-col justify-center my-10 min-h-[calc(100vh-200px)]'>
                <h1 className='font-extrabold text-4xl mb-4'>You Have not Booked any appointment yet</h1>
                <h4>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</h4>
                <div>
                    <button onClick={() => navigate('/')} className='btn rounded-full py-[20px] px-[25px] bg-[#176AE5] text-xl font-semibold text-white mt-6'>Book an Appointment</button>
                </div>
            </div>
        ) : (
            <div className='container mx-auto my-10'>
                <div className='text-center bg-white rounded-3xl py-6 pr-4 md:p-8 lg:p-10'>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={myAppointments}>
                            <CartesianGrid strokeDasharray="1 1" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="fee" shape={<TriangleBar />} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className='mt-4'>
                    <div className='text-center my-8'>
                        <h1 className='font-extrabold text-4xl mb-4'>My Today Appointments</h1>
                        <h4>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</h4>
                    </div>
                    {
                        myAppointments.map((appointment) => <Appointment key={appointment.id} handleCancelAppointment={handleCancelAppointment} appointment={appointment}></Appointment>)
                    }
                </div>

            </div >
        )
    );
};

export default MyBookings;