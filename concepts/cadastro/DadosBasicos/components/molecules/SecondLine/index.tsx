"use client";
import DDDInput from "../../atoms/DDDInput";
import EmailInput from "../../atoms/EmailInput";
import TelephoneInput from "../../atoms/TelephoneInput";
import TelephoneTypeSelect from "../../atoms/TelephoneTypeSelect";
import { LineProps } from "../FirstLine";

const SecondLine: React.FC<LineProps> = ({ errors }) => {
  return (
    <div className="flex gap-6">
      <DDDInput errors={errors} />
      <TelephoneInput errors={errors} />
      <TelephoneTypeSelect errors={errors} />
      <EmailInput errors={errors} />
    </div>
  );
};

export default SecondLine;
