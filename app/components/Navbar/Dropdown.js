import { useState } from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavbarDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Menu
      as="div"
      className="relative inline-block text-left"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <div>
        <Menu.Button className="font-semibold inline-flex w-full justify-center gap-x-1.5 hover:bg-gray-50">
          Our Specialties
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        show={isDropdownOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="">
            <Menu.Item>
              {({ active }) => (
                <a href="/specialties/consulting" className={classNames(active ? 'bg-gray-200 text-gray-900' : 'bg-gray-100 text-gray-700', 'block px-4 py-2 text-sm font-semibold text-center')}>
                  Consulting
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a href="/specialties/big4" className={classNames(active ? 'bg-gray-200 text-gray-900' : 'bg-gray-100 text-gray-700', 'block px-4 py-2 text-sm font-semibold text-center')}>
                  Big4
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a href="/" className={classNames(active ? 'bg-gray-200 text-gray-900' : 'bg-gray-100 text-gray-700', 'block px-4 py-2 text-sm font-semibold text-center')}>
                  Tax
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
