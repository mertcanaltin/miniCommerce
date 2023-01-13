import React, { useState, useEffect } from 'react'
import { fetchProducts } from '../lib/api';
import ProductItem from '../../components/product';
import Link from 'next/link';

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
            <Link href={`/product/${product.pk}`}>
              <ProductItem  key={product.sku} productId={product.id} productImage={product.productimage_set[0].image} productName={product.name}/>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
