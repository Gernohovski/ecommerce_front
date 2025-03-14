import { Button } from "@/components/ui/button";
import { useCartaoCreditoContext } from "@/concepts/cadastro/CartaoCredito/contexts/CartaoCreditoContextProvider";
import { useDadosBasicosContext } from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";
import { useEnderecoCobrancaContext } from "@/concepts/cadastro/EnderecoCobranca/contexts/EnderecoCobrancaContext";
import { useEnderecoResidencialContext } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext";
import validateSchema from "@/utils/validate-schema";
import { validatePassword } from "@/utils/validate-senha";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { toast } from "react-toastify";
import { useCadastrarClienteContext } from "../../../contexts/CadastrarClienteContext";
import useCadastrarCliente from "../../../hooks/useCadastrarCliente";
import { cadastroSchema } from "../../../validations/cadastroValidation";

const FormPersisteClienteButton: React.FC = () => {
  const { errors, setErrors } = useCadastrarClienteContext();
  const {
    birthDate,
    cpf,
    email,
    gender,
    name,
    password,
    telephone,
    ddd,
    telephoneType,
    confirmPassword,
  } = useDadosBasicosContext();
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
    shortPhrase: shortPhraseResidencial,
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
    shortPhrase: shortPhraseCobranca,
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
    shortPhrase: shortPhraseEntrega,
  } = useEnderecoResidencialContext();

  const objectToSave = useMemo(() => {
    return {
      generoId: Number(gender),
      nome: name,
      dataNascimento: birthDate ? new Date(birthDate) : undefined,
      cpf,
      email,
      senha: password,
      confirmacaoSenha: confirmPassword,
      telefone: telephone,
      tipoTelefoneId: Number(telephoneType),
      ddd: ddd,
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
          fraseIdentificacao: shortPhraseResidencial,
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
          fraseIdentificacao: shortPhraseCobranca,
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
          fraseIdentificacao: shortPhraseEntrega,
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
    confirmPassword,
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
    shortPhraseEntrega,
    shortPhraseResidencial,
    shortPhraseCobranca,
    telephoneType,
    ddd,
  ]);

  const handleCancel = () => {
    router.push("/home");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //@ts-expect-error desabilitado devido a erro de validação
    validateSchema(cadastroSchema, objectToSave, setErrors);
    if (errors) return toast.error("Há campos obrigatórios não preenchidos.");
    if (!validatePassword(password)) {
      const mensagem = `A senha deve conter: <br />- Mínimo 8 caracteres. <br />- Primeira letra maiúscula. <br />- Pelo menos 1 caractere especial.`;
      toast.error(<div dangerouslySetInnerHTML={{ __html: mensagem }} />);
      return;
    }
    if (password != confirmPassword) {
      toast.error("A senha e a confirmação de senha devem coincidir.");
      return;
    }
    mutate(objectToSave, {
      onSuccess: () => {
        toast.success("Cadastro efetuado com sucesso!");
        router.push("/login");
      },
      onError: () => {
        toast.error("Ocorreu um erro ao efetuar o cadastro.");
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
