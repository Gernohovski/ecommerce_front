import { ReactNode, useState } from "react";

type TooltipProps = {
  id?: string;
  text: string;
  children: ReactNode;
};

const Tooltip: React.FC<TooltipProps> = ({ text, children, id }) => {
  const [visible, setVisible] = useState(false);

  const isEmpty = text.trim() === "";

  return (
    <div
      id={id}
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {!isEmpty && (
        <div
          className={`
            absolute bottom-full left-1/2 -translate-x-1/2 mb-2
            bg-white text-black text-sm px-3 py-1 rounded-md shadow-md
            whitespace-nowrap z-50
            transform transition-all duration-200 ease-out
            ${
              visible
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }
          `}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
