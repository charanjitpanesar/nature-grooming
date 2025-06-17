'use client'
import React from 'react'
import userImg from '../../../public/images/modal_img.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import '../../../public/sass/pages/home_testimonials.scss'

const HomeTestimonials = () => {

    let slideData = [
        {
            img: userImg,
            name:'Stephen Henry',
            description:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
        {
            img: userImg,
            name:'Albert Homes',
            description:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
        {
            img: userImg,
            name:'Roman Atkionsa',
            description:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
    ]
    return (
        <>
            <section className='testimonials_section'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <div className="custom-swiper-pagination"></div>
                                <div className='slider_area'>
                                    <Swiper
                                        spaceBetween={15}
                                        slidesPerView={1}
                                        pagination={{
                                            clickable: true,
                                            el: '.custom-swiper-pagination',
                                        }}
                                        modules={[Pagination, Autoplay]}     
                                        autoplay={{ delay: 3000 }}
                                        speed={800}      
                                        >
                                            {
                                                slideData?.map((val,i)=>(
                                                    <SwiperSlide key={i}>
                                                        <div className='slide_inner'>
                                                            <div className='content_area'>
                                                                <div className='user_img'>
                                                                    <Image
                                                                        src={val.img}
                                                                        alt='...'
                                                                        title='...'
                                                                        fetchPriority='low'
                                                                    />
                                                                </div>
                                                                <div className='user_name'>{val.name}</div>
                                                                <p>{val.description}</p>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                ))
                                            }
                                    </Swiper>
                                </div>
                            </div>
                        </Col> 
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default HomeTestimonials