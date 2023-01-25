import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { pokeApi } from '@/api';
import { SmallPokemon, PokemonListResponse, Pokemon } from '@/interfaces';
import { MainLayout } from '@/components/layouts';
import { PokemonPageLayout } from '@/components/layouts';
import { getPokemonInfo } from '@/utils';

interface Props {
  pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  return (
    <MainLayout title={pokemon.name}>
      <PokemonPageLayout pokemon={pokemon}>
        <h1>hola mundo</h1>
      </PokemonPageLayout>
    </MainLayout>
  );
};

export default PokemonByNamePage;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  const names = data.results.map( (pokemon: SmallPokemon) => pokemon.name);

  return {
    paths: names.map((name: string) => ({
      params: { name },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { name } = params as { name: string };

  return {
    props: {
      pokemon: await getPokemonInfo( name ),
    },
  };
};
