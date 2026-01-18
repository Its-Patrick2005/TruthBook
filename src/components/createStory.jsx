import React, { useState } from "react";

const CreateStory = ({ userName, userImage, onSubmit, onClose }) => {
  const [storyImage, setStoryImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Convert file to data URL for preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setStoryImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setStoryImage(null);
    setImagePreview(null);
  };

  const handleSubmitStory = () => {
    if (storyImage) {
      if (onSubmit) {
        onSubmit(storyImage);
      }
      handleClose();
    }
  };

  const handleClose = () => {
    setStoryImage(null);
    setImagePreview(null);
    if (onClose) onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between z-10">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">
            Create Story
          </h2>
          <button
            onClick={handleClose}
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
            </div>
          </div>

          {/* Image Upload Section */}
          {!imagePreview ? (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-3xl">📷</span>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold mb-1">
                      Add Photo to Your Story
                    </p>
                    <p className="text-gray-500 text-sm">
                      Click to upload or drag and drop
                    </p>
                  </div>
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Select Photo
                  </button>
                </div>
              </label>
            </div>
          ) : (
            <div className="relative">
              <img
                src={imagePreview}
                alt="Story preview"
                className="w-full h-auto max-h-96 object-cover rounded-lg"
              />
              <button
                onClick={handleRemoveImage}
                className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition">
                ✕
              </button>
            </div>
          )}

          {/* Instructions */}
          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              Stories are temporary and will disappear after 24 hours.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-white border-t p-4">
          <div className="flex gap-2">
            <button
              onClick={handleClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition font-semibold">
              Cancel
            </button>
            <button
              onClick={handleSubmitStory}
              disabled={!storyImage}
              className={`flex-1 px-4 py-2 rounded-lg font-semibold transition ${
                storyImage
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}>
              Share to Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStory;