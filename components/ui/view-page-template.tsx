import { ReactNode } from "react";

type Props = {
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
};

const ViewPageTemplate: React.FC<Props> = ({ subtitle, children, footer }) => {
  return (
    <div>
      <div className="flex flex-col items-center gap-6 mb-4">
        <span className="self-start ml-[191px] pt-8 text-xl text-[#7738C8] font-bold">
          {subtitle}
        </span>
        {children}
      </div>
      <div className="flex flex-col items-end w-full h-15 justify-center bg-white pr-[183.4px]">
        {footer}
      </div>
    </div>
  );
};

export default ViewPageTemplate;
