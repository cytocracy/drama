import { Outlet } from 'react-router-dom';
// import { Nav } from './Nav';
// import { Footer } from './Footer';
//import nav
import Nav from './Nav';
//import footer
import Footer from './Footer';
import React from 'react';

class Layout extends React.Component {


    
    render() {
        return (
            <div className=' min-h-screen flex flex-col'>
                <Nav type={1} />
                <Outlet />
                <Footer />
            </div>
        );
    }
}


export default Layout;