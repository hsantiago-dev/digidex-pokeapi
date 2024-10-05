

export function formatarGeracaoPokemon(text: string): string {
  return text.replace(/generation-(\w+)/i, (_, numeral) => {
    const romanNumeral = numeral.toUpperCase();
    return `Generation ${romanNumeral}`;
  });
}

export function formatarNomeJogo(text: string): string {

  if (
    text == "ultra-sun-ultra-moon"
    || text == "lets-go-pikachu-lets-go-eevee"
  )
    return text
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
      
  if (
    text == "black-white"
    || text == "black-2-white-2"
    || text == "sun-moon"
    || text == "the-isle-of-armor"
    || text == "the-crown-tundra"
    || text == "brilliant-diamond-and-shining-pearl"
    || text == "legends-arceus"
    || text == "the-teal-mask"
    || text == "the-indigo-disk"
  )
    return text
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return text
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' / ');
}