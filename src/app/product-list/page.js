import React from 'react'
import ProductBannerSection from '../components/ProductBannerSection'
import CustomPagination from '../components/CustomPagination'
import ProductListView from '../components/ProductListView'

const page = () => {
    return (
        <>
            <ProductBannerSection />
            <ProductListView />
            <CustomPagination />
        </>
    )
}

export default page