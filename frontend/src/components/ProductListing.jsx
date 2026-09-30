import React from "react";
import { Link } from "react-router-dom";

const ProductListing = ({ product }) => {
  return (
    <div>
      <Link to= {`/products/${product.id}`}>
      <h2>{product.productName}</h2>
      </Link>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.inventoryCount}</p>
      <p>
        Supplier:
        {product.companyName}
        {product.contactEmail}
        {product.contactPhone}
        {product.supplier.isVerified ? "Yes" : "No"}
      </p>
    </div>
  );
};

export default ProductListing;
