import React, { useState } from "react";
import StoryReel from "../components/StoryReel";
import CreatePost from "../components/createPost";
import PostCard from "../components/postCard";

const Home = ({ userName, userImage, stories, setStories, onCreateStory, onStoryClick }) => {
  // State to manage posts
  const [posts, setPosts] = useState([]);

  // Function to handle post creation
  const handleCreatePost = (postText, postImage = null) => {
    const newPost = {
      id: Date.now(),
      userName,
      userImage,
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
    <>
      <div className="w-full max-w-full overflow-hidden">
        <StoryReel 
          stories={stories}
          userName={userName}
          userImage={userImage}
          onCreateStory={onCreateStory}
          onStoryClick={onStoryClick}
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
    </>
  );
};

export default Home;
