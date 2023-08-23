import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import Card from "./components/card/Card";

const baseURL = "https://pokeapi.co/api/v2/pokemon";

export default function App() {
  const [pokemon,setPokemon] = useState();
  const [nombrePokemon, setNombrePokemon] = useState('');

  const obtenerPokemon = () => {axios.get('https://pokeapi.co/api/v2/pokemon/'+nombrePokemon)
      .then(function (response) {
        console.log(response.data);
        setPokemon(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      })
};

  const [poke, setPoke] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPoke(response.data.results);
      console.log(response.data.results);
    });
  }, []);

  if (!poke) return null;

  return (


    <>
    <input placeholder='Ingrese el Nombre del pokemon' onChange={(e)=>setNombrePokemon(e.target.value)}></input>
    <button onClick={obtenerPokemon}>Buscar</button>
    { pokemon &&
      <>
        <h1>{pokemon.name}</h1>
        <h2>{pokemon.id}</h2>
        <img src={pokemon.sprites.front_shiny}></img>
      </>
    }

      {poke.map((e)=>{
      return (
      <>
        <h1>{e.name}</h1>
        <h1>{e.url}</h1>

      </>)
    })}
    </>
  );
}



























/*
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import Card from "./components/card/Card";

const baseURL = "https://pokeapi.co/api/v2/pokemon";

export default function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data.results);
      console.log(response.data.results);
    });
  }, []);

  if (!post) return null;

  return (
    <>
      {post.map((e)=>{
      return (
      <>
        <Card
          url={e.url}>
        </Card>
      </>)
    })}
    </>
  );
}
*/







/*
import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

*/






/*
import { useState, useEffect } from 'react'
import axios from 'axios'
const datos=[]

function App() {

  axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(function (response) {
        console.log(response.data.results);

      })
      .catch(function (error) {
        console.log(error);
        if(error){

        }
      })
      .finally(function () {
      })


  return (
    <>
      <h1>pokemones</h1>
      {

      }
    </>
  )
}

export default App

*/