import React from 'react'
import ProductBannerSection from '../components/ProductBannerSection'
import ProductListing from '../components/ProductListing'
import CustomPagination from '../components/CustomPagination'

const page = () => {
    return (
        <>
            <ProductBannerSection />
            <ProductListing />
            <CustomPagination />
        </>
    )
}

export default page