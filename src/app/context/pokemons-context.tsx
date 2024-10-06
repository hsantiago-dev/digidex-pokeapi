'use client'
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonContextProps {
  pokemons: Pokemon[] | null;
}

const PokemonContext = createContext<PokemonContextProps>({ pokemons: null });

export const PokemonProvider = ({ children }: { children: ReactNode }) => {
  const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10000');
        setPokemons(response.data.results);
      } catch (error) {
        console.error('Erro ao buscar os Pokémon:', error);
      }
    };

    if (!pokemons) {
      fetchAllPokemons();
    }
  }, [pokemons]);

  return (
    <PokemonContext.Provider value={{ pokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;