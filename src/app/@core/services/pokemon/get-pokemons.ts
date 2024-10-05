import { NamedAPIResourceList, Pokemon, PokemonClient } from "pokenode-ts";

const api = new PokemonClient()

export async function getPokemons(): Promise<Pokemon[]> {

  const apiResponse = await api.listPokemons(0, 50)
  .catch((e) => {
    console.error(e)
    return []
  })

  const resourceList = apiResponse as NamedAPIResourceList

  return await Promise.all(
    resourceList.results.map(async (p) => {
      const id = getIdFromUrl(p.url)
      return await api.getPokemonById(id)
    })
  )
}

function getIdFromUrl(url: string): number {
  const regex = /\/(\d+)\/$/;
  const match = url.match(regex);
  if (match) {
    return parseInt(match[1]);
  }
  
  throw Error('Não foi possível extrair o ID da URL Pokemon')
}