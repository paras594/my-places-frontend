import { RiMapPinLine, RiStarLine } from "react-icons/ri";
import Container from "./Container";
import { Link } from "react-router-dom";

const PlacesListItem = () => {
  return (
    <Link to="/places/1">
      <div className="rounded-lg hover:bg-slate-100">
        <Container className="flex items-center gap-4 py-2">
          <div className="text-xl text-gray-400">
            <RiMapPinLine />
          </div>
          <div className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
            987 Maple Drive, Rivertown, USA, more text here
          </div>
          <div className="text-xl">
            <button className="btn btn-square btn-ghost btn-sm border text-xl">
              <RiStarLine />
            </button>
          </div>
        </Container>
      </div>
    </Link>
  );
};

export default PlacesListItem;
