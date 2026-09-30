
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const EditProductPage = ({product}) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [productName, setProductName] = useState ("");
    const [category, setCategory] = useState ("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState ("");
    const [inventoryCount, setInventoryCount] = useState ("");
    const [companyName, setCompanyName] = useState("");
    const [contactEmail, setContactEmail ] = useState ("");
    const [contactPhone, setContactPhone] = useState ("");
    const [isVerified, setIsVerified] = useState ("true");

    useEffect (() => {
        const fetchBook = async () => {
            try {
                const response = await fetch (`/api/products/${id}`);
                const data = await response.json();

                setProductName(data.productName);
                setCategory(data.category);
                setDescription(data.description);
                setPrice(data.price);
                setInventoryCount(data.inventoryCount);
                setCompanyName(data.supplier.name);
                setContactEmail(data.supplier.contactEmail);
                setContactPhone(data.supplier.contactPhone);
                setIsVerified(data.supplier.isVerified ? "Yes" : "No");

            } catch (error) {
                console.error (error);

            }
        };
        fetchBook();
    }, [id]);

    const updateProduct = async (product) => {
        try {
            const res = await fetch (`/api/products/${id}`, {
                method : "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            });

            if (!res.ok) {
                throw new Error ("Failed to update product");
            }
        } catch (error) {
            console.error (error);
            return false;
        }
        return true;
    };

    const submitForm = async (e) => {
        e.preventDefault ();

        const updatedProduct = {
            productName,
            category,
            description,
            price,
            inventoryCount,
            supplier: {
                name: companyName,
                contactEmail,
                contactPhone,
                isVerified: isVerified === "true",
        },
    };
    await updateProduct(updatedProduct);
    navigate (`/products/${id}`);
};

    
return (
    <div>
        <h2>Update Product</h2>
        <form onSubmit = {submitForm}>
                <label>Product Name: </label>
                <input
                    type = "text"
                    value = {productName}
                    onChange = {(e) => setProductName(e.target.value)}
                    />

                <label>Category: </label>
                <input
                    type = "text"
                    value = {category}
                    onChange = {(e) => setCategory(e.target.value)}
                    />

                <label>Description: </label>
                <input
                    type = "text"
                    value = {description}
                    onChange = {(e) => setDescription(e.target.value)}
                    />

                <label>Price: </label>
                <input
                    type = "text"
                    value = {price}
                    onChange = {(e) => setPrice(e.target.value)}
                    />

                <label>Inventory Count: </label>
                <input
                    type = "number"
                    value = {inventoryCount}
                    onChange = {(e) => setInventoryCount(e.target.value)}
                    />
                
                <label>Compnay Name: </label>
                <input
                    type = "text"
                    value = {companyName}
                    onChange = {(e) => setCompanyName(e.target.value)}
                    />

                <label>Contact Email: </label>
                <input
                    type = "email"
                    value = {contactEmail}
                    onChange = {(e) => setContactEmail(e.target.value)}
                    />

                <label>Contact Phone: </label>
                <input
                    type = "text"
                    value = {contactPhone}
                    onChange = {(e) => setContactPhone(e.target.value)}
                    />
                    
                <label>Verification : </label>
                <select value = {isVerified} onChange = {(e) => setIsVerified (e.target.value)}>
                    <option value = "true">Yes</option>
                    <option value = "false">No</option>
                    
                </select>

                <button>Update Product</button>

            </form>
    
    </div>
)
}

export default EditProductPage;