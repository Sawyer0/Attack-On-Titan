import React from "react";

const FeaturedCharacters = ({characters}) => {
  return (
    <div>
      <h3>Featured Characters</h3>
      <div className="character-list">
        {characters.map((character) => (
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
