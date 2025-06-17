'use client'
import React from 'react'
import { Col, Container, Pagination, Row } from 'react-bootstrap'

const CustomPagination = () => {
  return (
    <>
    <section className='pagination_section'>
        <Container>
            <Row>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                    <div className='parent_area'>
                    <Pagination>
                        <Pagination.Prev><i className="bi bi-arrow-left"></i></Pagination.Prev>
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Next><i className="bi bi-arrow-right"></i></Pagination.Next>
                    </Pagination>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    
    </>
  )
}

export default CustomPagination