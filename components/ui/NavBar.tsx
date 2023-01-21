import { Text, useTheme, Spacer, Link, Grid, Container } from '@nextui-org/react';
import Image from 'next/image';
import NextLink from 'next/link';

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
      <NextLink href="/" legacyBehavior >
        <Link>
          <Text h2 color='white'>P</Text>
          <Text h3 color='white'>okémon</Text>
        </Link>
      </NextLink>
      <Spacer
        css={{
            flex: 1
        }} 
      />
      <NextLink href="/favorites" legacyBehavior >
        <Link>
          <Text color='white'>Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  );
};


