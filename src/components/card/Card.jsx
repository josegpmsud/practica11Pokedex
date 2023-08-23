import { useEffect, useState } from "react";
import axios from "axios";

export default function Card({url}) {
  const[poke, setPoke]=useState('');
    let baseURL = url;
  console.log(url)

   useEffect(() => {
    obtenerPokemon();
  }, []);

  const obtenerPokemon = () => {axios.get(baseURL)
  .then(function (response) {
    console.log(response.data);
    setPoke(response.data);
  })
  .catch(function (error) {
    //console.log(error);
  })
  .finally(function () {
  })

};
  return (
    <>
      <h4>{JSON.stringify(poke.name)}</h4>
      <h4>{JSON.stringify(poke.sprites.front_shiny)}</h4>
    </>
  );
}








/*
import { useEffect, useState } from "react";
import axios from "axios";

export default function Card(props) {
  const[poke, setPoke]=useState('');
    let baseURL = props.url;
  console.log(props.url)

   useEffect(() => {
    obtenerPokemon();
  }, []);

  const obtenerPokemon = () => {axios.get(baseURL)
  .then(function (response) {
    console.log(response.data);
    setPoke(response.data);
  })
  .catch(function (error) {
    //console.log(error);
  })
  .finally(function () {
  })

};
  return (
    <>
      <h4>{JSON.stringify(poke.name)}</h4>
      <h4>{JSON.stringify(poke.sprites.front_shiny)}</h4>
    </>
  );
}


*/

/*
<h1>{JSON.stringify(poke.name)}</h1>
<img href={poke.sprites.front_shiny} alt={poke.name}></img>
*/