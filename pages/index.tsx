import { GetStaticProps, NextPage } from 'next';
import pokeApi from '../api/pokeApi';
import { MainLayout } from '../components/layouts';
import { PokemonListResponse } from '../interfaces';
import { SmallPokemon } from '../interfaces/pokemon-list';
import { PokemonList } from '../components/pokemon';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <MainLayout title='Listado de pokemons'>
      <PokemonList pokemons={ pokemons } />
    </MainLayout>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>( '/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map(
    (pokemon, index) => ({
      ...pokemon,
      id: index + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`,
    })
  );

  return {
    props: {
      pokemons,
    },
  };
};
