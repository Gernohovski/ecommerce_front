"use client";

import { Dispatch, SetStateAction } from "react";
import ObservationsInput from "../../atoms/ObservationsInput";

type ThirdLineProps = {
  observations: string;
  setObservations: Dispatch<SetStateAction<string>>;
};

const FourthLine: React.FC<ThirdLineProps> = ({
  observations,
  setObservations,
}) => {
  return (
    <div className="flex gap-6">
      <ObservationsInput
        observations={observations}
        setObservations={setObservations}
      />
    </div>
  );
};

export default FourthLine;
