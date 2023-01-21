import { Text, useTheme, Spacer } from '@nextui-org/react';
import Image from 'next/image';

export const NavBar = () => {

  const { theme } = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '1rem',
        backgroundColor: theme?.colors.gray50.value
      }}
    >
      <Image 
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png' 
        alt='Icono de la app'
        width={70}
        height={70}
      />
      <Text h2 color='white'>P</Text>
      <Text h3 color='white'>okémon</Text>
      <Spacer
        css={{
            flex: 1
        }} 
      />
      <Text color='white'>Favoritos</Text>
    </div>
  );
};


