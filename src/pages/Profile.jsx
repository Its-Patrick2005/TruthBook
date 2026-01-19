import React, { useState } from "react";
import PostCard from "../components/postCard";
import CreatePost from "../components/createPost";

const Profile = ({ userName, userImage }) => {
  // Profile data - in a real app, this would come from props or API
  const profileData = {
    coverImage: "https://picsum.photos/seed/cover/1200/400",
    profileImage: userImage || "https://i.pravatar.cc/150?img=68",
    userName: userName || "UserName",
    bio: "Welcome to my profile! Sharing moments and connecting with friends.",
    location: "New York, USA",
    joinedDate: "Joined January 2024",
    friendsCount: 428,
    postsCount: 127,
    photosCount: 89,
  };

  const [activeTab, setActiveTab] = useState("posts");
  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([
    "https://picsum.photos/seed/photo1/300/300",
    "https://picsum.photos/seed/photo2/300/300",
    "https://picsum.photos/seed/photo3/300/300",
    "https://picsum.photos/seed/photo4/300/300",
    "https://picsum.photos/seed/photo5/300/300",
    "https://picsum.photos/seed/photo6/300/300",
  ]);

  // Function to handle post creation
  const handleCreatePost = (postText, postImage = null) => {
    const newPost = {
      id: Date.now(),
      userName: profileData.userName,
      userImage: profileData.profileImage,
      postText,
      postImage,
      timestamp: "Just now",
      likes: 0,
      comments: 0,
      shares: 0,
    };
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  // Function to handle post deletion
  const handleDeletePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  // Function to handle like
  const handleLike = (postId, liked) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, likes: liked ? post.likes + 1 : post.likes - 1 }
          : post
      )
    );
  };

  // Function to handle comment
  const handleComment = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, comments: post.comments + 1 } : post
      )
    );
  };

  // Function to handle share
  const handleShare = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, shares: post.shares + 1 } : post
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-20 md:pb-4">
      {/* Cover Photo Section */}
      <div className="relative w-full h-64 md:h-80">
        <img
          src={profileData.coverImage}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <button className="absolute bottom-4 right-4 bg-white text-gray-700 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition font-semibold">
          Edit Cover Photo
        </button>
      </div>

      {/* Profile Info Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 pb-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between md:-mt-16">
            {/* Profile Picture */}
            <div className="relative -mt-16 md:-mt-20 mb-4 md:mb-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white overflow-hidden shadow-lg">
                <img
                  src={profileData.profileImage}
                  alt={profileData.userName}
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute bottom-0 right-0 md:bottom-2 md:right-2 bg-blue-600 text-white rounded-full p-2 shadow-lg hover:bg-blue-700 transition">
                <span className="text-lg">📷</span>
              </button>
            </div>

            {/* Profile Actions */}
            <div className="flex gap-2 mb-4 md:mb-0">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                Add Story
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-semibold">
                Edit Profile
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
                ⋯
              </button>
            </div>
          </div>

          {/* User Info */}
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {profileData.userName}
            </h1>
            <p className="text-gray-600 mb-2">{profileData.bio}</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span>📍 {profileData.location}</span>
              <span>📅 {profileData.joinedDate}</span>
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex gap-6 pb-4 border-b">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">
                {profileData.postsCount}
              </div>
              <div className="text-sm text-gray-500">Posts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">
                {profileData.friendsCount}
              </div>
              <div className="text-sm text-gray-500">Friends</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">
                {profileData.photosCount}
              </div>
              <div className="text-sm text-gray-500">Photos</div>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="flex gap-1 mt-4">
            <button
              onClick={() => setActiveTab("posts")}
              className={`px-4 py-2 font-semibold transition ${
                activeTab === "posts"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`}>
              Posts
            </button>
            <button
              onClick={() => setActiveTab("about")}
              className={`px-4 py-2 font-semibold transition ${
                activeTab === "about"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`}>
              About
            </button>
            <button
              onClick={() => setActiveTab("friends")}
              className={`px-4 py-2 font-semibold transition ${
                activeTab === "friends"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`}>
              Friends
            </button>
            <button
              onClick={() => setActiveTab("photos")}
              className={`px-4 py-2 font-semibold transition ${
                activeTab === "photos"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`}>
              Photos
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-4xl mx-auto px-4 mt-4">
        {activeTab === "posts" && (
          <div>
            {/* Create Post */}
            <CreatePost
              userName={profileData.userName}
              userImage={profileData.profileImage}
              onSubmit={handleCreatePost}
            />

            {/* Posts */}
            {posts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <p className="text-gray-500">No posts yet. Share your first post!</p>
              </div>
            ) : (
              posts.map((post) => (
                <PostCard
                  key={post.id}
                  userName={post.userName}
                  userImage={post.userImage}
                  postText={post.postText}
                  postImage={post.postImage}
                  timestamp={post.timestamp}
                  likes={post.likes}
                  comments={post.comments}
                  shares={post.shares}
                  onLike={(liked) => handleLike(post.id, liked)}
                  onComment={() => handleComment(post.id)}
                  onShare={() => handleShare(post.id)}
                  onDelete={() => handleDeletePost(post.id)}
                />
              ))
            )}
          </div>
        )}

        {activeTab === "about" && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Bio</h3>
                <p className="text-gray-600">{profileData.bio}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Location</h3>
                <p className="text-gray-600">📍 {profileData.location}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Joined</h3>
                <p className="text-gray-600">📅 {profileData.joinedDate}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "friends" && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Friends</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className="text-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition">
                  <img
                    src={`https://i.pravatar.cc/150?img=${index + 10}`}
                    alt={`Friend ${index + 1}`}
                    className="w-full aspect-square rounded-lg object-cover mb-2"
                  />
                  <p className="text-sm font-semibold text-gray-700">
                    Friend {index + 1}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "photos" && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Photos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition">
                  <img
                    src={photo}
                    alt={`Photo ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
