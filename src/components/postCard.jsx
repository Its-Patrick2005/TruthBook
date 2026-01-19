import React, { useState, useEffect } from "react";

const PostCard = ({
  userName = "User Name",
  userImage,
  postText,
  postImage,
  timestamp = "2 hours ago",
  likes = 0,
  comments = 0,
  shares = 0,
  onLike,
  onComment,
  onShare,
  onDelete,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(likes);
  const [showDropdown, setShowDropdown] = useState(false);

  // Sync local likes state with prop changes
  useEffect(() => {
    setCurrentLikes(likes);
  }, [likes]);

  const handleLike = () => {
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    setCurrentLikes((prev) => (newLikedState ? prev + 1 : prev - 1));
    if (onLike) onLike(newLikedState);
  };

  const handleComment = () => {
    if (onComment) onComment();
  };

  const handleShare = () => {
    if (onShare) onShare();
  };

  const handleDelete = () => {
    if (onDelete) onDelete();
    setShowDropdown(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 mb-4 w-full min-w-0">
      {/* Post Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 sm:gap-3">
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

          {/* User Info */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-800 text-sm sm:text-base truncate">
              {userName}
            </h3>
            <div className="flex items-center gap-2">
              <p className="text-gray-500 text-xs">{timestamp}</p>
              <span className="text-gray-400">•</span>
              <span className="text-blue-600 text-xs">🌐</span>
            </div>
          </div>
        </div>

        {/* More Options Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="text-gray-500 hover:bg-gray-100 rounded-full p-1 transition">
            <span className="text-xl">⋯</span>
          </button>

          {showDropdown && (
            <>
              {/* Backdrop to close dropdown */}
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowDropdown(false)}
              />
              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-20">
                {onDelete && (
                  <button
                    onClick={handleDelete}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 rounded-t-lg">
                    Delete Post
                  </button>
                )}
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-b-lg">
                  Save Post
                </button>
                <button
                  onClick={() => setShowDropdown(false)}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-b-lg">
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Post Content */}
      {postText && (
        <div className="mb-3">
          <p className="text-gray-800 text-sm sm:text-base whitespace-pre-wrap wrap-break-words">
            {postText}
          </p>
        </div>
      )}

      {/* Post Image */}
      {postImage && (
        <div className="mb-3 rounded-lg overflow-hidden">
          <img
            src={postImage}
            alt="Post content"
            className="w-full h-auto max-h-96 object-cover"
          />
        </div>
      )}

      {/* Post Stats */}
      <div className="flex items-center justify-between text-gray-500 text-sm mb-2 border-b pb-2">
        <div className="flex items-center gap-4">
          {currentLikes > 0 && (
            <div className="flex items-center gap-1">
              <span className="text-blue-600">👍</span>
              <span>{currentLikes}</span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-4">
          {comments > 0 && <span>{comments} comments</span>}
          {shares > 0 && <span>{shares} shares</span>}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-around pt-2 border-t">
        <button
          onClick={handleLike}
          className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition ${
            isLiked
              ? "text-blue-600 hover:bg-blue-50"
              : "text-gray-600 hover:bg-gray-100"
          }`}>
          <span className="text-lg sm:text-xl">
            {isLiked ? "👍" : "👍"}
          </span>
          <span className="text-sm sm:text-base font-medium hidden sm:inline">
            Like
          </span>
        </button>

        <button
          onClick={handleComment}
          className="flex-1 flex items-center justify-center gap-2 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">
          <span className="text-lg sm:text-xl">💬</span>
          <span className="text-sm sm:text-base font-medium hidden sm:inline">
            Comment
          </span>
        </button>

        <button
          onClick={handleShare}
          className="flex-1 flex items-center justify-center gap-2 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">
          <span className="text-lg sm:text-xl">📤</span>
          <span className="text-sm sm:text-base font-medium hidden sm:inline">
            Share
          </span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;
