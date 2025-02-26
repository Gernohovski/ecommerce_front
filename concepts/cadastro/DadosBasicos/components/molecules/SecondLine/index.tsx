"use client";
import DDDInput from "../../atoms/DDDInput";
import EmailInput from "../../atoms/EmailInput";
import TelephoneInput from "../../atoms/TelephoneInput";
import TelephoneTypeSelect from "../../atoms/TelephoneTypeSelect";

const SecondLine: React.FC = () => {
  return (
    <div className="flex gap-6">
      <DDDInput />
      <TelephoneInput />
      <TelephoneTypeSelect />
      <EmailInput />
    </div>
  );
};

export default SecondLine;
