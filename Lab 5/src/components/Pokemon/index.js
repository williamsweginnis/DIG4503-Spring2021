import React from 'react';

function Pokemon(props){
   return (<div>
      <h1>{props.pokemon.name}</h1>
      <h2>{props.pokemon.id}</h2>
      <h2>{props.pokemon.type}</h2>
      <img src={props.pokemon.sprites.front_default}/>
      </div>);
 
}

export default Pokemon;