'use client'
import React from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import  {  useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../public/sass/pages/product_gallery.scss'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import productImg1 from '../../../public/images/product_img1.jpg'
import productImg2 from '../../../public/images/product_img2.jpg'
import productImg3 from '../../../public/images/product_img3.jpg'


// import required modules
import { FreeMode, Thumbs } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import HomeTrending from './HomeTrending';

const ProductGallerySlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
     let slideData = [
            {
                img: productImg1,
            }, 
            {
                img: productImg2,
            }, 
            {
                img: productImg3,
            },
            {
                img: productImg1,
            }, 
            {
                img: productImg2,
            }, 
            {
                img: productImg3,
            },
        ]

     const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(prev => prev + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
    return (
        <>
            <section className='product_gallery_section'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <Row>
                                    <Col xxl={5} xl={5} lg={5} md={5} sm={5} xs={12}>
                                        <div className='left_area'>
                                            <Swiper
                                                loop={true}
                                                spaceBetween={10}
                                                navigation={true}
                                                thumbs={{ swiper: thumbsSwiper }}
                                                modules={[FreeMode, Thumbs]}
                                                className="mySwiper2"
                                            >
                                                {
                                                    slideData?.map((val,i)=>(
                                                        <SwiperSlide key={i}>
                                                            <div className='slide_inner'>
                                                                <div className='image_area'>
                                                                    <Image
                                                                        src={val.img}
                                                                        alt='...'
                                                                        title="..."
                                                                        fetchPriority='low'
                                                                    />
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                    ))    
                                                }
                                                
                                            </Swiper>
                                            <Swiper
                                                onSwiper={setThumbsSwiper}
                                                loop={true}
                                                spaceBetween={10}
                                                slidesPerView={5}
                                                freeMode={true}
                                                watchSlidesProgress={true}
                                                modules={[FreeMode, Thumbs]}
                                                className="mySwiper"
                                                breakpoints={{
                                                    0: {
                                                    slidesPerView: 4, 
                                                    },
                                                    576: {
                                                    slidesPerView: 4, 
                                                    },
                                                    768: {
                                                    slidesPerView: 5, 
                                                    },
                                                }}
                                            >
                                                 {
                                                    slideData?.map((val,i)=>(
                                                        <SwiperSlide key={i}>
                                                            <div className='slide_inner'>
                                                                <div className='image_area'>
                                                                    <Image
                                                                        src={val.img}
                                                                        alt='...'
                                                                        title="..."
                                                                        fetchPriority='low'
                                                                    />
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                    ))    
                                                }
                                            </Swiper>
                                        </div>
                                    </Col>
                                    <Col xxl={7} xl={7} lg={7} md={7} sm={7} xs={12}>
                                        <div className='right_area'>
                                            <h3>Men&apos;s Grooming Shaving(With 2 Blades)</h3>
                                            <div className='star_list'>
                                                <ul>
                                                    <li className="active"><i className="bi bi-star-fill"></i></li>
                                                    <li className="active"><i className="bi bi-star-fill"></i></li>
                                                    <li><i className="bi bi-star-fill"></i></li>
                                                    <li><i className="bi bi-star-fill"></i></li>
                                                    <li><i className="bi bi-star-fill"></i></li>
                                                </ul>
                                            </div>
                                            <div className='price_area'>
                                                <div className='off_price'>$80.00</div>
                                                <div className='actual_price'>$100.00</div>
                                            </div>
                                            <div className='product_info'>
                                                <p><span>Availability:</span> In Stock</p>
                                                <p><span>SKU:</span> 4BHJ56</p>
                                            </div>
                                            <div className='product_desc'>
                                                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </div>
                                            <div className='sizes'>
                                                <h4>Sizes:</h4>
                                                <ul>
                                                    <li className='active'>50ml</li>
                                                    <li>100ml</li>
                                                    <li>150ml</li>
                                                </ul>
                                            </div>
                                            <div className='quantity_btns_area'>
                                                <div className='quantity_area'>
                                                    <h4>Qty:</h4>
                                                    <div className='btn_action'  onClick={decrement}><i className="bi bi-dash"></i></div>
                                                    <span className='quantity'>{quantity}</span>
                                                    <div className='btn_action' onClick={increment}><i className="bi bi-plus"></i></div>
                                                </div>
                                                <div className='btns_area'>
                                                    <div className='btn_area'>
                                                        <Link href="/" className='btn-primary'><i className="bi bi-cart"></i> Add to Cart</Link>
                                                    </div>
                                                    <div className='btn_area'>
                                                        <Link href="/" className='btn-primary black'>Buy Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='lower_list'>
                                                <ul>
                                                    <li><Link href="/"><i className="bi bi-heart"></i> Wishlist</Link></li>
                                                    <li><Link href="/"><i className="bi bi-bar-chart"></i> Compare</Link></li>
                                                    <li><Link href="/"><i className="bi bi-envelope"></i> Share</Link></li>
                                                </ul>
                                            </div>
                                            <div className='social_icons'>
                                                <h4>Share this:</h4>
                                                <ul>
                                                    <li>
                                                        <Link href='/' className='fb'>
                                                            <i className="bi bi-facebook"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href='/' className='twitter'>
                                                        <i className="bi bi-twitter"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href='/' className='linkedin'>
                                                            <i className="bi bi-linkedin"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href='/' className='pin'>
                                                            <i className="bi bi-pinterest"></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col> 
                    </Row>
                </Container>
            </section>
            <section className='tabs_section'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <Tabs
                                    defaultActiveKey="profile"
                                    id="uncontrolled-tab-example"
                                    >
                                    <Tab eventKey="home" title="Description">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </Tab>
                                    <Tab eventKey="profile" title="Product Tags">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </Tab>
                                    <Tab eventKey="contact" title="Reviews">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                    </Tab>
                                    </Tabs>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <HomeTrending heading="related products"/>
            <div className='spacing_bottom'></div>
        </>
    )
}

export default ProductGallerySlider