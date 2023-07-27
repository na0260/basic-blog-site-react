import React from 'react';
import {Link} from "react-router-dom";

const BlogList = (props) => {
    return (
        <div>
            <div className="container mx-auto my-16 p-9">
                <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {
                        props.Blogs.map((item,index)=>{
                            return (<Link key={index.toString()} to={"/"} className="card w-100 bg-base-200 shadow-2xl">
                                <figure><img src={item['img']} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {item['title']}
                                    </h2>
                                    <p>{item['short']}</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">{item['created_at']}</div>
                                    </div>
                                </div>
                            </Link>);
                        })
                    }
                </div>

            </div>

        </div>
    );
};

export default BlogList;