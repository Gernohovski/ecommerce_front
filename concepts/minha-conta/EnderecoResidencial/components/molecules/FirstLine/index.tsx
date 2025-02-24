"use client";

import { Dispatch, SetStateAction } from "react";
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
}) => {
  return (
    <div className="flex gap-6">
      <CEPInput cep={cep} setCep={setCep} />
      <LogradouroTypeSelect
        logradouroType={logradouroType}
        setLogradouroType={setLogradouroType}
      />
      <LogradouroInput logradouro={logradouro} setLogradouro={setLogradouro} />
      <NumberInput number={number} setNumber={setNumber} />
    </div>
  );
};

export default FirstLine;
