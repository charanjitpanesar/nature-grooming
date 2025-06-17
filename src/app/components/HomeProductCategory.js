import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CommonTitle from './CommonTitle'
import '../../../public/sass/pages/home_product_categories.scss'
import cardImg1 from '../../../public/images/category_img1.jpg'
import cardImg2 from '../../../public/images/category_img2.jpg'
import cardImg3 from '../../../public/images/category_img3.jpg'
import cardImg4 from '../../../public/images/category_img4.jpg'
import cardImg5 from '../../../public/images/category_img5.jpg'
import salesImg1 from '../../../public/images/sales_img1.jpg'
import salesImg2 from '../../../public/images/sales_img2.jpg'
import salesImg3 from '../../../public/images/sales_img3.jpg'
import ProductCategoryCard from './ProductCategoryCard'
import Image from 'next/image'

const HomeProductCategory = () => {
    let titleData = 
    {
        heading:"product categories"
    }

    let cardData = [
        {
            img: cardImg1,
            title: "Hair Mask"
        },
        {
            img: cardImg2,
            title: "Facewah"
        },
        {
            img: cardImg3,
            title: "Men's wash"
        },
        {
            img: cardImg4,
            title: "Men's Grooming"
        },
        {
            img: cardImg5,
            title: "Shaving"
        },
    ]
    
    return (
        <>
            <section className='product_category_section'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <CommonTitle titleDataProps={titleData}/>
                                <div className='cards_parent'>
                                    {
                                        cardData?.map((val,i)=>{
                                            return <ProductCategoryCard key={i} cardDataProps={val}/>
                                        })
                                    }
                                </div>
                            </div>
                        </Col> 
                    </Row>
                </Container>
            </section>
            <section className='sales_section'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <Row>
                                    <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                        <div className='image_area'>
                                            <Image
                                                src={salesImg1}
                                                alt="..."
                                                title="..."
                                                fetchPriority="low"
                                            />
                                        </div>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                        <div className='image_area'>
                                            <Image
                                                src={salesImg2}
                                                alt="..."
                                                title="..."
                                                fetchPriority="low"
                                            />
                                        </div>
                                    </Col>
                                    <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                        <div className='image_area'>
                                            <Image
                                                src={salesImg3}
                                                alt="..."
                                                title="..."
                                                fetchPriority="low"
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col> 
                    </Row>
                </Container>
            </section>
        </>

        
    )
}

export default HomeProductCategory