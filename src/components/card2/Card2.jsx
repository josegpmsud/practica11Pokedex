import { useEffect, useState } from "react";
import axios from "axios";
import "./Card2.css"

function Card2(nombrePokemon2) {
    const [pokemon,setPokemon] = useState();

    console.log(nombrePokemon2.nombrePokemon2)

    useEffect(() => {axios.get('https://pokeapi.co/api/v2/pokemon/'+nombrePokemon2.nombrePokemon2)
    .then(function (response) {
      console.log(response.data);
      setPokemon(response.data);
    })
    .catch(function (error) {
      console.log(error);
      alert("Ingresa un nombre o un id correcto por favor")
    })
    .finally(function () {
    })
}, []);

  return (
  <>
        { pokemon &&
        <div className="card">
          <section>

            <h3>{pokemon.name}</h3>
            <h2>{pokemon.id}</h2>
            

            </section>
            <img src={pokemon.sprites.front_shiny}></img>
        </div>
      }
  </>
  )
}

export default Card2