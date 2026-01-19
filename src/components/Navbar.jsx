import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <div className="bg-white shadow-md sticky top-0 z-50 px-4 py-3">
        
        {/* Main Navbar - Hidden text on smaller screens */}
        <div className="flex justify-between items-center">
          
          {/* Left Section - Logo & Search */}
          <div className="flex gap-2 md:gap-4 items-center">
            <Link to="/" className="text-blue-600 font-bold text-lg md:text-xl">
              TruthBook
            </Link>
            <h1 className="hidden sm:block text-gray-600 cursor-pointer hover:bg-gray-100 px-3 py-1 rounded">search</h1>
          </div>

          {/* Center Section - Navigation (Hidden on mobile and tablet) */}
          <div className="hidden lg:flex gap-4 items-center">
            <Link
              to="/"
              className={`font-semibold cursor-pointer hover:bg-gray-100 px-4 py-2 rounded ${
                location.pathname === "/" ? "text-blue-600" : "text-gray-600"
              }`}>
              Home
            </Link>
            <h1 className="text-gray-600 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded">Watch</h1>
            <h1 className="text-gray-600 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded">MarketPlace</h1>
            <h1 className="text-gray-600 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded">Groups</h1>
            <h1 className="text-gray-600 cursor-pointer hover:bg-gray-100 px-4 py-2 rounded">Gaming</h1>
          </div>

          {/* Right Section - User Actions */}
          <div className="flex gap-2 md:gap-4 items-center">
            <Link
              to="/profile"
              className={`hidden md:block cursor-pointer hover:bg-gray-100 px-3 py-1 rounded ${
                location.pathname === "/profile" ? "text-blue-600 font-semibold" : "text-gray-600"
              }`}>
              Profile
            </Link>
            <h1 className="hidden md:block text-gray-600 cursor-pointer hover:bg-gray-100 px-3 py-1 rounded">plusIcon</h1>
            <h1 className="hidden md:block text-gray-600 cursor-pointer hover:bg-gray-100 px-3 py-1 rounded">Messages</h1>
            <h1 className="hidden md:block text-gray-600 cursor-pointer hover:bg-gray-100 px-3 py-1 rounded">Notifications</h1>
            
            {/* Mobile Menu Toggle */}
            <h1 
              className="lg:hidden text-gray-600 cursor-pointer hover:bg-gray-100 px-3 py-1 rounded"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? "Close" : "Menu"}
            </h1>
          </div>
        </div>

        {/* Mobile Search (Visible on small screens only) */}
        <div className="sm:hidden mt-3">
          <h1 className="text-gray-600 bg-gray-100 px-3 py-2 rounded">search</h1>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 border-t pt-4 space-y-2">
            <Link
              to="/"
              className={`block font-semibold cursor-pointer hover:bg-gray-100 px-3 py-2 rounded ${
                location.pathname === "/" ? "text-blue-600" : "text-gray-600"
              }`}>
              Home
            </Link>
            <h1 className="text-gray-600 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded">Watch</h1>
            <h1 className="text-gray-600 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded">MarketPlace</h1>
            <h1 className="text-gray-600 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded">Groups</h1>
            <h1 className="text-gray-600 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded">Gaming</h1>
            
            <div className="border-t pt-2 mt-2 md:hidden space-y-2">
              <Link
                to="/profile"
                className={`block cursor-pointer hover:bg-gray-100 px-3 py-2 rounded ${
                  location.pathname === "/profile" ? "text-blue-600 font-semibold" : "text-gray-600"
                }`}>
                Profile
              </Link>
              <h1 className="text-gray-600 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded">plusIcon</h1>
              <h1 className="text-gray-600 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded">Messages</h1>
              <h1 className="text-gray-600 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded">Notifications</h1>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation Bar (Mobile Only) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
        <div className="flex justify-around py-3">
          <Link
            to="/"
            className={`text-sm cursor-pointer ${
              location.pathname === "/" ? "text-blue-600 font-semibold" : "text-gray-600"
            }`}>
            Home
          </Link>
          <h1 className="text-gray-600 text-sm cursor-pointer">Watch</h1>
          <h1 className="text-gray-600 text-sm cursor-pointer">Market</h1>
          <h1 className="text-gray-600 text-sm cursor-pointer">Groups</h1>
          <Link
            to="/profile"
            className={`text-sm cursor-pointer ${
              location.pathname === "/profile" ? "text-blue-600 font-semibold" : "text-gray-600"
            }`}>
            Profile
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;