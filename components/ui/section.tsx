import { ReactNode } from "react";
import SectionHeader from "./section-header";

type Props = {
  children: ReactNode;
  icon: ReactNode;
  title: string;
  subtitle: string;
};

const Section: React.FC<Props> = ({ children, title, icon, subtitle }) => {
  return (
    <div className="flex flex-col bg-white p-6 rounded-xl shadow-sm min-w-[1146px]">
      <SectionHeader title={title} icon={icon} subtitle={subtitle} />
      <div className="flex flex-col gap-6">{children}</div>
    </div>
  );
};

export default Section;
