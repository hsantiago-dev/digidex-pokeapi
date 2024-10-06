'use client'
import { useContext } from "react";
import PokemonContext from "./context/pokemons-context";

export default function Page() {

  const { pokemons } = useContext(PokemonContext)
  
  if (!pokemons) {
    return <div>Carregando...</div>;
  }

  return (
    <ul>
      {pokemons.map((pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ul>
  )
}
