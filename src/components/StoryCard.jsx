import React from "react";

const StoryCard = ({
  image,
  profileImage,
  name,
  isCreateStory = false,
  onClick,
}) => {
  if (isCreateStory) {
    return (
      <div
        className="relative w-28 h-48 sm:w-32 sm:h-52 bg-white rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-md"
        onClick={onClick}>
        {/* Background Image */}
        <div className="h-3/5 bg-linear-to-b from-gray-200 to-gray-100">
          <img
            src={profileImage || "https://via.placeholder.com/150"}
            alt="Your story"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Plus Icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center border-4 border-white z-10">
          <span className="text-white text-2xl font-bold">+</span>
        </div>

        {/* Text Section */}
        <div className="h-2/5 flex items-center justify-center bg-white">
          <h3 className="text-xs sm:text-sm font-semibold text-gray-800 px-2 text-center">
            Create Story
          </h3>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-28 h-48 sm:w-32 sm:h-52 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-md"
      onClick={onClick}>
      {/* Background Image */}
      <img
        src={image || "https://via.placeholder.com/150x200"}
        alt={`${name}'s story`}
        className="w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/60"></div>

      {/* Profile Picture */}
      <div className="absolute top-3 left-3 w-10 h-10 rounded-full border-4 border-blue-600 overflow-hidden">
        <img
          src={profileImage || "https://via.placeholder.com/40"}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <div className="absolute bottom-3 left-3 right-3">
        <h3 className="text-white text-xs sm:text-sm font-semibold drop-shadow-lg truncate">
          {name || "User Name"}
        </h3>
      </div>
    </div>
  );
};

export default StoryCard;
