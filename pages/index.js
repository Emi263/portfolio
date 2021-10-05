import Cards from "../components/Cards/Cards";
import Introduction from "../components/Introduction";
import NavBar from "../components/NavBar";
import Portfolio from "../components/Portfolio/Portfolio";

export default function Home() {
  return (
    <>
      <NavBar />
      <Introduction />
      <Cards />
      <Portfolio />
    </>
  );
}
