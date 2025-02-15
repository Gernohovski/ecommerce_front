"use client";
import { useState } from "react";
import BirthDateInput from "../../atoms/BirthDateInput";
import CPFInput from "../../atoms/CPFInput";
import GenderSelect from "../../atoms/GenderSelect";
import NameInput from "../../atoms/NameInput";

const FirstLine: React.FC = () => {
  const [date, setDate] = useState<Date>();
  return (
    <div className="flex gap-6">
      <NameInput />
      <GenderSelect />
      <BirthDateInput date={date} setDate={setDate} />
      <CPFInput />
    </div>
  );
};

export default FirstLine;
