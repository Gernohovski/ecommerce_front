"use client";

import { useDadosBasicosContext } from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";
import BirthDateInput from "../../atoms/BirthDatePicker";
import GenderSelect from "../../atoms/GenderSelect";
import NameInput from "../../atoms/NameInput";

const FirstLine: React.FC = () => {
  const { birthDate, setBirthDate } = useDadosBasicosContext();
  return (
    <div className="flex gap-6">
      <NameInput />
      <GenderSelect />
      <BirthDateInput date={birthDate} setDate={setBirthDate} />
    </div>
  );
};

export default FirstLine;
