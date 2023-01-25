import { FC } from 'react';
import { useRouter } from 'next/router';
import { Card, Grid } from '@nextui-org/react';

interface Props {
  id: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ id }) => {

  const router = useRouter();

  const onFavoriteClick = () => {
    router.push(`/pokemon/${id}`)
  }
  return (
    <Grid 
      key={ id } 
      xs={ 12 } 
      sm={ 6 } 
      md={ 4 } 
      lg={ 3 }
      onClick={ onFavoriteClick }
    >
      <Card isHoverable isPressable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={'100%'}
          height={140}
        />
      </Card>
    </Grid>
  );
};
