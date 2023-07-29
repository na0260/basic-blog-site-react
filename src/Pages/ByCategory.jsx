import React, {useEffect, useState} from 'react';
import Layout from "../Layout/Layout.jsx";
import {useParams} from "react-router-dom";
import {blogByCategories} from "../API/APIrequests.js";
import Loader from "../Components/Loader.jsx";
import BlogList from "../Components/BlogList.jsx";

const ByCategory = () => {
    let {catId} = useParams();
    const [Blogs,SetBlog] = useState(null);
    useEffect(()=>{
        (async ()=>{
            let data = await blogByCategories(catId);
            SetBlog(data);
        })()
    },[catId]);
    return (
        <Layout>
            {Blogs===null?<Loader/>:<BlogList Blogs={Blogs}/>}
        </Layout>
    );
};

export default ByCategory;