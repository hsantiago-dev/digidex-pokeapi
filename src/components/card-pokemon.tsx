import { Pokemon } from "pokenode-ts"
import { Card, CardContent, CardTitle } from "./ui/card"
import Image from "next/image"
import { BadgeTipos } from "./badge-tipos"
import { formatarNomePokemon } from "../lib/regex.util"

type CardPokemonsProps = {
  pokemon: Pokemon
}

type Sprites = {
  [key: string]: any; // Estrutura flexível para representar a profundidade do objeto sprites
  front_default?: string;
};

function getLatestSprite(sprites: any): string | undefined {
  const findLatestSprite = (obj: Sprites): string | undefined => {
    if (!obj) return undefined

    if (obj.front_default) {
      return obj.front_default;
    }

    for (const key of Object.keys(obj).sort().reverse()) {
      if (typeof obj[key] === 'object') {
        const result = findLatestSprite(obj[key]);
        if (result && (result.indexOf('.png') > -1)) {
          return result;
        }
      }
    }
  };

  return findLatestSprite(sprites);
}

export function CardPokemon({ pokemon } : CardPokemonsProps) {

  const sprite = getLatestSprite(pokemon.sprites)

  if (!sprite) return <></>

  return (
    <Card className='col-span-3'>
      <CardContent className='flex p-4'>
        {
          (sprite)
          ? <Image 
            src={sprite} 
            alt={pokemon.name}
            width={70}
            height={70}
          />
          : <div className="rounded-xl bg-gray-500 w-16 h-16"></div>
        }
        <div className="ml-2">
          <CardTitle>{formatarNomePokemon(pokemon.name)}</CardTitle>
          <div className='flex flex-wrap gap-2 mt-2'>
            { 
              pokemon.types.map((t) => 
                // @ts-ignore
                <BadgeTipos key={t.type.name} variant={t.type.name}>{t.type.name.toUpperCase()}</BadgeTipos>)
            }
          </div>
        </div>
      </CardContent>
    </Card>
  )
}