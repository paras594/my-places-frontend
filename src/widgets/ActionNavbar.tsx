import { RiArrowLeftLine, RiDeleteBin4Line, RiStarLine } from "react-icons/ri";

const ActionNavbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <button className="btn btn-square btn-ghost text-2xl">
          <RiArrowLeftLine />
        </button>
      </div>
      <div className="flex gap-3 pr-3">
        <button className="btn btn-square btn-ghost btn-sm text-xl">
          <RiStarLine />
        </button>
        <button className="btn btn-square btn-ghost btn-sm text-xl text-red-500">
          <RiDeleteBin4Line />
        </button>
      </div>
    </div>
  );
};

export default ActionNavbar;
