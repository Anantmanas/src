import { Fragment } from 'react'
import { useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import DropdownButton from './DropdownButton/DropdownButton'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Filters() {
  const menuItems1 = [
    <a key="edit" href="#" className="block px-4 py-2 text-sm">
      Product 1
    </a>,
    <a key="duplicate" href="#" className="block px-4 py-2 text-sm">
      Product 2
    </a>,
    // Add more menu items as needed
  ];
  const menuItems2 = [
    <a key="edit" href="#" className="block px-4 py-2 text-sm">
      Company 1
    </a>,
    <a key="duplicate" href="#" className="block px-4 py-2 text-sm">
      Company 2
    </a>,
    // Add more menu items as needed
  ];
  const menuItems3 = [
    <a key="edit" href="#" className="block px-4 py-2 text-sm">
      Plant 1
    </a>,
    <a key="duplicate" href="#" className="block px-4 py-2 text-sm">
      Plant 2
    </a>,
    // Add more menu items as needed
  ];

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);



  return (
    <div className="bg-gray-200">
      <>
        <div className="grid grid-rows-3 gap-4 p-2 bg-gray-200">
          <div className="grid grid-cols-4 gap-4   ">
            <DropdownButton label="Product Category" menuItems={menuItems1} />
            <DropdownButton label="Company" menuItems={menuItems2} />
            <DropdownButton label="Plant" menuItems={menuItems3} />


          </div>

          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-2 w-full">
              <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden  text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Search</span>
              </button>
              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
              </div>
            </div>

            <button className='bg-white border text-teal-700 border-teal-800 hover:border-teal-400 '>Upload</button>

            <DropdownButton label="Filter" menuItems={menuItems1} />



            <DropdownButton label="Sort by" menuItems={menuItems2} />

          </div>

          <div className="grid grid-cols-6">
            <DropdownButton label="Plant" menuItems={menuItems3} />
            <DropdownButton label="Plant" menuItems={menuItems3} />
            <DropdownButton label="Plant" menuItems={menuItems3} />
            <DropdownButton label="Plant" menuItems={menuItems3} />

          </div>

        </div>
      </>
    </div>

  )
}
