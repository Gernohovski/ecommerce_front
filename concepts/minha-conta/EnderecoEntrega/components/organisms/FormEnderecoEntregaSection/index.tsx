import ViewSection from "@/components/ui/view-section";
import { useDadosBasicosContext } from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";
import { useEnderecoEntregaContext } from "@/concepts/cadastro/EnderecoEntrega/contexts/EnderecoEntregaContext";
import FirstLine from "@/concepts/cadastro/EnderecoResidencial/components/molecules/FirstLine";
import FourthLine from "@/concepts/cadastro/EnderecoResidencial/components/molecules/FourthLine";
import SecondLine from "@/concepts/cadastro/EnderecoResidencial/components/molecules/SecondLine";
import ThirdLine from "@/concepts/cadastro/EnderecoResidencial/components/molecules/ThirdLine";
import FormFooter from "@/concepts/minha-conta/EnderecoResidencial/components/molecules/FormFooter";
import { useBuscarCep } from "@/lib/useBuscarCep";
import Image from "next/image";
import { useEffect, useMemo } from "react";

const FormEnderecoEntregaSection: React.FC = () => {
  const { id } = useDadosBasicosContext();
  const {
    id: enderecoId,
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
    errors,
    setErrors,
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

  const endereco = useMemo(() => {
    return {
      id: enderecoId,
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
      tipoEndereco: "ENTREGA",
      temporario: false,
    };
  }, [
    enderecoId,
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
          <Image src="/icons/box.svg" alt="Bookly" width={30} height={30} />
        }
        title="Endereço de entrega"
        subtitle="Cadastre, visualize e edite os dados do seu endereço de entrega"
        footer={
          <FormFooter
            isEditando={isEditando}
            setIsEditando={setIsEditando}
            isCadastrando={isCadastrando}
            setIsCadastrando={setIsCadastrando}
            clearForm={clearForm}
            endereco={endereco}
            errors={errors}
            setErrors={setErrors}
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
          errors={errors}
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
        />
        <ThirdLine
          residenceType={residenceType}
          setResidenceType={setResidenceType}
          shortPhrase={shortPhrase}
          setShortPhrase={setShortPhrase}
          errors={errors}
        />
        <FourthLine
          observations={observations}
          setObservations={setObservations}
        />
      </ViewSection>
    </div>
  );
};

export default FormEnderecoEntregaSection;
