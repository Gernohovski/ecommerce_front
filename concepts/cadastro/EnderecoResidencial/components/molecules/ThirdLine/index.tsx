"use client";

import { Dispatch, SetStateAction } from "react";
import ObservationsInput from "../../atoms/ObservationsInput";
import ResidenceTypeSelect from "../../atoms/ResidenceTypeSelect";

type ThirdLineProps = {
  residenceType: string;
  setResidenceType: Dispatch<SetStateAction<string>>;
  observations: string;
  setObservations: Dispatch<SetStateAction<string>>;
};

const ThirdLine: React.FC<ThirdLineProps> = ({
  residenceType,
  setResidenceType,
  observations,
  setObservations,
}) => {
  return (
    <div className="flex gap-6">
      <ResidenceTypeSelect
        residenceType={residenceType}
        setResidenceType={setResidenceType}
      />
      <ObservationsInput
        observations={observations}
        setObservations={setObservations}
      />
    </div>
  );
};

export default ThirdLine;
