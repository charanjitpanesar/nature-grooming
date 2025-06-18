'use client'
import React, { useEffect, useState } from 'react'
import { Col, Container, Dropdown, Row } from 'react-bootstrap'
import Sidebar from './Sidebar'
import productImg1 from '../../../public/images/product_img1.jpg'
import productImg2 from '../../../public/images/product_img2.jpg'
import productImg3 from '../../../public/images/product_img3.jpg'
import ProductCard from './ProductCard'
import '../../../public/sass/pages/home_trending.scss'
import Link from 'next/link'
import ListViewCard from './ListViewCard'

const ProductListView = () => {

    const [isSidebarVisible, setIsSidebarVisible] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarVisible(prev => !prev)
    }

      useEffect(() => {
    const menuIcon = document.querySelector('.lower_header_section .menu_icon')
    if (menuIcon) {
      if (isSidebarVisible) {
        menuIcon.classList.add('no_events')
      } else {
        menuIcon.classList.remove('no_events')
      }
    }
  }, [isSidebarVisible]) 
    let commonCardData = [
        {
            img: productImg1,
            title: "Men's Grooming Shaving",
            description: "A premium shaving experience for the modern man. A premium shaving experience for the modern man. A premium shaving experience for the modern man. A premium shaving experience for the modern man."
        }, 
        {
            img: productImg2,
            title: "Men's Grooming Shaving",
            description: "A premium shaving experience for the modern man. A premium shaving experience for the modern man. A premium shaving experience for the modern man. A premium shaving experience for the modern man." 
        }, 
        {
            img: productImg3,
            title: "Men's Grooming Shaving",
            description: "A premium shaving experience for the modern man. A premium shaving experience for the modern man. A premium shaving experience for the modern man. A premium shaving experience for the modern man."
        },
            {
            img: productImg1,
            title: "Men's Grooming Shaving",
            description: "A premium shaving experience for the modern man. A premium shaving experience for the modern man. A premium shaving experience for the modern man. A premium shaving experience for the modern man."
        }, 
        {
            img: productImg2,
            title: "Men's Grooming Shaving",
            description: "A premium shaving experience for the modern man. A premium shaving experience for the modern man. A premium shaving experience for the modern man. A premium shaving experience for the modern man."
        }, 

    ]
    return (
        <>
            <section className='product_listing_section'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <div className={`left_area ${isSidebarVisible ? 'show' : ''}`}>
                                    <Sidebar/>
                                </div>
                                <div className='right_area'>
                                    <div className='upper_area'>
                                        <div className='upper_left'>
                                            <div className='views_buttons'>
                                                <Link href="/products" className='view_btn '>
                                                    <i className="bi bi-grid"></i>
                                                </Link>
                                                <Link href="/product-list" className='view_btn active'>
                                                    <i className="bi bi-list-ul"></i>
                                                </Link>
                                            </div>
                                            <div className='dropdown_area'>
                                                <span>Sort by:</span>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                        Name ( A-Z )
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                        <div className='upper_right upper_left'>
                                            <div className='dropdown_area'>
                                                <span>Show</span>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                        26
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">5</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">10</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                <span>Per page</span>
                                            </div>
                                            <div className='filter_btn btn-primary d-lg-none d-block' onClick={toggleSidebar}>
                                                Filter
                                            </div>
                                        </div>
                                    </div>
                                    <div className='cards_parent'>
                                        {
                                            commonCardData?.map((val, i) => {
                                                return (
                                                    <ListViewCard key={i} commonCardDataProps={val} />
                                                );
                                            })
                                        }
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

export default ProductListView