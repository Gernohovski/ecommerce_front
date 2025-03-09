import ViewSection from "@/components/ui/view-section";
import { useDadosBasicosContext } from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";
import { useEnderecoCobrancaContext } from "@/concepts/cadastro/EnderecoCobranca/contexts/EnderecoCobrancaContext";
import FirstLine from "@/concepts/cadastro/EnderecoResidencial/components/molecules/FirstLine";
import FourthLine from "@/concepts/cadastro/EnderecoResidencial/components/molecules/FourthLine";
import SecondLine from "@/concepts/cadastro/EnderecoResidencial/components/molecules/SecondLine";
import ThirdLine from "@/concepts/cadastro/EnderecoResidencial/components/molecules/ThirdLine";
import FormFooter from "@/concepts/minha-conta/EnderecoResidencial/components/molecules/FormFooter";
import { useBuscarCep } from "@/lib/useBuscarCep";
import Image from "next/image";
import { useEffect, useMemo } from "react";

const FormEnderecoCobrancaSection: React.FC = () => {
  const { id } = useDadosBasicosContext();
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
    isEditando,
    setIsEditando,
    isCadastrando,
    setIsCadastrando,
    clearForm,
  } = useEnderecoCobrancaContext();

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

  const endereco = useMemo(() => {
    return {
      tipoResidenciaId: Number(residenceType),
      tipoLogradouroId: Number(tipoLogradouro),
      logradouro: logradouro,
      numero: number,
      bairro: neighborhood,
      cidade: city,
      estado: state,
      pais: country,
      cep: cep,
      observacoes: observations,
      fraseIdentificacao: shortPhrase,
      clienteId: String(id) ?? "",
      tipoEndereco: "COBRANCA",
    };
  }, [
    cep,
    city,
    country,
    logradouro,
    tipoLogradouro,
    neighborhood,
    number,
    observations,
    residenceType,
    state,
    shortPhrase,
    id,
  ]);

  return (
    <div>
      <ViewSection
        icon={
          <Image src="/icons/dollar.svg" alt="Bookly" width={30} height={30} />
        }
        title="Endereço de cobrança"
        subtitle="Cadastre, visualize e edite os dados do seu endereço de cobrança"
        footer={
          <FormFooter
            isEditando={isEditando}
            setIsEditando={setIsEditando}
            isCadastrando={isCadastrando}
            setIsCadastrando={setIsCadastrando}
            clearForm={clearForm}
            endereco={endereco}
          />
        }
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
      </ViewSection>
    </div>
  );
};

export default FormEnderecoCobrancaSection;
