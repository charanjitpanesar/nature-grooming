'use client'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../public/sass/pages/home_brand_section.scss'
import CommonTitle from './CommonTitle'
import { Autoplay, Navigation  } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import logo1 from '../../../public/images/brand1.png'
import logo2 from '../../../public/images/brand2.png'
import logo3 from '../../../public/images/brand3.png'
import logo4 from '../../../public/images/brand4.png'


const HomeBrandSection = () => {
     let titleData = 
    {
        heading:"our trusted brands"
    }

    let slideData =[
        {
            logo: logo1,
        },
        {
            logo: logo2,
        },
        {
            logo: logo3,
        },
        {
            logo: logo4,
        },
        {
            logo: logo1,
        },
        {
            logo: logo2,
        },
        {
            logo: logo3,
        },
        {
            logo: logo4,
        },
        {
            logo: logo1,
        },
        {
            logo: logo2,
        },
    ]
    return (
        <>
            <section className='brand_section spacing_bottom'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <CommonTitle titleDataProps={titleData}/>
                                <div className='slider_area'>
                                    <div className='navs'>
                                        <div className="swiper-button-prev custom-swiper-prev"><i className="bi bi-caret-left-fill"></i></div>
                                        <div className="swiper-button-next custom-swiper-next"><i className="bi bi-caret-right-fill"></i></div>
                                    </div>
                                    <Swiper
                                        spaceBetween={15}
                                        slidesPerView={5}
                                        breakpoints={{
                                            0: {
                                            slidesPerView: 2,
                                            },
                                            375: {
                                            slidesPerView: 2,
                                            },
                                            556: {
                                            slidesPerView: 3,
                                            },
                                            768: {
                                            slidesPerView: 4,
                                            },
                                        }}
                                         navigation={{
                                            nextEl: '.custom-swiper-next',
                                            prevEl: '.custom-swiper-prev',
                                        }}
                                        modules={[Navigation, Autoplay]}     
                                        autoplay={{ delay: 3000 }}
                                        speed={800}      
                                        >
                                            {
                                                slideData?.map((val,i)=>(
                                                    <SwiperSlide key={i}>
                                                        <div className='slide_inner'>
                                                            <div className='logo_area'>
                                                                <Image
                                                                    src={val.logo}
                                                                    alt='...'
                                                                    title='...'
                                                                    fetchPriority='low'
                                                                />
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

export default HomeBrandSection