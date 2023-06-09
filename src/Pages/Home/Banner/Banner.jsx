import React from 'react';
import banner1 from '../../../assets/images/banner1.webp'
import banner2 from '../../../assets/images/banner2.jpg'
import banner3 from '../../../assets/images/banner3.jpg'

import { Carousel } from 'react-bootstrap';


const Banner = () => {
    return (
        <div className='mt-2 mb-2'>
            <Carousel>
            <Carousel.Item>
                <img
                    className="d-block" 
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption className='align-middle justify-content-center'>
                    <h2>COOK HEALTHY EDIBLE FOOD</h2>
                    <p>Children and families learn knowledge and skills to develop healthy attitudes towards food</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    src={banner2}
                    alt="Second slide"
                />
                <Carousel.Caption className='align-middle justify-content-center'>
                    <h2>EXPERIENTIAL LEARNING THROUGH FOOD</h2>
                    <p>EXPERIENTIAL LEARNING THROUGH FOOD
                        Programs for educators, students & families to support life-long healthy eating and the pleasure of cooking with real food</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block" 
                    src={banner3}
                    alt="Third slide"
                />
                <Carousel.Caption className='align-middle justify-content-center'>
                    <h2>OUR COMMUNITY CARES</h2>
                    <p>
                        Helping children learn about food, from garden to table, from seed to kitchen, back to compost.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Banner;





{/*<div>
            <div className="card text-white mx-auto mb-5">
                <img src={banner2} className="card-img" alt=""/>
                    <div className="card-img-overlay overflow-auto slide-info">
                        <h1 className="card-title">Meet Expert</h1>
                        <h2 className="card-title">Dr. Tiara Doe</h2>
                        <h4 className="card-text">Customized skincare made for your skin's unique needs. Safe and natural dermabration. <br /> Trust your skin to our clinic. We're experienced in making you look beautiful.</h4>
                        <button className='border-0 rounded'>Book an Appointment</button>
                    </div>
            </div>
        </div>*/}
