import { Navbar } from "flowbite-react";
import React from "react";

const NavbarComponents = () => {
  return (
    <Navbar className="w-full p-3 bg-black border-gray-200 dark:bg-gray-900">
      <div className="w-full flex items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-900 text-white">
            SemSopanha
          </span>
        </a>

        <div className="hidden md:flex flex-grow justify-center space-x-8">
          <a
            href="#"
            className="text-xl block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-blue-500"
            aria-current="page"
          >
            Home
          </a>
          <a
            href="#"
            className="text-xl block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            About
          </a>
          <a
            href="#"
            className="text-xl block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Education
          </a>
        </div>

        {/* Right Side: User Image */}
        <div className="flex items-center space-x-3 md:space-x-0 rtl:space-x-reverse">
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
  );
};

export default NavbarComponents;
