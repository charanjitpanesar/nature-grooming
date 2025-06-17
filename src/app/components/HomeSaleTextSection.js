import React from 'react'
import '../../../public/sass/pages/home_sale_text_section.scss'
import { Col, Container, Row } from 'react-bootstrap'
import imgPerfume from '../../../public/images/girl_perfume.jpg'
import Image from 'next/image'

const HomeSaleTextSection = () => {
    return (
        <>
            <section className='home_sale_text_section'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <div className='layer_area'>
                                    <h4>Upto <span>60%</span> off on all</h4>
                                </div>
                                <div className='left_area'>
                                    <h3>SALE</h3>
                                </div>
                                <div className='right_area'>
                                    <div className='image_area'>
                                        <Image
                                            src={imgPerfume}
                                            alt='...'
                                            title='...'
                                            fetchPriority='low'
                                        />
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

export default HomeSaleTextSection