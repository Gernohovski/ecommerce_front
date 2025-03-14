import * as React from "react";

import { cn } from "@/lib/utils";
import { AlertOctagon } from "lucide-react";

interface InputProps extends React.ComponentProps<"input"> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, value, ...props }, ref) => {
    return (
      <div>
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            error && !value && "border-red-500 focus-visible:ring-red-500",
            className
          )}
          ref={ref}
          value={value}
          {...props}
        />
        <span className="text-xs text-red-500 absolute">
          {error && !value && (
            <div className="flex items-center gap-1">
              <AlertOctagon size={12} />
              {"Campo obrigatório"}
            </div>
          )}
        </span>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
