import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { MainLayout } from "@/components/layouts"
import { Pokemon } from '@/interfaces';
import { PokemonPageLayout } from '@/components/layouts/PokemonPageLayout';
import { getPokemonInfo } from '@/utils';

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

  return {
    props: {
     pokemon: await getPokemonInfo( id )
    },
  };
};
