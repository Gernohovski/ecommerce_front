import Section from "@/components/ui/section";
import FirstLine from "@/concepts/cadastro/EnderecoResidencial/components/molecules/FirstLine";
import FourthLine from "@/concepts/cadastro/EnderecoResidencial/components/molecules/FourthLine";
import SecondLine from "@/concepts/cadastro/EnderecoResidencial/components/molecules/SecondLine";
import ThirdLine from "@/concepts/cadastro/EnderecoResidencial/components/molecules/ThirdLine";
import { useEnderecoResidencialContext } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext";
import { useBuscarCep } from "@/lib/useBuscarCep";
import Image from "next/image";
import { useEffect } from "react";
import { useEnderecoEntregaContext } from "../../../contexts/EnderecoEntregaContext";

const EnderecoEntregaSection: React.FC = () => {
  const { useEnderecoEntrega } = useEnderecoResidencialContext();
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
    shortPhrase,
    setShortPhrase,
  } = useEnderecoEntregaContext();

  const { data } = useBuscarCep(cep);

  useEffect(() => {
    if (data && !data.erro) {
      setCity(data.localidade || "");
      setState(data.estado || "");
      setNeighborhood(data.bairro || "");
      setLogradouro(data.logradouro || "");
      setCounty("Brasil");
    }
  }, [data, setCity, setState, setNeighborhood, setLogradouro, setCounty]);

  return (
    <Section
      icon={<Image src="/icons/box.svg" alt="Bookly" width={30} height={30} />}
      title="Endereço de entrega"
      subtitle="Preencha os dados do seu endereço de entrega"
      disabled={useEnderecoEntrega}
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
        shortPhrase={shortPhrase}
        setShortPhrase={setShortPhrase}
      />
      <FourthLine
        observations={observations}
        setObservations={setObservations}
      />
    </Section>
  );
};

export default EnderecoEntregaSection;
