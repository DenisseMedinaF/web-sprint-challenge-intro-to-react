// Write your Character component here

import React, { useState } from "react";

function Character(props){
  console.log('Here are the props:', props)
  return(
    <div>
      <h1>{props.character.name}</h1>
      <p>{props.character.height}</p>
      <p>{props.character.mass}</p>
      <p>{props.character.birth_year}</p>
      <p>{props.character.hair_color}</p>
      <p>{props.character.skin_color}</p>
    </div>
  )
}

export default Character;

// Your finished project must include all of the following requirements:

// - [ ] Use the endpoint `[GET] https://swapi.dev/api/people/` (mocked in [msw](https://github.com/mswjs/msw)) to obtain characters.
// - [ ] Set the list of characters into state.
// - [ ] Render your characters to the DOM:

//   1. Build a React component named 'Character' to render an individual character.
//   1. Map over the list in state, and for each character render a Character to the page.
//   1. Each rendered character must display its name in the DOM (e.g. "Luke Skywalker").
//   1. The character's name can't be hard-coded into the HTML. This data must be obtained from the API.
//   1. The components must be styled with **styled-components**.
