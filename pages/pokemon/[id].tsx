import { useRouter } from "next/router";
import { MainLayout } from "@/components/layouts"

interface Props {
  pokemon: any
}

const PokemonPage = () => {

  const router = useRouter();
  console.log(router.query)

  return (
    <MainLayout>
      <h1>hola mundo</h1>
    </MainLayout>
  )
}

export default PokemonPage
