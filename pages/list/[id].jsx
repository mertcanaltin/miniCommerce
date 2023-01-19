import React, { useState, useEffect } from 'react'
import { getCategoryIDs,getCategoryData } from '../../lib/api';
import ProductItem from '../../components/product';
import Pagination from '../../components/pagination';
import Filter from '../../components/filter';
import { paginate } from '../../components/pagination/helpers/paginate'


export default function List({ products,facets }) {

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  const onPageChange = (page) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setCurrentPage(page);
  };

  const paginatedPosts = paginate(products, currentPage, pageSize);

  return (
    <>
      <div className="bg-white flex container mx-auto">
        <Filter facets={facets} />
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">List</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {paginatedPosts.map((product) => (
              <ProductItem key={product.pk} data-pk={product.pk} product={product} />
            ))}
          </div>
          <Pagination
                items={products.length}
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={onPageChange}
              />
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
    const paths = await getCategoryIDs()
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async ({ params }) => {
    const id = params?.id || 1

    let products, facets;
    await getCategoryData(id).then(response => {
      
      products = response.products
      facets = response.facets
  
    });
  
    return {
      props: { products,facets },
    };
  };