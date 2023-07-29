import React, {useEffect, useState} from 'react';
import Layout from "../Layout/Layout.jsx";
import BlogList from "../Components/BlogList.jsx";
import {blogLatest} from "../API/APIrequests.js";
import Loader from "../Components/Loader.jsx";

const HomePage = () => {
    const [Blogs,SetBlog] = useState(null);
    useEffect(()=>{
        (async ()=>{
            let data = await blogLatest();
            SetBlog(data);
        })()
    },[]);
    return (
        <Layout>
            {Blogs===null?<Loader/>:<BlogList Blogs={Blogs}/>}
        </Layout>
    );
};

export default HomePage;