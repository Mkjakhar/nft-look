import "./App.css";
import { Hero } from "./components/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NftCards from "./components/NftCards";
import ExploreNft from "./components/ExploreNft";
import LatestNews from "./components/LatestNews";
function App() {
  return (
    <div className="mx-auto max_w_1920">
      <Hero />
      <NftCards />
      <ExploreNft />
      <LatestNews />
    </div>
  );
}

export default App;
