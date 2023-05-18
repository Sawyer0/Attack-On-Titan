import React from "react";

const FeaturedCharacters = () => {
  // Featured Characters Data
  const characters = [
    { id: 1, name: "Eren Yeager", image: "eren.jpg" },
    { id: 2, name: "Mikasa Ackerman", image: "mikasa.jpg" },
    // Add the rest of the characters here
  ];

  return (
    <div>
      <h3>Featured Characters</h3>
      <div className="character-list">
        {characters.map(character => (
          <div key={character.id} className="character-item">
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCharacters;
