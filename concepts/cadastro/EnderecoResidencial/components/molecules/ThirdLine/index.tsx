"use client";

import { Dispatch, SetStateAction } from "react";
import ResidenceTypeSelect from "../../atoms/ResidenceTypeSelect";
import ShortPhraseInput from "../../atoms/ShortPhraseInput";

type ThirdLineProps = {
  residenceType: string;
  setResidenceType: Dispatch<SetStateAction<string>>;
  shortPhrase: string;
  setShortPhrase: Dispatch<SetStateAction<string>>;
};

const ThirdLine: React.FC<ThirdLineProps> = ({
  residenceType,
  setResidenceType,
  shortPhrase,
  setShortPhrase,
}) => {
  return (
    <div className="flex gap-6">
      <ResidenceTypeSelect
        residenceType={residenceType}
        setResidenceType={setResidenceType}
      />
      <ShortPhraseInput
        shortPhrase={shortPhrase}
        setShortPhrase={setShortPhrase}
      />
    </div>
  );
};

export default ThirdLine;
