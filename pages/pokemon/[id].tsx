import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { MainLayout } from "@/components/layouts"
import { pokeApi } from '@/api';
import { Pokemon } from '@/interfaces';
import { PokemonPageLayout } from '@/components/layouts/PokemonPageLayout';

interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

  return (
    <MainLayout title={ pokemon.name }>
      <PokemonPageLayout pokemon={ pokemon } >
        <h1>hola mundo</h1>
      </PokemonPageLayout>
    </MainLayout>
  )
}

export default PokemonPage


export const getStaticPaths: GetStaticPaths = async (ctx) => { 
  const pokemons151: string[] = [...Array(151)].map( (value,index) => `${index + 1}`)

  return {
    paths: pokemons151.map( id => ({
      params: { id }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const { id } = params as { id: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ id }`);

  const pokemon = {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
    types: data.types,
    stats: data.stats,
    move: data.moves,
  }

  return {
    props: {
     pokemon
    },
  };
};
