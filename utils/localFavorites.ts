const toggleFavorite = (id: number) => {

  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')
  
  favorites.includes(id) 
  ? favorites = favorites.filter( (favId: number) => favId !== id )
  : favorites.push(id)

  localStorage.setItem('favorites', JSON.stringify(favorites))
}

const existPokemonInFavorites = ( id: number ): boolean => {
  
  const favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]' );
  return favorites.includes(id);
}

const getFavoritesPokemons = (): number [] => {
  return JSON.parse( localStorage.getItem('favorites') || '[]' );
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  toggleFavorite,
  existPokemonInFavorites,
  getFavoritesPokemons
}