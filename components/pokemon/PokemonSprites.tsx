import { Pokemon } from "@/interfaces";
import { localFavorites } from "@/utils";
import { Button, Card, Container, Image, Text } from "@nextui-org/react";
import { FC, useEffect } from "react";

interface Props {
  pokemon: Pokemon;
}

export const PokemonSprites: FC<Props> = ({ pokemon }) => {

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id)
  };

  useEffect(() => {
  }, [])
  

  return (
    <Card isHoverable css={{ p: '20px' }}>
      <Card.Header
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        <Text h1 transform='capitalize'>
          {pokemon.name}
        </Text>
        <Button 
          color='gradient' 
          ghost
          onClick={ onToggleFavorite }
        >
          Guardar en Favoritos
        </Button>
      </Card.Header>
      <Card.Body>
        <Text size={30}>Sprites</Text>
        <Container direction='row' display='flex'>
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width={100}
            height={100}
          />
          <Image
            src={pokemon.sprites.back_default}
            alt={pokemon.name}
            width={100}
            height={100}
          />
          <Image
            src={pokemon.sprites.front_shiny}
            alt={pokemon.name}
            width={100}
            height={100}
          />
          <Image
            src={pokemon.sprites.back_shiny}
            alt={pokemon.name}
            width={100}
            height={100}
          />
        </Container>
      </Card.Body>
    </Card>
  );
};
