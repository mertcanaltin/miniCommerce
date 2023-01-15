import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { useSelector } from 'react-redux';
import MiniBasket from '../mini-basket';


export default function Navbar() {
  const [open, setOpen] = useState(true)

  const cart = useSelector((state) => state.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };
  return (
    <>
      <Popover className="relative bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
                <span>miniCommerce</span>
            </div>
            <button className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                onClick={() => setOpen(true)}
              >
                Sepet <span>({getItemsCount()})</span>
              </button>
          </div>
        </div>
      </Popover>

      <MiniBasket action={open} />
    </>
  )
}
