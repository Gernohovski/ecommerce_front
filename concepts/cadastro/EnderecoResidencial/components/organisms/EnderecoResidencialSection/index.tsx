import Section from "@/components/ui/section";
import { useCadastrarClienteContext } from "@/concepts/cadastro/CadastrarCliente/contexts/CadastrarClienteContext";
import { useBuscarCep } from "@/lib/useBuscarCep";
import Image from "next/image";
import { useEffect } from "react";
import { useEnderecoResidencialContext } from "../../../contexts/EnderecoResidencialContext";
import CheckboxCobranca from "../../atoms/CheckboxCobranca";
import CheckboxEntrega from "../../atoms/CheckboxEntrega";
import FirstLine from "../../molecules/FirstLine";
import FourthLine from "../../molecules/FourthLine";
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
    shortPhrase,
    setShortPhrase,
  } = useEnderecoResidencialContext();
  const { errors } = useCadastrarClienteContext();
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
        errors={errors}
        tipoEndereco="enderecoResidencial"
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
        errors={errors}
        tipoEndereco="enderecoResidencial"
      />
      <ThirdLine
        residenceType={residenceType}
        setResidenceType={setResidenceType}
        shortPhrase={shortPhrase}
        setShortPhrase={setShortPhrase}
        errors={errors}
        tipoEndereco="enderecoResidencial"
      />
      <FourthLine
        observations={observations}
        setObservations={setObservations}
      />
      <hr></hr>
      <CheckboxCobranca />
      <CheckboxEntrega />
    </Section>
  );
};

export default EnderecoResidencialSection;
