import React from "react";
import FeaturedCharacters from "./FeaturedCharacters";

const Home = () => {

  const characters = [
      // Featured Characters Data
    {id: 1, name: "Eren Yeager", image:"eren.jpg" },
    /*{id: 2, name: "Mikasa Ackerman", image: "mikasa.jpg" },*/
    
    // Add the rest of the characters
  ];

  console.log(characters)

  return (
    <div className="home-container">
      <FeaturedCharacters characters={characters} className="featured-characters" />
      <div className="section character-section">
        {/* Character Section Content Goes Here */}
      </div>
      <div className="section episode-section">
        {/* Episode Section Content Goes Here */}
      </div>
      <div className="section quiz-section">
        {/* Quiz Section Content Goes Here */}
      </div>
    </div>
  );
};

export default Home;