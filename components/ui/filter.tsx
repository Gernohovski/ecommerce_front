import Image from "next/image";
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

  const handleRemoveFilter = () => {
    setActiveFilter(null);
    if (onClick) {
      onClick(null);
    }
  };

  return (
    <div className="flex flex-col">
      <span className="font-bold text-base mt-6 ml-4 mb-2">{filterTitle}</span>
      {filters.map((filter, index) => (
        <div key={index} className="flex items-center">
          <span
            className={`ml-4 m-1 cursor-pointer w-[120px] ${
              activeFilter === filter
                ? "text-[#7738C8] underline decoration-[#7738C8]"
                : "hover:text-[#7738C8] hover:underline hover:decoration-[#7738C8]"
            }`}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </span>
          {activeFilter === filter && (
            <div className="cursor-pointer" onClick={handleRemoveFilter}>
              <Image
                src="/icons/close.svg"
                alt="fechar"
                width={20}
                height={20}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Filter;
