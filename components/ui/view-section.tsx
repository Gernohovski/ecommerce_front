import { createContext, ReactNode, useContext } from "react";
import SectionFooter from "./section-footer";
import SectionHeader from "./section-header";

type Props = {
  children: ReactNode;
  icon: ReactNode;
  title: string;
  subtitle: string;
  disabled?: boolean;
  footer?: ReactNode;
};

const DisabledContext = createContext(false);

export const useDisabled = () => useContext(DisabledContext);

const ViewSection: React.FC<Props> = ({
  children,
  title,
  icon,
  subtitle,
  disabled,
  footer,
}) => {
  return (
    <DisabledContext.Provider value={!!disabled}>
      <fieldset
        disabled={disabled}
        className="w-[1154px] h-auto p-6 bg-white flex flex-col rounded-xl shadow-md"
      >
        <SectionHeader title={title} icon={icon} subtitle={subtitle} />
        <div className="flex flex-col gap-6">{children}</div>
        <SectionFooter>{footer}</SectionFooter>
      </fieldset>
    </DisabledContext.Provider>
  );
};

export default ViewSection;
