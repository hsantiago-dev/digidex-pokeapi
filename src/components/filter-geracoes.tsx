import { useEffect, useMemo, useState } from "react"
import { getGenerations } from "../app/@core/services/pokemon/get-generations"
import { formatarGeracaoPokemon, formatarNomeJogo } from "../lib/regex.util"
import { BadgeJogosGeracao } from "./badge-jogos-geracao"
import { Button } from "./ui/button"
import { Card, CardDescription } from "./ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Generation } from "pokenode-ts"

export function FilterGeracoes() {
  const [ generations, setGenerations ] = useState<Generation[] | null>(null)

  const fetchGenerations = useMemo(
    () => {
      return async () => {
        await getGenerations()
        .then((res) => {
          setGenerations(res)
        })
      }
    }
    , []
  ) 
  
  useEffect(() => {
    fetchGenerations()
  }, [])

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant='secondary'>
          TODAS GERAÇÕES
        </Button>
      </PopoverTrigger>
      <PopoverContent align='start' className='w-[700px]' asChild>
        <div className='grid grid-cols-4 gap-2'>
          {
            (!generations) 
            ? <></>
            : generations.map((g) => {
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
                            // @ts-ignore
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
  )
}