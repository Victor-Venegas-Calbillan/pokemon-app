import Head from "next/head"
import { FC, PropsWithChildren } from "react"
import { Container } from '@nextui-org/react'
import { NavBar } from '../ui';

interface Props extends PropsWithChildren {
  title?: string
}

export const MainLayout: FC <Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{ title || 'PokemonApp' }</title>
        <meta name="author" content="Victor Venegas"  />
        <meta name="description" content={`Informacion sobre el pokemon ${ title }`}  />
        <meta name="keywords" content={`${title} ,pokemon, pokedex`}  />
      </Head>
      <NavBar />
      <main>
        <Container lg>
          { children }
        </Container>
      </main>
    </>
  )
}
