import { RiCloseFill, RiMapPinLine } from "react-icons/ri";
import Container from "../components/Container";
import { MdOutlineSort, MdSync } from "react-icons/md";
import { TbMapPinCheck, TbMapPinX } from "react-icons/tb";

const fetchingLocation = false;
const locationAvailable = true;
const failedToGetLocation = false;

type Props = {
  onClose: () => void;
};

const AddLocationForm = ({ onClose }: Props) => {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between py-1 pl-4">
        <h1 className="font-semibold">Add Location</h1>
        <button className="btn btn-square btn-ghost text-2xl" onClick={onClose}>
          <RiCloseFill />
        </button>
      </div>
      <div className="h-2" />
      <Container>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label className="input input-bordered flex items-center gap-2">
            <span className="pb-[2px] text-lg text-gray-600">
              <RiMapPinLine />
            </span>
            <input type="text" autoFocus className="grow" placeholder="Location Name" />
          </label>
          <div className="h-4" />
          <label className="input input-bordered flex !h-24 items-center gap-2 pb-2 pt-1">
            <span className="self-start pt-2 text-lg text-gray-600">
              <MdOutlineSort />
            </span>
            <textarea className="h-full grow resize-none py-1 outline-none" placeholder="Description" />
          </label>
          <div className="h-4" />
          <div className="flex items-center justify-between">
            {fetchingLocation && (
              <div className="flex items-center gap-2">
                <span className="animate-spin text-xl">
                  <MdSync />
                </span>
                <p className="text-sm">Getting location</p>
              </div>
            )}
            {locationAvailable && (
              <div className="flex items-center gap-2">
                <span className="text-xl text-green-600">
                  <TbMapPinCheck />
                </span>
                <p className="text-sm">Ready to save</p>
              </div>
            )}
            {failedToGetLocation && (
              <div className="flex items-center gap-2">
                <span className="text-xl text-red-600">
                  <TbMapPinX />
                </span>
                <button type="button" className="btn btn-outline btn-neutral btn-xs">
                  Try Again
                </button>
              </div>
            )}
            <div>
              <button type="submit" className="btn btn-primary btn-sm">
                Save
              </button>
            </div>
          </div>
        </form>
      </Container>
      <div className="h-6" />
    </div>
  );
};

export default AddLocationForm;
