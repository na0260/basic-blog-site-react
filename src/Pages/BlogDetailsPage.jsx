import React, {useEffect, useState} from 'react';
import Layout from "../Layout/Layout.jsx";
import {useParams} from "react-router-dom";
import {blogDetails} from "../API/APIrequests.js";
import Loader from "../Components/Loader.jsx";
import BlogDetails from "../Components/BlogDetails.jsx";

const BlogDetailsPage = () => {
    let {blogID} = useParams();
    const [Blog,SetBlog] = useState(null);
    useEffect(()=>{
        (async ()=>{
            let data = await blogDetails(blogID);
            SetBlog(data);
        })()
    },[blogID]);
    return (
        <Layout>
            {Blog===null?<Loader/>:<BlogDetails Blog={Blog}/>}
        </Layout>
    );
};

export default BlogDetailsPage;