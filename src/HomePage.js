import React, { useState, useEffect } from 'react';
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
        <div key={character.id}>
          <h2>{character.name}</h2>
          <p>Alias : {character.alias}</p>
          <p>Birthplace: {character.birthplace}</p>
          <p>Gender: {character.gender}</p>
          <h3>Groups:</h3>
          <ul>
            {character.groups.map((group) => (
              <li key={group.name}>
                {group.name}
                {group.sub_groups && (
                  <ul>
                    {group.sub_groups.map((subGroup) => (
                      <li key={subGroup}>{subGroup}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <h3>Height:</h3>
          <li> {character.height}</li>
          <h3>Picture:</h3>
          <li>Picture is here just not viisble yet {/*{character.img}*/}</li>
          <h3>Occupation</h3>
          <li>{character.occupation}</li>
          <h3>Relatives:</h3>
          <ul>
            {character.relatives.map((relative) => (
              <li key={relative.family}>
                {relative.family}
                {relative.members && (
                  <ul>
                    {relative.members.map((member) => (
                      <li key={member}>{member}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <p> Residence:  {character.residence}</p>
          <h3>Roles: </h3>
          <ul>
            {character.roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
          <h3>Species: </h3>
          <ul>
            {character.species.map((species) => (
              <li key={species}>{species}</li>
            ))}
          </ul>
          <h3>Status: </h3>
          <li> {character.status}</li>
          {/* Render other character information */}
        </div>
      ))}
    </div>
  );
};

export default HomePage;
