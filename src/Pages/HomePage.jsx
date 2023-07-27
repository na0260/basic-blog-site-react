import React, {useEffect, useState} from 'react';
import Layout from "../Layout/Layout.jsx";
import BlogList from "../Components/BlogList.jsx";
import {blogLatest} from "../API/APIrequests.js";

const HomePage = () => {
    const [Blogs,SetBlog] = useState([]);
    useEffect(()=>{
        (async ()=>{
            let data = await blogLatest();
            SetBlog(data);
        })()
    },[])
    return (
        <Layout>
            <BlogList Blogs={Blogs}/>
        </Layout>
    );
};

export default HomePage;