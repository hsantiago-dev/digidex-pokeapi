import { GameClient, Generation, NamedAPIResourceList } from "pokenode-ts";

const api = new GameClient()

export async function getGenerations(): Promise<Generation[]> {

  const apiResponse = await api.listGenerations()
  .catch((e) => {
    console.error(e)
    return []
  })

  const resourceList = apiResponse as NamedAPIResourceList

  return await Promise.all(
    resourceList.results.map(async (p) => {
      const id = getIdFromUrl(p.url)
      return await api.getGenerationById(id)
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