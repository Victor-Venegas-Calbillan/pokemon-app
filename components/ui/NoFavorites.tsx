import { Container, Image, Text } from '@nextui-org/react';
import React from 'react';

export const NoFavorites = () => {
  return (
    <Container
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 100px)',
        alignSelf: 'center',
      }}
    >
      <Text h1> No hay Favoitos</Text>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/92.svg'
        alt='Pokemon'
        width={250}
        height={250}
      />
    </Container>
  );
};
