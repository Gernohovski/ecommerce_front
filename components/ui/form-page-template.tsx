import { ReactNode } from "react";

type Props = {
  subtitle: string;
  children: ReactNode;
};

const FormPageTemplate: React.FC<Props> = ({ subtitle, children }) => {
  return (
    <div className="flex flex-col items-center gap-6 mb-4">
      <span className="self-start ml-[191px] pt-8 text-xl text-[#382057] font-bold">
        {subtitle}
      </span>
      {children}
    </div>
  );
};

export default FormPageTemplate;
