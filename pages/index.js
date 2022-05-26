import Hero from "../components/main/Hero";
import Speeds from "../components/main/Speeds";
import Cards from "../components/main/Cards";

export default function Home({ router, translate }) {
  return (
    <>
      <Hero translate={translate} />
      <Speeds translate={translate} />
      {/*<Cards translate={translate} />*/}
    </>
  )
}
