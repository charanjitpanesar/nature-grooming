'use client'
import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import '../../../public/sass/pages/header.scss'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/images/logo.png'

const Header = () => {
    let navList = ["Home" , "Men's" , "Women's", "Shop", "Brands"];
    const [isResponsiveHeaderVisible, setIsResponsiveHeaderVisible] = useState(false);

     const toggleResponsiveHeader = () => {
        setIsResponsiveHeaderVisible(!isResponsiveHeaderVisible);
    };

    const handleHeader = () => {
        setIsResponsiveHeaderVisible(false)
    }

    useEffect(() => {
        if (isResponsiveHeaderVisible) {
            document.body.classList.add('scroll_off');
        } else {
            document.body.classList.remove('scroll_off');
        }

        return () => document.body.classList.remove('scroll_off');
    }, [isResponsiveHeaderVisible]);
    return (
        <>
            <section className='upper_header_section'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <Row>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={7} xs={12}>
                                        <div className='left_area'>
                                            <p>Free Shipping On International Order above $120</p>
                                        </div>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={6} sm={5} xs={12}>
                                        <Form>
                                            <div className='right_area'>
                                                <div className='login_area'>
                                                    <div className='link_area'>
                                                        <Link href="/">Login</Link>
                                                    </div>
                                                    <div className='link_area'>
                                                        <Link href="/">register</Link>
                                                    </div>
                                                </div>
                                                <Form.Group className='form-group'controlId='selectLanguage'>
                                                    <Form.Label>Language:</Form.Label>
                                                    <Form.Select aria-label="Default select example">
                                                        <option>Eng</option>
                                                        <option value="1">Rus</option>
                                                        <option value="2">Pbi</option>
                                                    </Form.Select>
                                                </Form.Group><Form.Group className='form-group'controlId='selectCurrency'>
                                                    <Form.Label>Currency:</Form.Label>
                                                    <Form.Select aria-label="Default select example">
                                                        <option>Eur</option>
                                                        <option value="1">USD</option>
                                                        <option value="2">INR</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </div>
                                        </Form>
                                    </Col>
                                </Row>
                            </div>
                        </Col> 
                    </Row>
                </Container>
            </section>
            <section className='lower_header_section'>
                <Link href='/' className='logo_area'>
                    <Image src={logo} alt='...' title='...' fetchPriority='low'/>
                </Link>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <div className='left_area'>
                                    <ul>
                                        {
                                            navList?.map((val,i)=>{
                                            return <li key={i} className={i===0 ? 'active' : ''}>
                                                    <Link href="/">{val}</Link>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className='right_area'>
                                    <ul>
                                        <li>
                                            <Link href="/"><i className="bi bi-search"></i></Link>
                                        </li>
                                        <li>
                                            <Link href="/"><i className="bi bi-heart"></i></Link>
                                        </li>
                                        <li className='cart_icon'>
                                            <Link href="/" data-count="0"><i className="bi bi-bag"></i></Link>
                                        </li>
                                        <li>
                                            <div className='menu_icon  d-block d-lg-none' onClick={toggleResponsiveHeader}>
                                                <i className={`bi ${isResponsiveHeaderVisible ? 'bi-x-lg' : 'bi-list'}`}></i>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col> 
                    </Row>
                </Container>
            </section>


            <div className={`responsive_header ${isResponsiveHeaderVisible ? 'show' : ''}`}>
                <ul>
                    {
                        navList?.map((val,i)=>{
                        return <li key={i} className={i===0 ? 'active' : ''}>
                                <Link onClick={handleHeader} href="/">{val}</Link>
                            </li>
                        })
                    }
                     <li>
                        <Link onClick={handleHeader} href="/">Login</Link>
                    </li>
                    <li>
                        <Link onClick={handleHeader} href="/">Register</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header