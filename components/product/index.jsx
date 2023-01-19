import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart-slice';

import {project} from '../../lib/helpers';

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className='d-flex'>
        <Link href={`/product/${product.pk}`}>
          <div key={product.pk} className="group relative h-[24rem]">
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
              <Image
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                src={product.productimage_set[0].image}
                alt={project.brandName}
                width={500}
                height={500}
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">                    
                    <span>{product.name}</span>
                </h3>
              </div>
              <p className="text-sm font-medium text-gray-900">{product.price}</p>
            </div>

          </div>
        </Link>
        <button
          onClick={() => dispatch(addToCart(product))}
          data-pk={product.pk}
          className="mt-10 mb-10  flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Sepete ekle
        </button>
      </div>
    </>
  )
}
