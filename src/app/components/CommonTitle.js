import Link from 'next/link'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

const CommonTitle = ({titleDataProps}) => {
    const heading = titleDataProps.heading || "";
    const [firstWord, ...restWords] = heading.split(" ");
    const rest = restWords.join(" ");
    
    return (
        <>
            <div className='common_upper_title'>
                <Row>
                    <Col xxl={9} xl={9} lg={9} md={9} sm={9} xs={12}>
                        <div className='left_area'>
                            <h3><span>{firstWord}</span> {rest}</h3>
                        </div>
                    </Col>
                    <Col xxl={3} xl={3} lg={3} md={3} sm={3} xs={12}>
                        <div className='right_area'>
                            <div className='button_area'>
                                <Link href='/' className="btn-primary">See All</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default CommonTitle