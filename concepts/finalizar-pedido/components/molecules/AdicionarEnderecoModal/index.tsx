import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import { useEnderecoEntregaContext } from "@/concepts/cadastro/EnderecoEntrega/contexts/EnderecoEntregaContext";
import FirstLine from "@/concepts/cadastro/EnderecoResidencial/components/molecules/FirstLine";
import FourthLine from "@/concepts/cadastro/EnderecoResidencial/components/molecules/FourthLine";
import SecondLine from "@/concepts/cadastro/EnderecoResidencial/components/molecules/SecondLine";
import ThirdLine from "@/concepts/cadastro/EnderecoResidencial/components/molecules/ThirdLine";
import { useSessionContext } from "@/concepts/login/contexts/SessionContext";
import useCadastrarEnderecoCliente from "@/concepts/minha-conta/VisualizarInformacoes/hooks/useCadastrarEnderecoCliente";
import { useBuscarCep } from "@/lib/useBuscarCep";
import errorMessage, { APIError } from "@/utils/error-message";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useCallback, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { toast } from "react-toastify";

interface AdicionarEnderecoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdicionarEnderecoModal: React.FC<AdicionarEnderecoModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { clienteId } = useSessionContext();
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
    clearForm,
  } = useEnderecoEntregaContext();
  const { mutate } = useCadastrarEnderecoCliente();
  const queryClient = useQueryClient();
  const { data } = useBuscarCep(cep);

  const enderecoToSave = useMemo(() => {
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
      clienteId: String(clienteId) ?? localStorage.getItem("cliente"),
      tipoEndereco: "ENTREGA",
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
    clienteId,
  ]);

  const handleButtonClick = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      mutate(enderecoToSave, {
        onSuccess: () => {
          toast.success("Endereço atualizado com sucesso!");
          queryClient.invalidateQueries({ queryKey: ["getCliente"] });
          onClose();
          clearForm();
        },
        onError: (error: APIError) => {
          errorMessage(error);
        },
      });
    },
    [mutate, enderecoToSave, queryClient, clearForm, onClose]
  );

  useEffect(() => {
    if (data?.erro) toast.error("Erro ao buscar pelo CEP informado.");
    if (data && !data.erro) {
      setCity(data.localidade || "");
      setState(data.estado || "");
      setNeighborhood(data.bairro || "");
      setLogradouro(data.logradouro || "");
      setCounty("Brasil");
    }
  }, [data, setCity, setState, setNeighborhood, setLogradouro, setCounty]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 top-[75px]">
      <div className="relative w-auto h-auto bg-white rounded-[20px] shadow-lg">
        <Section
          icon={
            <Image src="/icons/box.svg" alt="Bookly" width={30} height={30} />
          }
          title="Endereço de entrega"
          subtitle="Preencha os dados do seu endereço de entrega"
          closeButton={
            <div
              className="cursor-pointer"
              onClick={() => {
                onClose();
                clearForm();
              }}
            >
              <Image
                src="/icons/close.svg"
                alt="fechar"
                width={24}
                height={24}
              />
            </div>
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
            tipoEndereco="enderecoEntrega"
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
            tipoEndereco="enderecoEntrega"
          />
          <ThirdLine
            residenceType={residenceType}
            setResidenceType={setResidenceType}
            shortPhrase={shortPhrase}
            setShortPhrase={setShortPhrase}
            tipoEndereco="enderecoEntrega"
          />
          <FourthLine
            observations={observations}
            setObservations={setObservations}
            tipoEndereco="enderecoEntrega"
          />
        </Section>
        <div className="pr-6 pb-6 flex justify-end">
          <Button onClick={handleButtonClick}>
            Cadastrar endereço de entrega
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default AdicionarEnderecoModal;
