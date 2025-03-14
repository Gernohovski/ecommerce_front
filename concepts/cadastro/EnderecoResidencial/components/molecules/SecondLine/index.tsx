"use client";

import { ValidationResult } from "@/utils/validate-schema";
import { Dispatch, SetStateAction, useMemo } from "react";
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
  errors?: ValidationResult[];
  tipoEndereco?: string;
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
  errors,
  tipoEndereco,
}) => {
  const hasErrors = useMemo(() => {
    return {
      countryError: errors?.some(
        (error) =>
          error.nomeDoCampo ===
            `${tipoEndereco}[0].bairro.cidade.estado.pais.nome` &&
          !error.isValid
      ),
      stateError: errors?.some(
        (error) =>
          error.nomeDoCampo ===
            `${tipoEndereco}[0].bairro.cidade.estado.nome` && !error.isValid
      ),
      cityError: errors?.some(
        (error) =>
          error.nomeDoCampo === `${tipoEndereco}[0].bairro.cidade.nome` &&
          !error.isValid
      ),
      neighborhoodError: errors?.some(
        (error) =>
          error.nomeDoCampo === `${tipoEndereco}[0].bairro.nome` &&
          !error.isValid
      ),
    };
  }, [errors, tipoEndereco]);

  return (
    <div className="flex gap-6">
      <CountryInput
        country={country}
        setCountry={setCountry}
        hasError={hasErrors.countryError}
      />
      <StateInput
        state={state}
        setState={setState}
        hasError={hasErrors.stateError}
      />
      <CityInput city={city} setCity={setCity} hasError={hasErrors.cityError} />
      <NeighborhoodInput
        neighborhood={neighborhood}
        setNeighborhood={setNeighborhood}
        hasError={hasErrors.neighborhoodError}
      />
    </div>
  );
};

export default SecondLine;
