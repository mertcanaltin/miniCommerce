import React, { useState, useEffect } from 'react'
import { fetchProducts } from '../lib/api';
import ProductItem from '../../components/product';


export default function List() {

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    fetchProducts().then(response => {
      setProducts(response.products);
    });
  };

  useEffect(() => {
    getProducts();
  },[])


  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">List</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
              <ProductItem  key={product.pk} data-pk={product.pk} product={product}/>
          ))}
        </div>
      </div>
    </div>
  )
}
