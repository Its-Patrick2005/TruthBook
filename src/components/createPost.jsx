import React, { useState } from "react";

const CreatePost = ({ userName, userImage, onSubmit }) => {
  const [postText, setPostText] = useState("");
  const [postImage, setPostImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handlePostClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setPostText("");
    setPostImage(null);
  };

  const handleSubmitPost = () => {
    if (postText.trim()) {
      // Call the onSubmit callback with post data
      if (onSubmit) {
        onSubmit(postText, postImage);
      }
      handleCloseModal();
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Convert file to data URL for preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPostImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      {/* Create Post Card */}
      <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 mb-4 w-full min-w-0">
        {/* Input Section */}
        <div className="flex items-center gap-2 sm:gap-3 mb-3">
          {/* Profile Picture */}
          <div className="w-10 h-10 bg-blue-600 rounded-full overflow-hidden shrink-0">
            {userImage ? (
              <img
                src={userImage}
                alt={userName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white font-semibold">
                {userName ? userName.charAt(0).toUpperCase() : "U"}
              </div>
            )}
          </div>

          {/* Post Input */}
          <div
            className="flex-1 bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2 sm:py-3 cursor-pointer transition"
            onClick={handlePostClick}>
            <p className="text-gray-500 text-sm sm:text-base">
              What's on your mind, {userName || "User"}?
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="border-t pt-2 sm:pt-3 flex flex-wrap gap-1 sm:gap-2">
          <button className="flex-1 min-w-20 flex items-center justify-center gap-2 py-2 hover:bg-gray-100 rounded-lg transition">
            <span className="text-red-500 text-lg sm:text-xl">📹</span>
            <span className="text-gray-600 text-xs sm:text-sm font-medium hidden xs:inline">
              Live video
            </span>
            <span className="text-gray-600 text-xs sm:text-sm font-medium xs:hidden">
              Live
            </span>
          </button>

          <button className="flex-1 min-w-20 flex items-center justify-center gap-2 py-2 hover:bg-gray-100 rounded-lg transition">
            <span className="text-green-500 text-lg sm:text-xl">🖼️</span>
            <span className="text-gray-600 text-xs sm:text-sm font-medium">
              Photo
            </span>
          </button>

          <button className="flex-1 min-w-20 flex items-center justify-center gap-2 py-2 hover:bg-gray-100 rounded-lg transition">
            <span className="text-yellow-500 text-lg sm:text-xl">😊</span>
            <span className="text-gray-600 text-xs sm:text-sm font-medium hidden sm:inline">
              Feeling
            </span>
            <span className="text-gray-600 text-xs sm:text-sm font-medium sm:hidden">
              Feel
            </span>
          </button>
        </div>
      </div>

      {/* Create Post Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                Create Post
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:bg-gray-100 rounded-full p-2 transition">
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4">
              {/* User Info */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full overflow-hidden">
                  {userImage ? (
                    <img
                      src={userImage}
                      alt={userName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white font-semibold">
                      {userName ? userName.charAt(0).toUpperCase() : "U"}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {userName || "User Name"}
                  </h3>
                  <select className="text-xs bg-gray-100 rounded px-2 py-1 mt-1">
                    <option>Public</option>
                    <option>Friends</option>
                    <option>Only me</option>
                  </select>
                </div>
              </div>

              {/* Text Input */}
              <textarea
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                placeholder={`What's on your mind, ${userName || "User"}?`}
                className="w-full min-h-37.5 text-gray-800 text-base sm:text-lg resize-none outline-none"
                autoFocus
              />

              {/* Add to Post Section */}
              <div className="border border-gray-300 rounded-lg p-3 mt-4">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  Add to your post
                </p>
                <div className="flex gap-2 flex-wrap">
                  <label className="flex-1 min-w-10 p-2 hover:bg-gray-100 rounded-lg transition cursor-pointer text-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <span className="text-green-500 text-xl">🖼️</span>
                  </label>
                  <button className="flex-1 min-w-10 p-2 hover:bg-gray-100 rounded-lg transition">
                    <span className="text-blue-500 text-xl">👤</span>
                  </button>
                  <button className="flex-1 min-w-10 p-2 hover:bg-gray-100 rounded-lg transition">
                    <span className="text-yellow-500 text-xl">😊</span>
                  </button>
                  <button className="flex-1 min-w-10 p-2 hover:bg-gray-100 rounded-lg transition">
                    <span className="text-red-500 text-xl">📍</span>
                  </button>
                  <button className="flex-1 min-w-10 p-2 hover:bg-gray-100 rounded-lg transition">
                    <span className="text-purple-500 text-xl">🎵</span>
                  </button>
                </div>
                
                {/* Image Preview */}
                {postImage && (
                  <div className="mt-4 relative">
                    <img
                      src={postImage}
                      alt="Post preview"
                      className="w-full h-auto max-h-64 object-cover rounded-lg"
                    />
                    <button
                      onClick={() => setPostImage(null)}
                      className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition">
                      ✕
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-white border-t p-4">
              <button
                onClick={handleSubmitPost}
                disabled={!postText.trim()}
                className={`w-full py-2 sm:py-3 rounded-lg font-semibold transition ${
                  postText.trim()
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}>
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatePost;
