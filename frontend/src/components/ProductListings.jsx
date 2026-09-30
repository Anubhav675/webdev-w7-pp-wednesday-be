import React from 'react'
import ProductListing from './ProductListing';

const ProductListings = ({products}) => {

    return (
    <div>
        {products.map((product)=> (
             <ProductListing key={product.id} product={product} />
        ))}
        
          </div>
  )
}

export default ProductListings;