import { Grid } from '@nextui-org/react';
import { FC } from 'react';
import { SmallPokemon } from '../../interfaces';
import { PokemonCard } from './';

interface Props{
  pokemons: SmallPokemon[];
}

export const PokemonList:FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container
        gap={3}
        justify='flex-start'
        css={{ margin: '0px auto' }}
      >
        {
          pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} {...pokemon} />
          ))
        }
      </Grid.Container>
  );
};