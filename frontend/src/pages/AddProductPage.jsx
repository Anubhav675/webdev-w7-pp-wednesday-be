
import { useState } from "react";

import { useNavigate } from "react-router-dom";

const AddProductPage = () => {
    const [productName, setProductName] = useState ("");
    const [category, setCategory] = useState ("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState ("");
    const [inventoryCount, setInventoryCount] = useState ("");
    const [companyName, setCompanyName] = useState("");
    const [contactEmail, setContactEmail ] = useState ("");
    const [contactPhone, setContactPhone] = useState ("");
    const [isVerified, setIsVerified] = useState ("true");

    const navigate = useNavigate ();

    const addProduct = async (newProduct) => {
        try {
            const response = await fetch ("/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProduct),
            });

            if (!response.ok) {
                throw new Error ("Failed to add product");
            }

        } catch (error ) {
            console.error (error);
            return false;
        }
        return true;
    };

    const submitForm = (e) => {
        e.preventDefault();

        const newProduct = {
            productName,
            category,
            description,
            price,
            inventoryCount,
            supplier: {
                name: companyName,
                contactEmail,
                contactPhone,
                isVerified,
            },
        };

        addProduct (newProduct);
        console.log(newProduct);

        navigate ("/");
    };

    return (

        <div>
            <h2>Add Product Page</h2>

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

                <button>Add Product</button>

            </form>
        </div>

    );
}

export default AddProductPage;
