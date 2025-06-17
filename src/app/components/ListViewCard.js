import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import '../../../public/sass/pages/list_view_card.scss'

const ListViewCard = ({commonCardDataProps}) => {
    return (
        <>
            <div className='list_view_card'>
                <div className='left_side'>
                    <div className='image_area'>
                        <Image
                            src={commonCardDataProps.img}
                            alt='...'
                            title="..."
                            fetchPriority='low'
                        />
                    </div>
                </div>
                <div className='right_side'>
                    <h3>{commonCardDataProps.title}</h3>
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
                    <div className='price_area'>
                        <div className='actual_price'>$80.00</div>
                        <div className='off_price'>$100.00</div>
                    </div>
                    <p>
                        {commonCardDataProps.description}
                    </p>
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

export default ListViewCard