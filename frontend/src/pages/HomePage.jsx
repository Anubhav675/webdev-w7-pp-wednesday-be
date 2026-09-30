import {useState, useEffect} from "react";
import ProductListings from "../components/ProductListings"

const Home = () => {
    const [products, setProducts] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchProducts = async () => {
            console.log("we r here")
            try{
                const response = await fetch ("/api/products");
                
                if(!response.ok){
                    throw new Error("Failed to fetch Products");
                    }
                const data = await response.json();
                console.log(data)
                setIsPending(false);
                setProducts(data);
                setError(null);
            }catch(error){
                setError(error.message);
                setIsPending(false);
            };
           
        }
         fetchProducts();
    },[]);

    return (
        <div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {products && <ProductListings products = {products}/>}
        </div>
    )
}

export default Home;