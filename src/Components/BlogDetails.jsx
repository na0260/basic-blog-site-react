import React from 'react';

const BlogDetails = (props) => {
    return (
        <div>
            <div className="container mx-auto mt-10 mb-10">
                <div className="columns-1">
                    <div className="card w-100 bg-base-300 shadow-xl">
                        <figure><img src={props.Blog['postDetails']['img']} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title mb-5">
                                {props.Blog['postDetails']['title']}
                            </h2>
                            <p>{props.Blog['postDetails']['content']}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;