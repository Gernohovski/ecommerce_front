"use client";

import { ValidationResult } from "@/utils/validate-schema";
import CardFlagSelect from "../../atoms/CardFlagSelect";
import CardNumberInput from "../../atoms/CardNumberInput";
import CardSecurityCode from "../../atoms/CardSecurityCode";
import PrintedNameInput from "../../atoms/PrintedNameInput";

const FirstLine: React.FC<{ errors: ValidationResult[] }> = ({ errors }) => {
  return (
    <div className="flex gap-6">
      <CardNumberInput errors={errors} />
      <PrintedNameInput errors={errors} />
      <CardFlagSelect errors={errors} />
      <CardSecurityCode errors={errors} />
    </div>
  );
};

export default FirstLine;
