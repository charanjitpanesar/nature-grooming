import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../public/sass/pages/products.scss'

const ProductBannerSection = () => {
    return (
        <>
            <section className='product_banner_section'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className='parent_area'>
                                <div className='left_area'>
                                    <h3>Mens&apos; Groom</h3>
                                </div>
                                <div className='right_area'>
                                    <ul>
                                        <li>Home <i className="bi bi-arrow-right"></i></li>
                                        <li>Shop <i className="bi bi-arrow-right"></i></li>
                                        <li>Mens&apos;</li>
                                    </ul>
                                </div>
                            </div>
                        </Col> 
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ProductBannerSection