import React from 'react'
import ProductGallery from '../../components/ui/product/ProductGallery'
import ProductSummary from '../../components/ui/product/ProductSummary'
export default function ProductTop() {
    return (
        <div className="row-fb">
            <div className="col-fb-6">
                <ProductGallery />
            </div>
            <div className="col-fb-6">
                <ProductSummary />
            </div>
        </div>
    )
}
