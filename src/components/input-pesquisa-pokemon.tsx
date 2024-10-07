'use client'
import _ from 'lodash';
import { LoaderCircle, Search } from "lucide-react";
import { Input } from "./ui/input";
import { useContext, useEffect, useState } from "react";
import PokemonContext from "../app/context/pokemons-context";
import { Pokemon } from 'pokenode-ts';
import { getPokemonsByNames } from '../app/@core/services/pokemon/get-pokemons';

type InputPesquisaPokemonProps = {
  searchComplete: (pokemons: Pokemon[]) => void
}

export function InputPesquisaPokemon({ searchComplete } : InputPesquisaPokemonProps) {
  const { pokemons } = useContext(PokemonContext)
  
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [ loading, setLoading ] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (event.target.value.length == 0) {
      searchComplete([])
      return
    } else if (event.target.value.length < 2) return
    setLoading(true)
    debouncedSearch(event.target.value);
  };

  const debouncedSearch = _.debounce((value: string) => {
    setSearchTerm(value);
  }, 1000);

  const fetchPokemonsByNames = async () => {
    const arraySearch = filterPokemonsNames(searchTerm)
    const pokemons = await getPokemonsByNames(arraySearch)
    
    searchComplete(pokemons)
    setLoading(false)
  }

  useEffect(() => {
    if (searchTerm.trim() != '')
      fetchPokemonsByNames()
  }, [searchTerm]);

  function filterPokemonsNames(searchText: string): string[] {
    if (!pokemons)
      return []

    const formattedSearchText = searchText.replace(/ /g, '-');
    const regex = new RegExp(formattedSearchText, 'i');
    return pokemons.filter(p => regex.test(p.name)).map(p => p.name);
  }

  return (
    <div className='max-w-72 flex items-center gap-4'>
      <Search />
      <Input 
        placeholder='busque por nome'
        value={inputValue}
        onChange={handleChange}
      />
      { (loading) && <LoaderCircle className='w-auto h-full animate-spin text-primary'/> }
    </div>
  )
}