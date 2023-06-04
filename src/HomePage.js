import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import axios from 'axios';

const HomePage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://api.attackontitanapi.com/characters?perPage=50');
        console.log(response)
        // Set the fetched characters data to the component's state
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Attack on Titan Characters</h1>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};


export default HomePage;
