import React, { useState, useEffect } from "react";
import axios from "axios";




const API_URL = "https://jsonplaceholder.typicode.com/posts"; 

const Home = ({ products }) => {
  


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Online Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products?.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{product.id}</h2>
            <p className="text-gray-600">{product.title}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;


// Server-side rendering (SSR)
export const getServerSideProps = async () => {
  const response = await axios.get(API_URL);
  return { props: { products: response.data } };
}; 
