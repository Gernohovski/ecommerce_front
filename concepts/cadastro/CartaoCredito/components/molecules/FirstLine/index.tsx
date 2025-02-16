"use client";

import CardFlagSelect from "../../atoms/CardFlagSelect";
import CardNumberInput from "../../atoms/CardNumberInput";
import CardSecurityCode from "../../atoms/CardSecurityCode";
import PrintedNameInput from "../../atoms/PrintedNameInput";

const FirstLine: React.FC = () => {
  return (
    <div className="flex gap-6">
      <CardNumberInput />
      <PrintedNameInput />
      <CardFlagSelect />
      <CardSecurityCode />
    </div>
  );
};

export default FirstLine;
