/* eslint-disable @typescript-eslint/no-inferrable-types */
import Image from 'next/image';
import { getPokemons } from '../@core/services/pokemon/get-pokemons';
import { Card, CardContent, CardDescription, CardTitle } from '#/src/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '#/src/components/ui/popover';
import { Button } from '#/src/components/ui/button';
import { getGenerations } from '../@core/services/pokemon/get-generations';
import { formatarGeracaoPokemon, formatarNomeJogo } from '#/src/lib/regex.util';
import { BadgeJogosGeracao } from '#/src/components/badge-jogos-geracao';
import { BadgeTipos } from '#/src/components/badge-tipos';
import { Generation, Pokemon } from 'pokenode-ts';
import { Input } from '#/src/components/ui/input';
import { Search } from 'lucide-react';

export default async function Page() {

  const pokemons = await getPokemons()
  // const pokemons: Pokemon[] = []
  const generations = await getGenerations()
  // const generations: Generation[] = []

  return (
    <div className='px-2'>
      <div className='my-6 flex gap-4'>
        <Popover>
          <PopoverTrigger>
            <Button variant='secondary'>
              TODAS GERAÇÕES
            </Button>
          </PopoverTrigger>
          <PopoverContent align='start' className='w-[700px]' asChild>
            <div className='grid grid-cols-4 gap-2'>
              {
                generations.map((g) => {
                  return (
                    <Card key={g.id} className='col-span-2 p-2'>
                        <CardDescription>
                          {formatarGeracaoPokemon(g.name)}
                        </CardDescription>
                        <div className='flex flex-wrap my-2 gap-2'>
                          {
                            g.version_groups.map((v) => {
                              return <BadgeJogosGeracao 
                                key={v.name}
                                variant={v.name}
                              >{formatarNomeJogo(v.name)}</BadgeJogosGeracao>
                            })
                          }
                        </div>
                    </Card>
                  )
                })
              }
            </div>
          </PopoverContent>
        </Popover>
        <div className='max-w-72 flex items-center gap-4'>
          <Search />
          <Input placeholder='busque por nome'/>
        </div>
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
                        p.types.map((t) => <BadgeTipos key={t.type.name} variant={t.type.name}>{t.type.name.toUpperCase()}</BadgeTipos>)
                      }
                    </div>
                    <CardDescription></CardDescription>
                  </div>
                </CardContent>
              </Card>
            )
          })
        }
      </div>
    </div>
  )
}