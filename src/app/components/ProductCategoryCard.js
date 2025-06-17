import Image from 'next/image'
import React from 'react'

const ProductCategoryCard = ({cardDataProps}) => {
    return (
        <>
            <div className='product_card_area'>
                <div className='image_area'>
                    <Image
                        src={cardDataProps.img}
                        alt="..."
                        title="..."
                        fetchPriority="low"
                    />
                </div>
                <h5>{cardDataProps.title}</h5>
            </div>
        </>
    )
}

export default ProductCategoryCard