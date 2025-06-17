import React from 'react'
import CommonTitle from './CommonTitle'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../public/sass/pages/home_trending.scss'
import ProductCard from './ProductCard'
import productImg1 from '../../../public/images/product_img1.jpg'
import productImg2 from '../../../public/images/product_img2.jpg'
import productImg3 from '../../../public/images/product_img3.jpg'
import modalImg from '../../../public/images/modal_img.jpg'
import Image from 'next/image'

const HomeTrending = ({ heading = "trending products" }) => {

    let titleData = 
    {
        heading: heading
    }

    let commonCardData = [
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
    return (
        <>
            <section className='trending_section'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <CommonTitle titleDataProps={titleData}/>
                                <div className='cards_parent'>
                                    <Row>
                                        {
                                            commonCardData?.map((val, i) => {
                                                return (
                                                <React.Fragment key={i}>
                                                    <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                                    <ProductCard commonCardDataProps={val} />
                                                    </Col>
                                                </React.Fragment>
                                                );
                                            })
                                        }

                                    </Row>
                                </div>
                            </div>
                        </Col> 
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default HomeTrending

