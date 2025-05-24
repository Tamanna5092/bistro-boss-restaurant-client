import React, { use } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const Main = () => {
    const location = useLocation()
    const noNavbarFooter = location.pathname.includes('signIn') || location.pathname.includes('signUp');
    return (
        <div>
            { noNavbarFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            { noNavbarFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;