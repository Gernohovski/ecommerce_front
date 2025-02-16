"use client";

import ObservationsInput from "../../atoms/ObservationsInput";
import ResidenceTypeSelect from "../../atoms/ResidenceTypeSelect";

const ThirdLine: React.FC = () => {
  return (
    <div className="flex gap-6">
      <ResidenceTypeSelect />
      <ObservationsInput />
    </div>
  );
};

export default ThirdLine;
