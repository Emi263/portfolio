import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";

import NavBar from "../components/NavBar";
import Portfolio from "../components/Portfolio/Portfolio";
import Skills from "../components/Skills/Skills";

export default function Home() {
  return (
    <>
      <NavBar />
      <Introduction />
      <Cards />
      <Portfolio />
      <Skills />
      <Footer />
    </>
  );
}
