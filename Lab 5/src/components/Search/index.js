import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import Pokemon from '../Pokemon/index.js';

function Search(){
  const [search, setSearch] = useState("");

  const [pokemon, setPokemon] = useState({name:"N/A", id:"N/A", sprites:{front_default:null}});

  const [loading, setLoading] = useState(false);

  function searchMonsters(){
    Axios.get('https://pokeapi.co/api/v2/pokemon/' + search)

    .then(function (response){
      setPokemon(response.data);
      console.log(response.data);
    })
    .catch(function (error){
      console.log("Error: " + error);
      setPokemon({name:"Not found", id:"N/A", sprites:{front_default:null}});
    });
  }
    return (<div>
    <input type="text" onChange={(event) => {
        setSearch(event.target.value);
      }} />
      <button onClick={() => searchMonsters()}>Search</button>
      {
        <p>Searched: {search}</p>
      }
     <Pokemon pokemon={pokemon} />
        </div>);
}
export default Search;