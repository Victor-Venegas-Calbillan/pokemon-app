import { Pokemon } from '@/interfaces';
import { Card, Grid, Image, Row, Text } from '@nextui-org/react';
import { FC, PropsWithChildren } from 'react';
import { PokemonSprites } from '../pokemon';

interface Props extends PropsWithChildren {
  pokemon: Pokemon;
}

export const PokemonPageLayout: FC<Props> = ({ pokemon, children }) => {

   const existSecondType = !!pokemon.types[1];

  return (
    <Grid.Container css={{ marginTop: '5px' }} gap={2}>
      <Grid xs={12} sm={4}>
        <Card isHoverable css={{ p: '20px' }}>
          <Card.Image
            src={
              pokemon.sprites.other?.dream_world.front_default ||
              pokemon.sprites.front_default
            }
            alt={pokemon.name}
            width='100%'
            height={200}
          />
          <Card.Footer>
            <Row wrap='wrap' css={{ justifyItems: 'flex-start'}} >
              <Image
                src={`/types/${pokemon.types[0].type.name}.svg`}
                alt={pokemon.types[0].type.name}
                width={100}
                css={{ mt: 20}}
              />
              {
                existSecondType && (
                  <Image
                    src={`/types/${pokemon.types[1].type.name}.svg`}
                    alt={pokemon.types[1].type.name}
                    width={100}
                    css={{ mt: 20}}
                  />
                )
              }
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
      <Grid xs={12} sm={8}>
        <PokemonSprites pokemon={pokemon} />
      </Grid>

      {children}
    </Grid.Container>
  );
};
