import React, {useEffect, useState} from 'react';
import MobileNavBar from "./MobileNavBar.jsx";
import {blogCategories} from "../API/APIrequests.js";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    const [Categories,SetCategory] = useState([]);
    useEffect(()=>{
        (async ()=>{
            let data = await blogCategories();
            SetCategory(data);
        })()
    },[])
    return (
        <div>
            <div className="navbar  bg-base-100">
                <div className="navbar-start">
                    <MobileNavBar Categories={Categories}/>
                </div>
                <div className="navbar-center">
                    <a href="/" className="btn btn-ghost text-4xl hover:bg-transparent">NA BLOGS</a>
                </div>
                <div className="navbar-end">
                </div>
            </div>
            <div className="navbar shadow-xl bg-base-100">
                <div className="navbar-start">
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={"/"} className="text-lg">হোম</NavLink></li>
                        {
                            Categories.map((item,index)=>{
                                return (<li key={index}><NavLink to={"/category-wise-blog/"+item['id']} className="text-lg">{item['name']}</NavLink></li>);
                            })
                        }

                    </ul>
                </div>
                <div className="navbar-end">
                </div>
            </div>
        </div>
    );
};

export default NavBar;