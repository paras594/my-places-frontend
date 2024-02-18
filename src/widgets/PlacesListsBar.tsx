import clsx from "clsx";
import { RiAddFill } from "react-icons/ri";

const PlacesListsBar = () => {
  const active = 1;
  const placesLists = [{ name: "My Places", id: 1 }];

  return (
    <div className="scrollable-content flex w-full overflow-x-scroll">
      <div role="tablist" className="tabs tabs-bordered flex-1">
        {placesLists.map((place) => (
          <div
            role="tab"
            className={clsx("tab h-10 w-max", {
              "tab-active": active === place.id,
            })}
            key={place.id}
          >
            {place.name}
          </div>
        ))}
        <div className={clsx("tab w-full p-1")}></div>
      </div>
      <div className="sticky right-0 mr-1 border-b-2 bg-white p-1 px-3 shadow-2xl shadow-white">
        <button className="btn btn-square btn-outline btn-neutral btn-sm text-xl">
          <RiAddFill />
        </button>
      </div>
    </div>
  );
};

export default PlacesListsBar;
