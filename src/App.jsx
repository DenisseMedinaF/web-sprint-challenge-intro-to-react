import React, { useEffect, useState } from 'react';
import { handlers } from './mocks/handlers';
import axios from 'axios';
import Character from './components/Character';

const App = () => {
  const[characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      setCharacters(res.data);
      console.log(res.data)
    })
    .catch(err => {
      console.log('Something went wrong:', err)
    })
  }, [])
  // Try to think through what state you'll need for this app before starting. Then build out the state properties here
  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a side effect in a component, you want to think about which state and/or props it should sync up with, if any.

  return (
    <div>
      <h1>Characters</h1>
      {characters.map(character => {
    return <Character character={character} key={character.name} />
  })}
  </div>
  );
}

export default App;
