import { RiArrowDownSLine } from "react-icons/ri";

type Props = {
  title: string;
  items: { title: string; id: string }[];
};

const ListDropdown = ({ title, items }: Props) => {
  return (
    <details className="dropdown">
      <summary className="btn btn-sm rounded-lg">
        {title}
        <span className="text-lg">
          <RiArrowDownSLine />
        </span>
      </summary>
      <ul className="scrollable-content menu dropdown-content z-[1] mt-1 max-h-48 w-52 flex-nowrap overflow-y-auto rounded-box bg-base-100 p-2 shadow">
        {items.map((item) => (
          <li key={item.id}>
            <a>{item.title}</a>
          </li>
        ))}
      </ul>
    </details>
  );
};

export default ListDropdown;
