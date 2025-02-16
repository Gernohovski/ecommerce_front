"use client";

import CityInput from "../../atoms/CityInput";
import CountryInput from "../../atoms/CountryInput";
import NeighborhoodInput from "../../atoms/NeighborhoodInput";
import StateInput from "../../atoms/StateInput";

const SecondLine: React.FC = () => {
  return (
    <div className="flex gap-6">
      <CountryInput />
      <StateInput />
      <CityInput />
      <NeighborhoodInput />
    </div>
  );
};

export default SecondLine;
