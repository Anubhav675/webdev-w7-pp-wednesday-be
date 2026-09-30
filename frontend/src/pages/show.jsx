
import React from 'react'
import{useState, useEffect} from 'react';
import { useSearchParams } from 'react-router-dom'

const show = () => {
  const[render, setrender] = useState(null)
  useEffect(()=>{
    const fetchBooks = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) {
          throw new Error("could not fetch the data for that resource");
        }
        const data = await res.json();
        console.log(data);
        
        // setIsPending(false);
        setrender(data);
        console.log(render.productName,"This is the product name")
        // setError(null);
      } catch (err) {
        // setIsPending(false);
        // setError(err.message);
        console.log("error")
      }
    };
    fetchBooks();
  },[])  
  
  return (
    <div>Test
    {render && 
      <div>
      {render.productName}
      </div>
    }
    </div>
  )
}

export default show