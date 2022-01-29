import React from 'react';

const Review = ({ singleReview }) => {
    const { name, email, review, ratings } = singleReview;
    return (
        // this is home page testimonial section
        <div className="lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
                <p className="leading-relaxed"> {review}</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{name}</h2>
                {
                    ratings <= 0 ?
                        <div className='text-amber-500 text-xl'>☆☆☆☆☆</div> :
                        ratings > 0 && ratings <= 1 ?
                            <div className='text-amber-500 text-xl'>★☆☆☆☆</div> :
                            ratings > 1 && ratings <= 2 ?
                                <div className='text-amber-500 text-xl'>★★☆☆☆</div> :
                                ratings > 2 && ratings <= 3 ?
                                    <div className='text-amber-500 text-xl'>★★★☆☆</div> :
                                    ratings > 3 && ratings <= 4 ?
                                        <div className='text-amber-500 text-xl'>★★★★☆</div> :
                                        <div className='text-amber-500 text-xl'>★★★★★</div>
                }
                <p className="text-gray-500">{email}</p>
            </div>
        </div>
    );
};

export default Review;