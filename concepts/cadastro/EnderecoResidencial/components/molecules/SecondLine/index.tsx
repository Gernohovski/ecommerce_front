"use client";

import { Dispatch, SetStateAction } from "react";
import CityInput from "../../atoms/CityInput";
import CountryInput from "../../atoms/CountryInput";
import NeighborhoodInput from "../../atoms/NeighborhoodInput";
import StateInput from "../../atoms/StateInput";

type SecondLineProps = {
  country: string;
  setCountry: Dispatch<SetStateAction<string>>;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
  neighborhood: string;
  setNeighborhood: Dispatch<SetStateAction<string>>;
};

const SecondLine: React.FC<SecondLineProps> = ({
  country,
  setCountry,
  state,
  setState,
  city,
  setCity,
  neighborhood,
  setNeighborhood,
}) => {
  return (
    <div className="flex gap-6">
      <CountryInput country={country} setCountry={setCountry} />
      <StateInput state={state} setState={setState} />
      <CityInput city={city} setCity={setCity} />
      <NeighborhoodInput
        neighborhood={neighborhood}
        setNeighborhood={setNeighborhood}
      />
    </div>
  );
};

export default SecondLine;
