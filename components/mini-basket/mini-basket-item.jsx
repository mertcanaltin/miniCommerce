import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../../store/cart-slice';
import {project} from '../../pages/lib/helpers';


const MiniBasketItem = ({product}) => {
  const dispatch = useDispatch();

  return (
    <li data-pk={product.pk} key={product.pk} className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image
          width={100}
          height={2}
          src={product.productimage_set[0].image}
          alt={project.brandName}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href={product.href}>{product.name}</a>
            </h3>
            <p className="ml-4">{product.price}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {product.quantity}</p>
          <button onClick={() => dispatch(incrementQuantity(product.pk))}>
            +
          </button>
          <button onClick={() => dispatch(decrementQuantity(product.pk))}>
            -
          </button>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => dispatch(removeFromCart(product.pk))}
            >
              Sil
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default MiniBasketItem;
