import React from 'react'
import Image from 'next/image';

export default function ProductItem({ productId, productImage, productPrice, productName, productHref }) {
  return (
    <div key={productId} className="group relative">
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <Image
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          src={productImage}
          alt="tefal"
          width={500}
          height={500}
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={productHref}>
              <span aria-hidden="true" className="absolute inset-0" />
              {productName}
            </a>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">{productPrice}</p>
      </div>
    </div>
  )
}
