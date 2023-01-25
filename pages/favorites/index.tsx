import { useEffect, useState } from 'react'
import { MainLayout } from '@/components/layouts'
import { NoFavorites } from '@/components/ui'
import { FavoritePokemons } from '@/components/pokemon';
import { localFavorites } from '@/utils';

const FavoritePage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons( localFavorites.getFavoritesPokemons() )
  }, [])
  
  return (
    <MainLayout title='Pokemos - Favoritos'>
      {
        favoritePokemons.length === 0 
          ? ( <NoFavorites />)
          : ( <FavoritePokemons favoritePokemons={ favoritePokemons } />)
      }
    </MainLayout>
  )
}

export default FavoritePage
