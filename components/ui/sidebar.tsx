import { ReactNode } from "react";

type SidebarProps = {
  children: ReactNode;
};

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <div>
      <div className="h-screen w-[280px] bg-white shadow-md">
        <div className="flex flex-col pl-4 pr-4 pt-8 gap-8 items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
