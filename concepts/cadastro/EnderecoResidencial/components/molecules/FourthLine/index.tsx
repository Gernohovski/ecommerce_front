"use client";

import { Dispatch, SetStateAction } from "react";
import ObservationsInput from "../../atoms/ObservationsInput";

type FourthLineProps = {
  observations: string;
  setObservations: Dispatch<SetStateAction<string>>;
};

const FourthLine: React.FC<FourthLineProps> = ({
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
