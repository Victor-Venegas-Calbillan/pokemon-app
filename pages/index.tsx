import { GetStaticProps, NextPage } from 'next';
import { MainLayout } from '../components/layouts/';
import pokeApi from '../api/pokeApi';
import { PokemonListResponse } from '../interfaces';
import { SmallPokemon } from '../interfaces/pokemon-list';
import Image from 'next/image';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <MainLayout title='Listado de pokemons'>
      <ul>
        {
          pokemons.map(({name, url, id, image}) => (
            <li key={id}>
              <Image
                src={image}
                alt={name}
                width={100}
                height={100}
              />
              <span>{name}</span>
            </li>
          ))
        }
      </ul>
    </MainLayout>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>(
    '/pokemon?limit=36'
  );

  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
      ...pokemon,
      id: index + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`,
    })
  );

  console.log(data);
  //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg

  return {
    props: {
      pokemons,
    },
  };
};
