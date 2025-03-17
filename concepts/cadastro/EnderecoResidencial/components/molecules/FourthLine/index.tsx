"use client";

import { Dispatch, SetStateAction } from "react";
import ObservationsInput from "../../atoms/ObservationsInput";

type FourthLineProps = {
  observations: string;
  setObservations: Dispatch<SetStateAction<string>>;
  tipoEndereco?: string;
};

const FourthLine: React.FC<FourthLineProps> = ({
  observations,
  setObservations,
  tipoEndereco,
}) => {
  return (
    <div className="flex gap-6">
      <ObservationsInput
        observations={observations}
        setObservations={setObservations}
        tipoEndereco={tipoEndereco}
      />
    </div>
  );
};

export default FourthLine;
