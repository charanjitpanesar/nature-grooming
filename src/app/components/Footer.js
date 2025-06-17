'use client'
import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import '../../../public/sass/pages/footer.scss'
import logo from '../../../public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import cardImg1 from '../../../public/images/card_img1.png';
import cardImg2 from '../../../public/images/card_img2.webp';
import cardImg3 from '../../../public/images/card_img3.png';
import cardImg4 from '../../../public/images/card_img4.png';

const Footer = () => {
    return (
        <>
            <section className='newsletter_section'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <Row>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                        <div className='left_area'>
                                            <h3>Sign up to receive 10% off* your first order</h3>
                                                <p>Everydaay! at huge Discounts in our Designer Clothing Sale</p>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                        <div className='right_area'>
                                            <Form>
                                                <div className='form_inner'>
                                                    <Form.Group className="form-group">
                                                        <Form.Control type="email" placeholder="Signup for newsletter"/>
                                                    </Form.Group>
                                                    <div className='button_area'>
                                                        <Button type='button' className="btn-primary">Subscriber</Button>
                                                    </div>
                                                </div>
                                            </Form>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col> 
                    </Row>
                </Container>
            </section>

            <section className='footer_section'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <div className='upper_area'>
                                    <Row>
                                        <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={12}>
                                            <div className='inner_area'>
                                                <div className='logo_area'>
                                                    <Image src={logo} alt="..." title="..." fetchPriority="low" />
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis
                                                </p>
                                            </div>
                                        </Col>
                                        <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={12}>
                                            <div className='inner_area'>
                                                <h3>Help</h3>
                                                <ul>
                                                    <li>
                                                        <Link href="/">Delivery Information</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">Privacy Policy</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">Term & Conditions</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">Contact</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">FAQ</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={12}>
                                            <div className='inner_area'>
                                                <h3>Guidence</h3>
                                                <ul>
                                                    <li>
                                                        <Link href="/">About Us</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">Our Testimonials</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">Update News</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">Quick Query</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">Product Information</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">Sitemap</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                         <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={12}>
                                            <div className='inner_area inner4'>
                                                <h3>Contact Us</h3>
                                                <ul>
                                                    <li>
                                                        <i className="bi bi-geo-alt-fill"></i>
                                                        <Link href="/">Dream park, near school, Near super Market, USA</Link>
                                                    </li>
                                                    <li>
                                                        <i className="bi bi-telephone-fill"></i>
                                                        <Link href="/">+61-1294 489</Link>
                                                    </li>
                                                    <li>
                                                        <i className="bi bi-envelope-fill"></i>
                                                        <Link href="/">demo@gmail.com</Link>
                                                    </li>
                                                    <li>
                                                        <i className="bi bi-clock"></i>
                                                        <Link href="/">Mon-Sat 10am to 7pm</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='lower_area'>
                                    <div className='left_area'>
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
                                    <div className='middle_area'>
                                        <p>© Copyright all rights reserved</p>
                                    </div>
                                    <div className='right_area'>
                                        <div className='img_area'>
                                            <Image
                                                src={cardImg4}
                                                alt='...'
                                                title='...'
                                                fetchPriority='low'
                                            />
                                        </div>
                                        <div className='img_area'>
                                            <Image
                                                src={cardImg2}
                                                alt='...'
                                                title='...'
                                                fetchPriority='low'
                                            />
                                        </div>
                                        <div className='img_area'>
                                            <Image
                                                src={cardImg3}
                                                alt='...'
                                                title='...'
                                                fetchPriority='low'
                                            />
                                        </div>
                                        <div className='img_area'>
                                            <Image
                                                src={cardImg1}
                                                alt='...'
                                                title='...'
                                                fetchPriority='low'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col> 
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Footer