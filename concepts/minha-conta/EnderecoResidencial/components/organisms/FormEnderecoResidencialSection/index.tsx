import ViewSection from "@/components/ui/view-section";
import { useEnderecoResidencialContext } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext";
import { useBuscarCep } from "@/lib/useBuscarCep";
import Image from "next/image";
import { useEffect } from "react";
import SalvarEdicaoEnderecoResidencialButton from "../../atoms/SalvarEdicaoEnderecoResidencialButton";
import FirstLine from "../../molecules/FirstLine";
import FourthLine from "../../molecules/FourthLine";
import SecondLine from "../../molecules/SecondLine";
import ThirdLine from "../../molecules/ThirdLine";
import ViewEnderecosDataTable from "../ViewEnderecosDataTable";

const FormEnderecoResidencialSection: React.FC = () => {
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
    <div>
      <ViewSection
        icon={
          <Image src="/icons/home.svg" alt="Bookly" width={30} height={30} />
        }
        title="Endereço residencial"
        subtitle="Cadastre, visualize e edite os dados do seu endereço residencial"
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
        <div className="flex justify-end">
          <SalvarEdicaoEnderecoResidencialButton />
        </div>
        <ViewEnderecosDataTable />
      </ViewSection>
    </div>
  );
};

export default FormEnderecoResidencialSection;
