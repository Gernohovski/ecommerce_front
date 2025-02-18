import { createContext, ReactNode, useContext } from "react";
import SectionHeader from "./section-header";

type Props = {
  children: ReactNode;
  icon: ReactNode;
  title: string;
  subtitle: string;
  disabled?: boolean;
};

const DisabledContext = createContext(false);

export const useDisabled = () => useContext(DisabledContext);

const Section: React.FC<Props> = ({
  children,
  title,
  icon,
  subtitle,
  disabled,
}) => {
  return (
    <DisabledContext.Provider value={!!disabled}>
      <fieldset
        disabled={disabled}
        className="flex flex-col bg-white p-6 rounded-xl shadow-sm min-w-[1146px]"
      >
        <SectionHeader title={title} icon={icon} subtitle={subtitle} />
        <div className="flex flex-col gap-6">{children}</div>
      </fieldset>
    </DisabledContext.Provider>
  );
};

export default Section;
