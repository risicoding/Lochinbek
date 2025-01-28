'use client';
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center gap-4  items-center py-2">
          <div className="hidden sm:flex space-x-6">
            <a href="#" className="hover:text-gray-500">
              Lorem
            </a>
            <a href="#" className="hover:text-gray-500">
              Ipsum
            </a>
            <a href="#" className="hover:text-gray-500">
              Dolor
            </a>
            <a href="#" className="hover:text-gray-500">
              Sit Amet
            </a>
            <a className="text-xl">+998 98 98 98</a>
          </div>

          {/* Language Selector */}
          <Select defaultValue="uz">
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="UZ" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="uz">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://flagcdn.com/w40/uz.png"
                      alt="Uzbekistan Flag"
                      className="w-5 h-5"
                    />
                    <span>UZ</span>
                  </div>
                </SelectItem>
                <SelectItem value="en">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://flagcdn.com/w40/gb.png"
                      alt="English Flag"
                      className="w-5 h-5"
                    />
                    <span>EN</span>
                  </div>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex justify-end sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="sm:hidden">
            <div className="px-4 py-2 space-y-2">
              <a href="#" className="block text-gray-700 hover:text-gray-500">
                Lorem
              </a>
              <a href="#" className="block text-gray-700 hover:text-gray-500">
                Ipsum
              </a>
              <a href="#" className="block text-gray-700 hover:text-gray-500">
                Dolor
              </a>
              <a href="#" className="block text-gray-700 hover:text-gray-500">
                Sit Amet
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

