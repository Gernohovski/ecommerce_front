"use client";
import { useDadosBasicosContext } from "../../../contexts/DadosBasicosContext";
import BirthDateInput from "../../atoms/BirthDateInput";
import CPFInput from "../../atoms/CPFInput";
import GenderSelect from "../../atoms/GenderSelect";
import NameInput from "../../atoms/NameInput";

const FirstLine: React.FC = () => {
  const { birthDate, setBirthDate } = useDadosBasicosContext();
  return (
    <div className="flex gap-6">
      <NameInput />
      <GenderSelect />
      <BirthDateInput date={birthDate} setDate={setBirthDate} />
      <CPFInput />
    </div>
  );
};

export default FirstLine;
