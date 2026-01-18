import React, { useState } from "react";

const Sidebar = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {/* Sidebar - Hidden on mobile, visible on tablet and desktop */}
      <div className="hidden md:block w-64 lg:w-72 fixed left-0 top-16 h-screen overflow-y-auto bg-white border-r p-4">
        
        {/* User Profile Section */}
        <div className="mb-4">
          <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <div className="w-10 h-10 bg-blue-600 rounded-full"></div>
            <h1 className="font-semibold text-gray-800">UserName</h1>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="space-y-1 mb-4">
          <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <h1 className="text-gray-700">Watch</h1>
          </div>
          <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <h1 className="text-gray-700">Event</h1>
          </div>
          <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <h1 className="text-gray-700">Memories</h1>
          </div>
        </div>

        {/* See More Toggle */}
        <div 
          className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer mb-2"
          onClick={() => setShowMore(!showMore)}
        >
          <h1 className="text-gray-600 font-medium">{showMore ? "See less" : "See more"}</h1>
        </div>

        {/* Expandable Section */}
        {showMore && (
          <div className="border-t pt-4 space-y-1">
            <h2 className="text-gray-500 text-sm font-semibold px-2 mb-2">Shortcuts</h2>
            <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
              <div className="w-8 h-8 bg-gray-300 rounded"></div>
              <h1 className="text-gray-700 text-sm">Undiscovered Eats</h1>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
              <div className="w-8 h-8 bg-gray-300 rounded"></div>
              <h1 className="text-gray-700 text-sm">Weekend Trips</h1>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
              <div className="w-8 h-8 bg-gray-300 rounded"></div>
              <h1 className="text-gray-700 text-sm">Jasper's Market</h1>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
              <div className="w-8 h-8 bg-gray-300 rounded"></div>
              <h1 className="text-gray-700 text-sm">Red Table Talk Group</h1>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
              <div className="w-8 h-8 bg-gray-300 rounded"></div>
              <h1 className="text-gray-700 text-sm">Best Hidden Hiking Trails</h1>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Sidebar Drawer - Slides in from left */}
      <div className="md:hidden">
        {/* This would typically be triggered by a menu button in the navbar */}
        {/* You can add state to control visibility */}
        <div className="hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
          <div className="fixed left-0 top-0 h-full w-64 bg-white z-50 overflow-y-auto p-4 transform transition-transform">
            
            {/* User Profile Section */}
            <div className="mb-4">
              <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <div className="w-10 h-10 bg-blue-600 rounded-full"></div>
                <h1 className="font-semibold text-gray-800">UserName</h1>
              </div>
            </div>

            {/* Main Navigation */}
            <div className="space-y-1 mb-4">
              <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <h1 className="text-gray-700">Watch</h1>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <h1 className="text-gray-700">Event</h1>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <h1 className="text-gray-700">Memories</h1>
              </div>
            </div>

            {/* See More Toggle */}
            <div 
              className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer mb-2"
              onClick={() => setShowMore(!showMore)}
            >
              <h1 className="text-gray-600 font-medium">{showMore ? "See less" : "See more"}</h1>
            </div>

            {/* Expandable Section */}
            {showMore && (
              <div className="border-t pt-4 space-y-1">
                <h2 className="text-gray-500 text-sm font-semibold px-2 mb-2">Shortcuts</h2>
                <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <div className="w-8 h-8 bg-gray-300 rounded"></div>
                  <h1 className="text-gray-700 text-sm">Undiscovered Eats</h1>
                </div>
                <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <div className="w-8 h-8 bg-gray-300 rounded"></div>
                  <h1 className="text-gray-700 text-sm">Weekend Trips</h1>
                </div>
                <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <div className="w-8 h-8 bg-gray-300 rounded"></div>
                  <h1 className="text-gray-700 text-sm">Jasper's Market</h1>
                </div>
                <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <div className="w-8 h-8 bg-gray-300 rounded"></div>
                  <h1 className="text-gray-700 text-sm">Red Table Talk Group</h1>
                </div>
                <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <div className="w-8 h-8 bg-gray-300 rounded"></div>
                  <h1 className="text-gray-700 text-sm">Best Hidden Hiking Trails</h1>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;