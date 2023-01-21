import { NextPage } from 'next';
import { Button } from '@nextui-org/react';
import { MainLayout } from '../components/layouts/';

const HomePage: NextPage = () => {
  return (
    <MainLayout title='Listado de pokemons' >
      <Button color={'primary'}>Hola mundo</Button>
    </MainLayout>
  );
};

export default HomePage;
