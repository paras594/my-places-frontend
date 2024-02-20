import { RiAddFill, RiListUnordered } from "react-icons/ri";
import Container from "../components/Container";
import { HiOutlineDotsVertical } from "react-icons/hi";

type Props = {
  onAddLocation: () => void;
};

const BottomBar = ({ onAddLocation }: Props) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex h-16 items-center border-t bg-white">
      <Container className="flex items-center justify-between">
        <div className="flex gap-2">
          <button className="btn btn-square btn-ghost btn-sm text-lg">
            <RiListUnordered />
          </button>
          <details className="dropdown dropdown-top">
            <summary className="btn btn-square btn-ghost btn-sm text-lg">
              <HiOutlineDotsVertical />
            </summary>
            <ul className="menu dropdown-content z-[1] mb-6 w-52 rounded-box bg-base-100 p-2 shadow">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </details>
        </div>
        <div>
          <button className="btn btn-square text-2xl" onClick={onAddLocation}>
            <RiAddFill />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default BottomBar;
