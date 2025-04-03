import { ReactNode, useState } from "react";

type Props = {
  filters: ReactNode[];
  onClick?: (filter: ReactNode) => void;
  filterTitle: string;
};

const Filter: React.FC<Props> = ({ filters, filterTitle, onClick }) => {
  const [activeFilter, setActiveFilter] = useState<ReactNode | null>(null);

  const handleFilterClick = (filter: ReactNode) => {
    setActiveFilter(filter);
    if (onClick) {
      onClick(filter);
    }
  };

  return (
    <div className="flex flex-col">
      <span className="font-bold text-base mt-6 ml-4 mb-2">{filterTitle}</span>
      {filters.map((filter, index) => (
        <span
          key={index}
          className={`ml-4 m-1 cursor-pointer ${
            activeFilter === filter
              ? "text-[#7738C8] underline decoration-[#7738C8]"
              : "hover:text-[#7738C8] hover:underline hover:decoration-[#7738C8]"
          }`}
          onClick={() => handleFilterClick(filter)}
        >
          {filter}
        </span>
      ))}
    </div>
  );
};

export default Filter;
