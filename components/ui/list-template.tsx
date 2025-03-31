import { ReactNode } from "react";

type Props = {
  filters?: ReactNode[];
  children?: ReactNode;
};

const ListTemplate: React.FC<Props> = ({ children, filters }) => {
  return (
    <div className="m-4 bg-white rounded-[20px] h-auto w-[1373px] grid grid-cols-[183px_3px_auto]">
      <div className="w-[183px] mb-4">
        {filters?.map((filter, index) => (
          <span key={index}>{filter}</span>
        ))}
      </div>
      <div className="w-[3px] bg-gray-300 my-6"></div>
      <div>{children}</div>
    </div>
  );
};

export default ListTemplate;
