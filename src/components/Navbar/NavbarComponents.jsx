import { Navbar } from "flowbite-react";
import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import logoImage from "/src/assets/background/SemSopanha-8-30-2024.gif";
const NavbarComponents = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar className="w-full p-3 bg-primary border-gray-200 dark:bg-gray-900">
        <div className="w-full flex items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-900 text-white">
              <img src={logoImage} alt="logo" className="w-32 object-contain" />
            </span>
          </a>

          <div className="hidden md:flex flex-grow justify-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-xl block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-600 md:p-0 md:dark:text-blue-500"
                  : "text-xl block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "text-xl block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-600 md:p-0 md:dark:text-blue-500"
                  : "text-xl block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              }
            >
              Blogs
            </NavLink>
            <NavLink
              to="/education"
              className={({ isActive }) =>
                isActive
                  ? "text-xl block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-600 md:p-0 md:dark:text-blue-500"
                  : "text-xl block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              }
            >
              Education
            </NavLink>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDropdown}
              className="text-white focus:outline-none"
            >
              <HiOutlineMenu className="text-3xl" />
            </button>
          </div>

          {/* Right Side: User Image (hidden on small screens) */}
          <div className="hidden md:flex items-center space-x-3 rtl:space-x-reverse">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-10 h-10 rounded-full"
                src="https://scontent.fpnh7-1.fna.fbcdn.net/v/t39.30808-1/456108562_1216637839533289_8066761936280302388_n.jpg?stp=dst-jpg_s200x200&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEkgdlxqV_LBqknYUKKKAjA1JXQl2qf3EzUldCXap_cTKoF7O4khWtaMxtZHacsCii-XhgUgRnkbkVGp19bdiQF&_nc_ohc=RRwME-tTnlcQ7kNvgGAbc-Y&_nc_ht=scontent.fpnh7-1.fna&oh=00_AYC0qkgxJxjMeTFt9MvxzFduOFhOdTKq3PWwFP9j8LAYuw&oe=66D4CBA3"
                alt="user photo"
              />
            </button>
          </div>
        </div>
      </Navbar>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col items-center bg-gray-800 rounded-lg p-4 space-y-3 transition-all duration-300 ease-in-out">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-xl block py-2 px-3 text-white bg-blue-700 rounded"
                : "text-xl block py-2 px-3 text-white rounded hover:bg-gray-100 hover:text-black  "
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive
                ? "text-xl block py-2 px-3 text-white bg-blue-700 rounded"
                : "text-xl block py-2 px-3 text-white rounded hover:bg-gray-100 hover:text-black"
            }
          >
            Blogs
          </NavLink>
          <NavLink
            to="/education"
            className={({ isActive }) =>
              isActive
                ? "text-xl block py-2 px-3 text-white bg-blue-700 rounded"
                : "text-xl block py-2 px-3 text-white rounded hover:bg-gray-100 hover:text-black"
            }
          >
            Education
          </NavLink>
        </div>
      )}
    </>
  );
};

export default NavbarComponents;
