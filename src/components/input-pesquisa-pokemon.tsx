'use client'
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useContext } from "react";
import PokemonContext from "../app/context/pokemons-context";

export function InputPesquisaPokemon() {

  const { pokemons } = useContext(PokemonContext)

  function filterPokemonsByName(searchText: string): any[] {
    if (!pokemons)
      return []

    const formattedSearchText = searchText.replace(/ /g, '-');
    const regex = new RegExp(formattedSearchText, 'i');
    return pokemons.filter(pokemon => regex.test(pokemon.name));
  }

  return (
    <div className='max-w-72 flex items-center gap-4'>
      <Search />
      <Input 
        placeholder='busque por nome'
        onChange={(e) => {
          const pokemons = filterPokemonsByName(e.target.value)
          console.log(pokemons)
        }}
      />
    </div>
  )
}