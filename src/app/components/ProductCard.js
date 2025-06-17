import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({commonCardDataProps}) => {
    return (
        <>
            <div className='common_card_area'>
                <div className='image_area'>
                    <Image
                        src={commonCardDataProps.img}
                        alt='...'
                        title="..."
                        fetchPriority='low'
                    />
                </div>
                <div className='content_area'>
                    <div className='rating_list'>
                        <ul>
                            <li className='active'>
                                <i className="bi bi-star-fill"></i>
                            </li>
                            <li className='active'>
                                <i className="bi bi-star-fill"></i>
                            </li>
                            <li>
                                <i className="bi bi-star-fill"></i>
                            </li>
                            <li>
                                <i className="bi bi-star-fill"></i>
                            </li>
                            <li>
                                <i className="bi bi-star-fill"></i>
                            </li>
                        </ul>
                    </div>
                    <h6>Men's Grooming Shaving</h6>
                    <div className='price_area'>
                        <div className='actual_price'>$80.00</div>
                        <div className='off_price'>$100.00</div>
                    </div>
                    <div className='lower_content'>
                        <div className='left'>
                            <Link href="/"><i className="bi bi-cart"></i> Add To Card</Link>
                        </div>
                        <div className='right'>
                            <Link href='/'><i className="bi bi-heart"></i></Link>
                            <Link href='/'><i className="bi bi-bar-chart-fill"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard