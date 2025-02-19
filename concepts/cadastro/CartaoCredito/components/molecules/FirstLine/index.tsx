"use client";

import AddCartaoCreditoButton from "../../atoms/AddCartaoCreditoButton";
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
      <div className="flex items-end">
        <AddCartaoCreditoButton />
      </div>
    </div>
  );
};

export default FirstLine;
