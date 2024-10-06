import { NamedAPIResourceList, Pokemon, PokemonClient } from "pokenode-ts";

const api = new PokemonClient()

export async function getPokemons(offset?: number, limit?: number): Promise<Pokemon[]> {

  const apiResponse = await api.listPokemons(offset, limit)
  .catch((e) => {
    console.error(e)
    return []
  })

  console.log(apiResponse)

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