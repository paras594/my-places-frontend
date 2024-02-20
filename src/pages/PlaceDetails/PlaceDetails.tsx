import Container from "../../components/Container";
import ActionNavbar from "../../widgets/ActionNavbar";
import ListDropdown from "../../components/ListDropdown";

const PlaceDetails = () => {
  return (
    <div>
      <ActionNavbar />
      <div className="h-2" />
      <Container>
        <ListDropdown
          title="Default List"
          items={[
            { title: "List 1", id: "1" },
            { title: "List 2", id: "2" },
            { title: "List 3", id: "3" },
            { title: "List 4", id: "4" },
          ]}
        />
        <div className="h-6" />
        <div>
          <h2 className="mb-2 text-lg font-semibold">987 Maple Drive, Rivertown, USA, 112839</h2>
          <p>
            Located in the Presidio neighborhood of San Francisco, known for its beautiful natural scenery and historic
            military buildings.
          </p>
        </div>
      </Container>
      <div className="fixed bottom-0 left-0 right-0">
        <Container className="flex gap-4 py-4">
          <button className="btn btn-outline flex-1">Back</button>
          <button className="btn btn-primary flex-1">View in Map</button>
        </Container>
      </div>
    </div>
  );
};

export default PlaceDetails;
