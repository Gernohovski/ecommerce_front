import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  subtitle: string;
  closeButton?: ReactNode;
};

const SectionHeader: React.FC<Props> = ({
  title,
  icon,
  subtitle,
  closeButton,
}) => {
  return (
    <>
      <div className="flex items-center gap-2 mb-6">
        <div>{icon}</div>
        <div className="flex items-start justify-between w-full">
          <div className="flex flex-col">
            <span className="text-lg text-[#7738C8] font-bold">{title}</span>
            <span className="text-sm text-[#71717A]">{subtitle}</span>
          </div>
          <div>{closeButton}</div>
        </div>
      </div>
    </>
  );
};

export default SectionHeader;
