"use client";

import { ValidationResult } from "@/utils/validate-schema";
import { Dispatch, SetStateAction, useMemo } from "react";
import ResidenceTypeSelect from "../../atoms/ResidenceTypeSelect";
import ShortPhraseInput from "../../atoms/ShortPhraseInput";

type ThirdLineProps = {
  residenceType: string;
  setResidenceType: Dispatch<SetStateAction<string>>;
  shortPhrase: string;
  setShortPhrase: Dispatch<SetStateAction<string>>;
  errors?: ValidationResult[];
  tipoEndereco?: string;
};

const ThirdLine: React.FC<ThirdLineProps> = ({
  residenceType,
  setResidenceType,
  shortPhrase,
  setShortPhrase,
  errors,
  tipoEndereco,
}) => {
  const hasErrors = useMemo(() => {
    return {
      residenceTypeError: errors?.some(
        (error) =>
          (error.nomeDoCampo === `${tipoEndereco}[0].tipoResidencia.id` ||
            error.nomeDoCampo === "tipoResidenciaId") &&
          !error.isValid
      ),
      shortPhraseError: errors?.some(
        (error) =>
          (error.nomeDoCampo === `${tipoEndereco}[0].fraseIdentificacao` ||
            error.nomeDoCampo === "fraseIdentificacao") &&
          !error.isValid
      ),
    };
  }, [errors, tipoEndereco]);

  return (
    <div className="flex gap-6">
      <ResidenceTypeSelect
        residenceType={residenceType}
        setResidenceType={setResidenceType}
        hasError={hasErrors.residenceTypeError}
        tipoEndereco={tipoEndereco}
      />
      <ShortPhraseInput
        shortPhrase={shortPhrase}
        setShortPhrase={setShortPhrase}
        hasError={hasErrors.shortPhraseError}
        tipoEndereco={tipoEndereco}
      />
    </div>
  );
};

export default ThirdLine;
