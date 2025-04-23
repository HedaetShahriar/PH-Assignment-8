import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { NavLink, Outlet, useLocation, useNavigation } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    const navigation = useNavigation();
    const location = useLocation();
    const isNavigating = navigation.state === 'loading';

    const isHomePage = location.pathname === '/';
    const isMyBookingsPage = location.pathname === '/my-bookings';
    const isBlogsPage = location.pathname === '/blogs';
    const isErrorPage = location.pathname === "/404" || location.pathname.startsWith("/undefined") || location.pathname.startsWith("/contact-us");

    document.title = isHomePage ? "Home" : isMyBookingsPage ? "My Bookings" : isBlogsPage ? "Blogs" : isErrorPage ? "Error" : "";

    const links = <>
        <NavLink
            to="/"
            className={({ isActive }) =>
                (`${isActive ? "border-b-4" : ""}  border-[#5dba76] rounded-sm px-1.5 hover:bg-gray-300`)
            }
        >
            Home
        </NavLink>
        <NavLink to="/my-bookings"
            className={({ isActive }) =>
                (`${isActive ? "border-b-4" : ""}  border-[#5dba76] rounded-sm px-1.5 hover:bg-gray-300`)
            }
        >
            My Bookings
        </NavLink>
        <NavLink to="/blogs"
            className={({ isActive }) =>
                (`${isActive ? "border-b-4" : ""}  border-[#5dba76] rounded-sm px-1.5 hover:bg-gray-300`)
            }
        >
            Blogs
        </NavLink>
        <NavLink to="/contact-us"
            className={({ isActive }) =>
                (`${isActive ? "border-b-4" : ""}  border-[#5dba76] rounded-sm px-1.5 hover:bg-gray-300`)
            }
        >
            Contact Us
        </NavLink>
    </>

    return (
        <div>
            <Navbar links={links}></Navbar>
            <ToastContainer />
            {
                isNavigating &&
                <div className='min-h-[calc(100vh-340px)] flex justify-center items-center'><span className="loading loading-bars loading-xl"></span></div>
            }
            <div className='p-2'>
                <Outlet></Outlet>
            </div>
            {
                !isErrorPage && <Footer links={links}></Footer>
            }

        </div>
    );
};
export default Root;