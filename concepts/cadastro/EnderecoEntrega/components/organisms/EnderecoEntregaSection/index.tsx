import Section from "@/components/ui/section";
import FirstLine from "@/concepts/cadastro/EnderecoResidencial/components/molecules/FirstLine";
import SecondLine from "@/concepts/cadastro/EnderecoResidencial/components/molecules/SecondLine";
import ThirdLine from "@/concepts/cadastro/EnderecoResidencial/components/molecules/ThirdLine";
import Image from "next/image";
import { useEnderecoEntregaContext } from "../../../contexts/EnderecoEntregaContext";

const EnderecoEntregaSection: React.FC = () => {
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
  } = useEnderecoEntregaContext();
  return (
    <Section
      icon={<Image src="/icons/box.svg" alt="Bookly" width={30} height={30} />}
      title="Endereço de entrega"
      subtitle="Preencha os dados do seu endereço de entrega"
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

export default EnderecoEntregaSection;
