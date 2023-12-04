import "./App.css";
import { Hero } from "./components/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NftCards from "./components/NftCards";
import ExploreNft from "./components/ExploreNft";
function App() {
  return (
    <>
      <Hero />
      <NftCards />
      <ExploreNft />
    </>
  );
}

export default App;
