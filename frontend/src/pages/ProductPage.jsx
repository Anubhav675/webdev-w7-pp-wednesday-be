

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`/api/products/${id}`);
                if (!res.ok) throw new Error("Network response was not ok");
                const data = await res.json();
                setProduct(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    const handleGoHome = () => {
        navigate ("/");
    };


    return(
        <div className="product-preview">
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <>
                    <h2>{product.productName}</h2>
                    <p>productName: {product.productName}</p>
                    <p>category: {product.category}</p>
                    <p>description: {product.description}</p>
                    <p>price: {product.price}</p>
                    <p>inventoryCount: {product.inventoryCount}</p>
                    <p>
                        Supplier:
                        {product.companyName}
                        {product.contactEmail}
                        {product.contactPhone}
                        {product.supplier.isVerified ? "Yes" : "No"}
                    </p>
                    <button onClick= {handleGoHome}>Back</button>
                </>
            )}
        </div>
    );
};

export default ProductPage;