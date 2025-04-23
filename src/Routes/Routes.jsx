import React from 'react';
import {
    createBrowserRouter,
} from "react-router";
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import DoctorDetails from '../Components/Doctor Details/DoctorDetails';
import Blogs from '../Pages/Blogs/Blogs';
import MyBookings from '../Pages/My Bookings/MyBookings';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                loader: () => fetch('/doctorsData.json'),
                Component: Home
            },
            {
                path: "/my-bookings",
                loader: () => fetch('/doctorsData.json'),

                Component: MyBookings
            },
            {
                path: "/blogs",
                loader: () => fetch('/blogsData.json'),
                Component: Blogs
            },
            {
                path: "/doctorDetails/:registrationNumber",
                loader: ({ params }) => fetch(`/doctorsData.json`),
                Component: DoctorDetails
            },
            {
                path: "*",
                Component: ErrorPage
            }
        ]
    },

]);