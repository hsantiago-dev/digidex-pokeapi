/* eslint-disable @typescript-eslint/no-inferrable-types */
'use client'
import Image from 'next/image';
import { getPokemons } from '../@core/services/pokemon/get-pokemons';
import { Card, CardContent, CardDescription, CardTitle } from '#/src/components/ui/card';
import { BadgeTipos } from '#/src/components/badge-tipos';
import { LabelLogo } from '#/src/components/label-logo';
import { DropdownTheme } from '#/src/components/theme/dropdown-theme';
import { FilterGeracoes } from '#/src/components/filter-geracoes';
import { InputPesquisaPokemon } from '#/src/components/input-pesquisa-pokemon';
import { Pokemon } from 'pokenode-ts';
import { useEffect, useMemo, useState } from 'react';
import { LoaderCircle } from 'lucide-react';

export default function Page() {
  const [ pokemons, setPokemons ] = useState<Pokemon[]>([])
  const [ offset, setOffset ] = useState(0);
  const [ listaAcabou, setListaAcabou ] = useState(false)
  const [ loading, setLoading ] = useState(false)
  const limit = 200;

  const fetchAllPokemons = useMemo(
    () => {
      return async () => {
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
        <InputPesquisaPokemon />
      </div>
      <div className='grid grid-cols-12 gap-4'>
        {
          pokemons.map((p) => {
            return (
              <Card key={p.id} className='col-span-3'>
                <CardContent className='flex p-4'>
                  <Image 
                    src={p.sprites.versions['generation-v']['black-white'].front_default as string} 
                    alt={p.name}
                    width={70}
                    height={70}
                  />
                  <div>
                    <CardTitle>{p.name.charAt(0).toUpperCase() + p.name.slice(1)}</CardTitle>
                    <div className='flex flex-wrap gap-2 mt-2'>
                      { 
                        p.types.map((t) => 
                          // @ts-ignore
                          <BadgeTipos key={t.type.name} variant={t.type.name}>{t.type.name.toUpperCase()}</BadgeTipos>)
                      }
                    </div>
                    <CardDescription></CardDescription>
                  </div>
                </CardContent>
              </Card>
            )
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