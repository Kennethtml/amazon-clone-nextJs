import React from 'react';
import Image from 'next/image';
// import{ MenuIcon,SearchIcon,ShoppingCartIcon} from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon, SearchIcon,ShoppingCartIcon, Bars3Icon} from "@heroicons/react/24/solid";

function Header() {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit={"contain"}
            className="cursor-pointer"
          />
        </div>
        <div className="hidden sm:flex items-center h-10 bg-yellow-400 rounded-md flex-grow cursor-pointer">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          {/* <SearchIcon/> */}
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>
        <div className="text-white flex items-center text-xs  space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>hello Sunny</p>
            <p className="font-extrabold md:text-small">Account & lists</p>
          </div>
          <div className="link ">
            <p>Returns</p>
            <p className="font-extrabold md:text-small">& orders</p>
          </div>
          <div className="link relative flex items-center  ">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-small mt-2 ">
              basket
            </p>
          </div>
        </div>
      </div>
      <div className="flex  space-x-3 p-2 pl-6 items-center bg-amazon_blue-light text-white text-sm">
        <p className="link flex  items-center">
          <Bars3Icon className="h-6 mr-1" />
          All
        </p>
        <p>prime video</p>
        <p className="link">Amazon business</p>
        <p className="link">Todays Deal</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food and grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy again</p>
        <p className="link hidden lg:inline-flex">Shopper tool kit</p>
        <p className="link hidden lg:inline-flex">Health and personal</p>
      </div>
    </header>
  );
}

export default Header