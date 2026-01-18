import React, { useState } from "react";
import StoryCard from "./StoryCard";
import CreateStory from "./createStory";

const StoryReel = ({ stories = [], userName, userImage, onCreateStory, onStoryClick }) => {
  const [showCreateStoryModal, setShowCreateStoryModal] = useState(false);

  const handleStoryClick = (story) => {
    if (onStoryClick) {
      onStoryClick(story);
    } else {
      console.log("Story clicked:", story);
      // Default behavior - you can add story viewer modal here
    }
  };

  const handleCreateStoryClick = () => {
    setShowCreateStoryModal(true);
  };

  const handleSubmitStory = (storyImage) => {
    if (onCreateStory) {
      onCreateStory(storyImage);
    }
    setShowCreateStoryModal(false);
  };

  const handleCloseModal = () => {
    setShowCreateStoryModal(false);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-2 sm:p-4 mb-4 w-full min-w-0">
        {/* Story Reel Container */}
        <div className="story-reel-container flex gap-2 overflow-x-auto overflow-y-hidden pb-2 scroll-smooth">
          {/* Create Story Card */}
          <div className="flex-shrink-0">
            <StoryCard 
              isCreateStory={true}
              profileImage={userImage || "https://i.pravatar.cc/150?img=68"}
              onClick={handleCreateStoryClick}
            />
          </div>
          
          {/* Story Cards */}
          {stories.map((story) => (
            <div key={story.id} className="flex-shrink-0">
              <StoryCard 
                image={story.image}
                profileImage={story.profileImage}
                name={story.name}
                onClick={() => handleStoryClick(story)}
              />
            </div>
          ))}
        </div>
        
        {/* Optional: Scroll Indicators */}
        <div className="flex justify-center gap-1 mt-2 md:hidden">
          {[...Array(Math.ceil((stories.length + 1) / 3))].map((_, index) => (
            <div 
              key={index}
              className="w-2 h-2 rounded-full bg-gray-300"
            ></div>
          ))}
        </div>
      </div>

      {/* Create Story Modal */}
      {showCreateStoryModal && (
        <CreateStory
          userName={userName}
          userImage={userImage}
          onSubmit={handleSubmitStory}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default StoryReel;