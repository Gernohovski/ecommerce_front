import { ReactNode } from "react";

type Props = {
  filters: ReactNode[];
  filterTitle: string;
};

const Filter: React.FC<Props> = ({ filters, filterTitle }) => {
  return (
    <div className="flex flex-col">
      <span className="font-bold text-base mt-6 ml-4 mb-2">{filterTitle}</span>
      {filters.map((filter, index) => (
        <span
          key={index}
          className="hover:text-[#7738C8] hover:underline decoration-[#7738C8] ml-4 m-1 key={index}"
        >
          {filter}
        </span>
      ))}
    </div>
  );
};

export default Filter;
