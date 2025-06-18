'use client'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../public/sass/pages/home_hero_slider.scss'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import slideImg1 from '../../../public/images/home_slider_img1.jpg'
import slideImg2 from '../../../public/images/home_slider_img2.jpg'
import Image from 'next/image'
import Link from 'next/link';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';

const HomeHeroSection = () => {
    let slideData = [
        {
            img: slideImg1
        },
         {
            img: slideImg2
        }
    ]
    return (
        <section className='home_hero_section'>
            <div className='slider_area'>
                <Swiper
                    spaceBetween={15}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}    
                    autoplay={{ delay: 3000 }}
                    speed={800}      
                    >
                        {
                            slideData?.map((val,i)=>(
                                <SwiperSlide key={i}>
                                    <div className='slide_inner'>
                                        <div className='image_area'>
                                            <Image src={val.img} alt="..." title="..." fetchPriority="low"/>
                                        </div>
                                        <Container>
                                            <Row>
                                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                                    <div className='parent_area'>
                                                        <div className='card_area'>
                                                            <h5>30% Discount</h5>
                                                            <h3>Latest Men&apos;s Collection</h3>
                                                            <div className='button_area'>
                                                                <Link href="/" className="btn-primary" >Shop Now</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col> 
                                            </Row>
                                        </Container>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
            </div>
        </section>
    )
}

export default HomeHeroSection