import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const SectionFooter: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="flex justify-end mt-6">{children}</div>
    </>
  );
};

export default SectionFooter;
