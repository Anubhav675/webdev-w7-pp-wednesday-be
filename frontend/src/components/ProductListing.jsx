import React from "react";

const ProductListing = ({ product }) => {
  return (
    <div>
      <h2>{product.productName}</h2>
      <p>{product.category}</p>
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
