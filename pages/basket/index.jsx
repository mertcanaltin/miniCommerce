import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../../store/cart-slice';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div className="mt-8 m-auto w-[70rem]">
      <div className="flow-root">
        {cart.length === 0 ? (
          <h1 className='m-10'>Sepetinizde ürün yok !</h1>
        ) : (
          <>
            <ul role="list" className="-my-6 divide-y divide-gray-200 ">
              {cart.map((product) => (
                <li data-pk={product.pk} key={product.pk} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <Image
                      src={product.productimage_set[0].image}
                      alt={product.imageAlt}
                      width={200}
                      height={200}
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
                      <p className="text-gray-500">Adet {product.quantity}</p>
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
              ))}
            </ul>
            <div className='mt-[4rem] text-right'>
              <h2>Toplam:  {getTotalPrice().toFixed(2)} TL</h2>
            </div>

            <div className='mt-30'>
              <button
                className="mt-10 mb-10  flex w-80 m-auto items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sepeti onayla
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
