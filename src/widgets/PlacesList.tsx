import ListHeader from "../components/ListHeader";
import PlacesListItem from "../components/PlacesListItem";

const PlacesList = () => {
  return (
    <div>
      <ListHeader />
      <div className="h-2" />
      <div className="flex flex-col gap-1">
        <PlacesListItem />
        <PlacesListItem />
        <PlacesListItem />
      </div>
    </div>
  );
};

export default PlacesList;
