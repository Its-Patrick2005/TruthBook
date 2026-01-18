import React, { useState } from "react";

import "./index.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Widget from "./components/Widget";
import StoryReel from "./components/StoryReel";
import CreatePost from "./components/createPost";
import PostCard from "./components/postCard";

function App() {
  // User information (you can get this from authentication later)
  const userName = "UserName";
  const userImage = "https://i.pravatar.cc/150?img=68";

  // State to manage posts
  const [posts, setPosts] = useState([]);

  // State to manage stories - initial sample data
  const [stories, setStories] = useState([
    {
      id: 1,
      name: "Tom Russo",
      profileImage: "https://i.pravatar.cc/150?img=12",
      image: "https://picsum.photos/seed/story1/200/300"
    },
    {
      id: 2,
      name: "Betty Chen",
      profileImage: "https://i.pravatar.cc/150?img=45",
      image: "https://picsum.photos/seed/story2/200/300"
    },
    {
      id: 3,
      name: "Dennis Han",
      profileImage: "https://i.pravatar.cc/150?img=33",
      image: "https://picsum.photos/seed/story3/200/300"
    },
    {
      id: 4,
      name: "Cynthia Lopez",
      profileImage: "https://i.pravatar.cc/150?img=25",
      image: "https://picsum.photos/seed/story4/200/300"
    },
    {
      id: 5,
      name: "Eric Jones",
      profileImage: "https://i.pravatar.cc/150?img=60",
      image: "https://picsum.photos/seed/story5/200/300"
    },
    {
      id: 6,
      name: "Sarah Miller",
      profileImage: "https://i.pravatar.cc/150?img=28",
      image: "https://picsum.photos/seed/story6/200/300"
    }
  ]);

  // Function to handle post creation
  const handleCreatePost = (postText, postImage = null) => {
    const newPost = {
      id: Date.now(), // Simple ID generation (use UUID in production)
      userName,
      userImage,
      postText,
      postImage,
      timestamp: "Just now",
      likes: 0,
      comments: 0,
      shares: 0,
    };
    
    // Add new post to the beginning of the array
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

  // Function to handle story creation
  const handleCreateStory = (storyImage) => {
    const newStory = {
      id: Date.now(), // Simple ID generation (use UUID in production)
      name: userName,
      profileImage: userImage,
      image: storyImage,
    };
    
    // Add new story to the beginning of the array (before other users' stories, after create story card)
    setStories((prevStories) => [newStory, ...prevStories]);
  };

  // Function to handle story click
  const handleStoryClick = (story) => {
    console.log("Story clicked:", story);
    // You can add story viewer modal here
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />

        {/* Main Content Container */}
        <div className="flex pt-4">
          {/* Left Sidebar - Fixed position */}
          <Sidebar />

          {/* Center Feed - Takes remaining space between sidebar and widget */}
          <div className="flex-1 min-w-0 px-2 sm:px-4 md:ml-64 lg:ml-72 lg:mr-80 xl:mr-96">
            <div className="w-full max-w-full overflow-hidden">
              <StoryReel 
                stories={stories}
                userName={userName}
                userImage={userImage}
                onCreateStory={handleCreateStory}
                onStoryClick={handleStoryClick}
              />
            </div>
            
            {/* Create Post Component */}
            <CreatePost 
              userName={userName}
              userImage={userImage}
              onSubmit={handleCreatePost}
            />
            
            {/* Display Posts */}
            {posts.map((post) => (
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
            ))}
          </div>

          {/* Right Widget - Fixed position */}
          <Widget />
        </div>
      </div>
    </>
  );
}

export default App;
