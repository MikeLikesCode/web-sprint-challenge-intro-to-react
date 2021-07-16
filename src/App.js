import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Character from './components/Character'
import styled, { keyframes } from 'styled-components'
import './App.css';

const glow = keyframes`
  from{
    text-shadow: 4px 3px 0px #fff, 9px 8px 0px #B62321;
  }
  to{
    text-shadow: 2px 3px 0px  #15509F;
  }
`;

const TitleText = styled.div`
  position:relative;
  z-index: 1;
  display: inline-block;
  text-align:center;
  font-family:'Monoton',sans-serif;
  font-size: 5rem;
  font-weight: 400;
  margin: 2vh 0;
  margin-bottom: 10px;
  letter-spacing: 3px;

  ::before{
    position: absolute;
    z-index: -1;
    inset:0;
    content: 'Star Wars';
    animation: ${glow} 2s ease infinite alternate;
    
  }
`

const CharactersContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [ characterData, setCharacterData ] = useState(null);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then( response => setCharacterData(response.data))
  }, [])

  console.log(characterData)

  if (!characterData) return <h1>Loading</h1>

  return (
    <div className="App">
      <TitleText d>Star Wars</TitleText>
      <h1 className="Header">Characters</h1>
      <CharactersContainer>
      {
        characterData.map((character) => (
          <Character data={character}/>
        ))
      }
      </CharactersContainer>
    </div>
  );
}

export default App;
