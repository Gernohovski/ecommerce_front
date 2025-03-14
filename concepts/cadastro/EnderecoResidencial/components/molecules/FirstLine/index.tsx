"use client";

import { ValidationResult } from "@/utils/validate-schema";
import { Dispatch, SetStateAction, useMemo } from "react";
import CEPInput from "../../atoms/CEPInput";
import LogradouroInput from "../../atoms/LogradouroInput";
import LogradouroTypeSelect from "../../atoms/LogradouroTypeSelect";
import NumberInput from "../../atoms/NumberInput";

type FirstLineProps = {
  cep: string;
  setCep: Dispatch<SetStateAction<string>>;
  logradouroType: string;
  setLogradouroType: Dispatch<SetStateAction<string>>;
  logradouro: string;
  setLogradouro: Dispatch<SetStateAction<string>>;
  number: string;
  setNumber: Dispatch<SetStateAction<string>>;
  errors?: ValidationResult[];
  tipoEndereco?: string;
};

const FirstLine: React.FC<FirstLineProps> = ({
  cep,
  setCep,
  logradouro,
  setLogradouro,
  logradouroType,
  setLogradouroType,
  number,
  setNumber,
  errors,
  tipoEndereco,
}) => {
  const hasErrors = useMemo(() => {
    return {
      cepError: errors?.some(
        (error) =>
          error.nomeDoCampo === `${tipoEndereco}[0].cep` && !error.isValid
      ),
      logradouroTypeError: errors?.some(
        (error) =>
          error.nomeDoCampo === `${tipoEndereco}[0].tipoLogradouro.id` &&
          !error.isValid
      ),
      logradouroError: errors?.some(
        (error) =>
          error.nomeDoCampo === `${tipoEndereco}[0].logradouro` &&
          !error.isValid
      ),
      numberError: errors?.some(
        (error) =>
          error.nomeDoCampo === `${tipoEndereco}[0].numero` && !error.isValid
      ),
    };
  }, [errors, tipoEndereco]);

  return (
    <div className="flex gap-6">
      <CEPInput cep={cep} setCep={setCep} hasError={hasErrors.cepError} />
      <LogradouroTypeSelect
        logradouroType={logradouroType}
        setLogradouroType={setLogradouroType}
        hasError={hasErrors.logradouroTypeError}
      />
      <LogradouroInput
        logradouro={logradouro}
        setLogradouro={setLogradouro}
        hasError={hasErrors.logradouroError}
      />
      <NumberInput
        number={number}
        setNumber={setNumber}
        hasError={hasErrors.numberError}
      />
    </div>
  );
};

export default FirstLine;
