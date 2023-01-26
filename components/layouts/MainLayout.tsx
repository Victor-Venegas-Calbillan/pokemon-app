import Head from "next/head"
import { FC, PropsWithChildren } from "react"
import { Container } from '@nextui-org/react'
import { NavBar } from '../ui';

interface Props extends PropsWithChildren {
  title?: string
}

const origin = (typeof window === 'undefined') ? 'http://localhost:3000' : window.location.origin

export const MainLayout: FC <Props> = ({ children, title }) => {

  
  return (
    <>
      <Head>
        <title>{ title || 'PokemonApp' }</title>
        <meta name="author" content="Victor Venegas"  />
        <meta name="description" content={`Informacion sobre el pokemon ${ title }`}  />
        <meta name="keywords" content={`${title} ,pokemon, pokedex`}  />
        <meta property="og:title" content={`Informacion sobre ${ title }`} />
        <meta property="og:description" content={`Esta es la página sobre ${ title } `} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
        <meta name="twitter:card" content="summary"  />
        <meta name="twitter:site" content="@ChinoHdp"  />
        <meta name="twitter:title" content={`Informacion sobre ${ title }`}  />
        <meta name="twitter:description" content={`Esta es la página sobre ${ title } `}  />
        <meta name="twitter:image" content={`${origin}/img/banner.png`}  />
        <meta name="twitter:image:alt" content={`Esta es la página sobre ${ title }`}  />
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
