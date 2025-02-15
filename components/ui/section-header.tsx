import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  subtitle: string;
};

const SectionHeader: React.FC<Props> = ({ title, icon, subtitle }) => {
  return (
    <>
      <div className="flex items-center gap-2 mb-6">
        <div>{icon}</div>
        <div className="flex flex-col">
          <span className="text-lg text-[#382057] font-bold">{title}</span>
          <span className="text-sm text-[#71717A]">{subtitle}</span>
        </div>
      </div>
    </>
  );
};

export default SectionHeader;
