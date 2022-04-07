import Hero from "../components/main/Hero";
import Speeds from "../components/main/Speeds";

export default function Home({ router, translate }) {
  return (
    <>
      <Hero translate={translate} />
      <Speeds translate={translate} />
    </>
  )
}
