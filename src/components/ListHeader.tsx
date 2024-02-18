import { RiArrowUpDownLine } from "react-icons/ri";

const ListHeader = () => {
  return (
    <div id="list-header">
      <details className="dropdown">
        <summary className="btn btn-ghost gap-2 font-normal">
          <RiArrowUpDownLine /> Sort By
        </summary>
        <ul className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
          <li>
            <a>Name A-Z</a>
          </li>
          <li>
            <a>Name Z-A</a>
          </li>
          <li>
            <a>Recents First</a>
          </li>
        </ul>
      </details>
    </div>
  );
};

export default ListHeader;
