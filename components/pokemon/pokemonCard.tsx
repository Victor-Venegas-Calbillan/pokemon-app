import { FC } from 'react';
import { useRouter } from 'next/router';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { SmallPokemon } from '../../interfaces/pokemon-list';

export const PokemonCard:FC<SmallPokemon> = ({id, image, name}) => {

  const router = useRouter();

  const onClick = () => {
    router.push(`/name/${ name }`)
  }
  return (
    <Grid xs={12} sm={6} md={4} xl={3}>
      <Card 
        isHoverable 
        isPressable
        onClick={onClick}
      >
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={image} width='100%' />
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between'>
            <Text transform='capitalize'>{name}</Text>
            <Text>{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
