import BottomBar from "../../widgets/BottomBar";
import Navbar from "../../widgets/Navbar";
import PlacesList from "../../widgets/PlacesList";
import PlacesListsBar from "../../widgets/PlacesListsBar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="h-2" />
      <div className="sticky top-0 z-30 bg-white">
        <PlacesListsBar />
      </div>
      <div className="h-2" />
      <PlacesList />
      <div className="h-24" />
      <BottomBar />
    </div>
  );
};

export default Home;
