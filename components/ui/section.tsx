import { createContext, ReactNode, useContext } from "react";
import SectionHeader from "./section-header";

type Props = {
  children: ReactNode;
  icon: ReactNode;
  title: string;
  subtitle: string;
  disabled?: boolean;
  closeButton?: ReactNode;
};

const DisabledContext = createContext(false);

export const useDisabled = () => useContext(DisabledContext);

const Section: React.FC<Props> = ({
  children,
  title,
  icon,
  subtitle,
  disabled,
  closeButton,
}) => {
  return (
    <DisabledContext.Provider value={!!disabled}>
      <fieldset
        disabled={disabled}
        className="flex flex-col bg-white pr-6 pl-6 pt-6 pb-8 rounded-xl shadow-sm min-w-[1146px]"
      >
        <SectionHeader
          title={title}
          icon={icon}
          subtitle={subtitle}
          closeButton={closeButton}
        />
        <div className="flex flex-col gap-6">{children}</div>
      </fieldset>
    </DisabledContext.Provider>
  );
};

export default Section;
