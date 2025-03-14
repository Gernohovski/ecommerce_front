"use client";
import { ValidationResult } from "@/utils/validate-schema";
import { useDadosBasicosContext } from "../../../contexts/DadosBasicosContext";
import BirthDateInput from "../../atoms/BirthDateInput";
import CPFInput from "../../atoms/CPFInput";
import GenderSelect from "../../atoms/GenderSelect";
import NameInput from "../../atoms/NameInput";

export type LineProps = {
  errors?: ValidationResult[];
};

const FirstLine: React.FC<LineProps> = ({ errors }) => {
  const { birthDate, setBirthDate } = useDadosBasicosContext();
  return (
    <div className="flex gap-6">
      <NameInput errors={errors} />
      <GenderSelect errors={errors} />
      <BirthDateInput date={birthDate} setDate={setBirthDate} errors={errors} />
      <CPFInput errors={errors} />
    </div>
  );
};

export default FirstLine;
