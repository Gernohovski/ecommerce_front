import Section from "@/components/ui/section";
import Image from "next/image";
import { useEnderecoResidencialContext } from "../../../contexts/EnderecoResidencialContext";
import FirstLine from "../../molecules/FirstLine";
import SecondLine from "../../molecules/SecondLine";
import ThirdLine from "../../molecules/ThirdLine";

const EnderecoResidencialSection: React.FC = () => {
  const {
    cep,
    setCep,
    city,
    setCity,
    country,
    setCounty,
    logradouro,
    setLogradouro,
    tipoLogradouro,
    setTipoLogradouro,
    neighborhood,
    setNeighborhood,
    number,
    setNumber,
    observations,
    setObservations,
    residenceType,
    setResidenceType,
    state,
    setState,
  } = useEnderecoResidencialContext();
  return (
    <Section
      icon={<Image src="/icons/home.svg" alt="Bookly" width={30} height={30} />}
      title="Endereço residencial"
      subtitle="Preencha os dados do seu endereço residencial"
    >
      <FirstLine
        cep={cep}
        setCep={setCep}
        logradouro={logradouro}
        setLogradouro={setLogradouro}
        logradouroType={tipoLogradouro}
        setLogradouroType={setTipoLogradouro}
        number={number}
        setNumber={setNumber}
      />
      <SecondLine
        country={country}
        setCountry={setCounty}
        state={state}
        setState={setState}
        city={city}
        setCity={setCity}
        neighborhood={neighborhood}
        setNeighborhood={setNeighborhood}
      />
      <ThirdLine
        residenceType={residenceType}
        setResidenceType={setResidenceType}
        observations={observations}
        setObservations={setObservations}
      />
    </Section>
  );
};

export default EnderecoResidencialSection;
