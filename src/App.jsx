import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./index.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Widget from "./components/Widget";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  // User information (you can get this from authentication later)
  const userName = "UserName";
  const userImage = "https://i.pravatar.cc/150?img=68";

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

  // Function to handle story creation
  const handleCreateStory = (storyImage) => {
    const newStory = {
      id: Date.now(),
      name: userName,
      profileImage: userImage,
      image: storyImage,
    };
    
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
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    userName={userName}
                    userImage={userImage}
                    stories={stories}
                    setStories={setStories}
                    onCreateStory={handleCreateStory}
                    onStoryClick={handleStoryClick}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <Profile
                    userName={userName}
                    userImage={userImage}
                  />
                }
              />
            </Routes>
          </div>

          {/* Right Widget - Fixed position */}
          <Widget />
        </div>
      </div>
    </>
  );
}

export default App;
