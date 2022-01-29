import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Review from './Review/Review';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#4c4d4c", borderRadius: "100px" }}
            onClick={onClick}
        />
    );
}


function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#4c4d4c", borderRadius: "100px" }}
            onClick={onClick}
        />
    );
}


const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],

    };
    return (
        <section className="text-gray-600 body-font py-20">
            <h2 className="text-3xl font-bold leading-7 text-gray-900 sm:text-4xl sm:truncate">
                Testimonial
            </h2>
            <div className="container px-5 py-14 mx-auto">
                <Slider {...settings}>
                    {
                        reviews.map(singleReview => <Review key={singleReview._id} singleReview={singleReview}></Review>)
                    }
                </Slider>
            </div>
        </section>
    );
};

export default Reviews;