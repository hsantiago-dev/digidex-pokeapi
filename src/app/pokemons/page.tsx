/* eslint-disable @typescript-eslint/no-inferrable-types */
'use client'
import { getPokemons } from '../@core/services/pokemon/get-pokemons';
import { LabelLogo } from '#/src/components/label-logo';
import { DropdownTheme } from '#/src/components/theme/dropdown-theme';
import { FilterGeracoes } from '#/src/components/filter-geracoes';
import { InputPesquisaPokemon } from '#/src/components/input-pesquisa-pokemon';
import { Pokemon } from 'pokenode-ts';
import { useEffect, useMemo, useState } from 'react';
import { LoaderCircle } from 'lucide-react';
import { CardPokemon } from '#/src/components/card-pokemon';

export default function Page() {
  const [ pokemons, setPokemons ] = useState<Pokemon[]>([])
  const [ pokemonsFiltrados, setPokemonsFiltrados ] = useState<Pokemon[]>([])
  const [ offset, setOffset ] = useState(0);
  const [ listaAcabou, setListaAcabou ] = useState(false)
  const [ loading, setLoading ] = useState(false)
  const limit = 200;

  const fetchAllPokemons = useMemo(
    () => {
      return async () => {
        if (listaAcabou) return

        setLoading(true)
        await getPokemons(offset, limit)
        .then((res) => {
          if (res.length === 0)
            setListaAcabou(true)
          setPokemons([ ...pokemons, ...res])
          setLoading(false)
        })
      }
    }
    , [offset]
  ) 
  
  useEffect(() => {
    fetchAllPokemons()
  }, [offset])

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
      if (!listaAcabou)
        setOffset((prevOffset) => prevOffset + limit);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='px-2 mt-2'>
      <div className="flex justify-between">
        <LabelLogo />
        <DropdownTheme />
      </div>
      <div className='my-6 flex gap-4'>
        <FilterGeracoes />
        <InputPesquisaPokemon searchComplete={setPokemonsFiltrados} />
      </div>
      <div className='my-1 text-sm'>
        {(pokemonsFiltrados.length > 0) ? pokemonsFiltrados.length : pokemons.length} pokémons
      </div>
      <div className='grid grid-cols-12 gap-4'>
        {
          (pokemonsFiltrados.length > 0)
          ? pokemonsFiltrados.map((p) => {
            return <CardPokemon key={p.id} pokemon={p} />
          })
          : pokemons.map((p) => {
            return <CardPokemon key={p.id} pokemon={p} />
          })
        }
        { (!listaAcabou && loading) && (
          <div className='col-span-12 my-2 flex justify-center'>
            <LoaderCircle className='w-20 h-20 animate-spin text-primary' />
          </div>
        ) }
      </div>
    </div>
  )
}