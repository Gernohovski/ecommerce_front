import Section from "@/components/ui/section";
import FirstLine from "@/concepts/cadastro/EnderecoResidencial/components/molecules/FirstLine";
import SecondLine from "@/concepts/cadastro/EnderecoResidencial/components/molecules/SecondLine";
import ThirdLine from "@/concepts/cadastro/EnderecoResidencial/components/molecules/ThirdLine";
import Image from "next/image";
import { useEnderecoCobrancaContext } from "../../../contexts/EnderecoCobrancaContext";

const EnderecoCobrancaSection: React.FC = () => {
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
  } = useEnderecoCobrancaContext();
  return (
    <Section
      icon={
        <Image src="/icons/dollar.svg" alt="Bookly" width={30} height={30} />
      }
      title="Endereço de cobrança"
      subtitle="Preencha os dados do seu endereço de cobrança"
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

export default EnderecoCobrancaSection;
