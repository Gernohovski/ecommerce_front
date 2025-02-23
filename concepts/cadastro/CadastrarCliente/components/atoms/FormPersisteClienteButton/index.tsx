import { Button } from "@/components/ui/button";
import { useCartaoCreditoContext } from "@/concepts/cadastro/CartaoCredito/contexts/CartaoCreditoContextProvider";
import { useDadosBasicosContext } from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";
import { useEnderecoCobrancaContext } from "@/concepts/cadastro/EnderecoCobranca/contexts/EnderecoCobrancaContext";
import { useEnderecoResidencialContext } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { toast } from "react-toastify";
import useCadastrarCliente from "../../../hooks/useCadastrarCliente";

const FormPersisteClienteButton: React.FC = () => {
  const { birthDate, cpf, email, gender, name, password, telephone } =
    useDadosBasicosContext();
  const { cardFlag, cardNumber, cardSecurityCode, cardPrintedName } =
    useCartaoCreditoContext();
  const router = useRouter();
  const { mutate } = useCadastrarCliente();
  const {
    cep: cepResidencial,
    city: cityResidencial,
    country: countryResidencial,
    logradouro: logradouroResidencial,
    tipoLogradouro: tipoLogradouroResidencial,
    neighborhood: neighborhoodResidencial,
    number: numberResidencial,
    observations: observationsResidencial,
    residenceType: residenceTypeResidencial,
    state: stateResidencial,
  } = useEnderecoResidencialContext();
  const {
    cep: cepCobranca,
    city: cityCobranca,
    country: countryCobranca,
    logradouro: logradouroCobranca,
    tipoLogradouro: tipoLogradouroCobranca,
    neighborhood: neighborhoodCobranca,
    number: numberCobranca,
    observations: observationsCobranca,
    residenceType: residenceTypeCobranca,
    state: stateCobranca,
  } = useEnderecoCobrancaContext();
  const {
    cep: cepEntrega,
    city: cityEntrega,
    country: countryEntrega,
    logradouro: logradouroEntrega,
    tipoLogradouro: tipoLogradouroEntrega,
    neighborhood: neighborhoodEntrega,
    number: numberEntrega,
    observations: observationsEntrega,
    residenceType: residenceTypeEntrega,
    state: stateEntrega,
  } = useEnderecoResidencialContext();

  const objectToSave = useMemo(() => {
    return {
      generoId: Number(gender),
      nome: name,
      dataNascimento: birthDate ? new Date(birthDate) : new Date(),
      cpf,
      email,
      senha: password,
      telefone: telephone,
      tipoTelefoneId: 1,
      ddd: telephone.substring(0, 2),
      enderecoResidencial: [
        {
          tipoLogradouro: {
            id: Number(tipoLogradouroResidencial),
          },
          tipoResidencia: {
            id: Number(residenceTypeResidencial),
          },
          logradouro: logradouroResidencial,
          numero: numberResidencial,
          bairro: {
            nome: neighborhoodResidencial,
            cidade: {
              nome: cityResidencial,
              estado: {
                nome: stateResidencial,
                pais: {
                  nome: countryResidencial,
                },
              },
            },
          },
          cep: cepResidencial,
          observacoes: observationsResidencial,
          fraseIdentificacao: observationsResidencial,
        },
      ],
      enderecoCobranca: [
        {
          tipoLogradouro: {
            id: Number(tipoLogradouroCobranca),
          },
          tipoResidencia: {
            id: Number(residenceTypeCobranca),
          },
          logradouro: logradouroCobranca,
          numero: numberCobranca,
          bairro: {
            nome: neighborhoodCobranca,
            cidade: {
              nome: cityCobranca,
              estado: {
                nome: stateCobranca,
                pais: {
                  nome: countryCobranca,
                },
              },
            },
          },
          cep: cepCobranca,
          observacoes: observationsCobranca,
          fraseIdentificacao: observationsCobranca,
        },
      ],
      enderecoEntrega: [
        {
          tipoLogradouro: {
            id: Number(tipoLogradouroEntrega),
          },
          tipoResidencia: {
            id: Number(residenceTypeEntrega),
          },
          logradouro: logradouroEntrega,
          numero: numberEntrega,
          bairro: {
            nome: neighborhoodEntrega,
            cidade: {
              nome: cityEntrega,
              estado: {
                nome: stateEntrega,
                pais: {
                  nome: countryEntrega,
                },
              },
            },
          },
          cep: cepEntrega,
          observacoes: observationsEntrega,
          fraseIdentificacao: observationsEntrega,
        },
      ],
      cartaoCredito: [
        {
          numero: cardNumber,
          nomeImpresso: cardPrintedName,
          bandeira: {
            id: Number(cardFlag),
          },
          codigoSeguranca: cardSecurityCode,
        },
      ],
    };
  }, [
    birthDate,
    cpf,
    email,
    gender,
    name,
    password,
    telephone,
    cardFlag,
    cardNumber,
    cardSecurityCode,
    cardPrintedName,
    cepResidencial,
    cityResidencial,
    countryResidencial,
    logradouroResidencial,
    tipoLogradouroResidencial,
    neighborhoodResidencial,
    numberResidencial,
    observationsResidencial,
    residenceTypeResidencial,
    stateResidencial,
    cepCobranca,
    cityCobranca,
    countryCobranca,
    logradouroCobranca,
    tipoLogradouroCobranca,
    neighborhoodCobranca,
    numberCobranca,
    observationsCobranca,
    residenceTypeCobranca,
    stateCobranca,
    cepEntrega,
    cityEntrega,
    countryEntrega,
    logradouroEntrega,
    tipoLogradouroEntrega,
    neighborhoodEntrega,
    numberEntrega,
    observationsEntrega,
    residenceTypeEntrega,
    stateEntrega,
  ]);

  const handleCancel = () => {
    router.push("/home");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(objectToSave, {
      onSuccess: () => {
        toast.success("Cliente criado com sucesso!");
        router.push("/login");
      },
      onError: () => {
        toast.error("Erro ao salvar cliente");
      },
    });
  };

  return (
    <div className="flex justify-end py-2 gap-4">
      <Button
        className="shadow-md w-[150px]"
        variant={"outline"}
        onClick={handleCancel}
      >
        Cancelar
      </Button>
      <Button className="shadow-md w-[150px]" onClick={handleSubmit}>
        Cadastrar
      </Button>
    </div>
  );
};

export default FormPersisteClienteButton;
