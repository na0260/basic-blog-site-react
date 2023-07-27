import React from 'react';
import NavBar from "../Components/NavBar.jsx";
import Footer from "../Components/Footer.jsx";

const Layout = (props) => {

    return (
        <div>
            <NavBar/>
            {props.children}
            <Footer/>
        </div>
    );
};

export default Layout;