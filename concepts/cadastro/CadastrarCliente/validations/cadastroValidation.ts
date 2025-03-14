import * as yup from "yup";

export const cadastroSchema = yup.object().shape({
  generoId: yup.number().required().min(1),
  nome: yup.string().required(),
  dataNascimento: yup
    .date()
    .required()
    .test("is-valid-date", (value) => {
      return value instanceof Date && !isNaN(value.getTime());
    }),
  cpf: yup.string().required(),
  email: yup.string().required(),
  confirmacaoSenha: yup.string().required(),
  senha: yup.string().required(),
  telefone: yup.string().required(),
  tipoTelefoneId: yup.number().required().min(1),
  ddd: yup.string().required(),
  enderecoResidencial: yup
    .array()
    .of(
      yup.object({
        tipoLogradouro: yup.object({
          id: yup.number().required().min(1),
        }),
        tipoResidencia: yup.object({
          id: yup.number().required().min(1),
        }),
        logradouro: yup.string().required(),
        numero: yup.string().required(),
        bairro: yup.object({
          nome: yup.string().required(),
          cidade: yup.object({
            nome: yup.string().required(),
            estado: yup.object({
              nome: yup.string().required(),
              pais: yup.object({
                nome: yup.string().required(),
              }),
            }),
          }),
        }),
        cep: yup.string().required(),
        fraseIdentificacao: yup.string().required(),
      })
    )
    .required(),
  enderecoCobranca: yup
    .array()
    .of(
      yup.object({
        tipoLogradouro: yup.object({
          id: yup.number().required().min(1),
        }),
        tipoResidencia: yup.object({
          id: yup.number().required().min(1),
        }),
        logradouro: yup.string().required(),
        numero: yup.string().required(),
        bairro: yup.object({
          nome: yup.string().required(),
          cidade: yup.object({
            nome: yup.string().required(),
            estado: yup.object({
              nome: yup.string().required(),
              pais: yup.object({
                nome: yup.string().required(),
              }),
            }),
          }),
        }),
        cep: yup.string().required(),
        fraseIdentificacao: yup.string().required(),
      })
    )
    .required(),
  enderecoEntrega: yup
    .array()
    .of(
      yup.object({
        tipoLogradouro: yup.object({
          id: yup.number().required().min(1),
        }),
        tipoResidencia: yup.object({
          id: yup.number().required().min(1),
        }),
        logradouro: yup.string().required(),
        numero: yup.string().required(),
        bairro: yup.object({
          nome: yup.string().required(),
          cidade: yup.object({
            nome: yup.string().required(),
            estado: yup.object({
              nome: yup.string().required(),
              pais: yup.object({
                nome: yup.string().required(),
              }),
            }),
          }),
        }),
        cep: yup.string().required(),
        fraseIdentificacao: yup.string().required(),
      })
    )
    .required(),
  cartaoCredito: yup
    .array()
    .of(
      yup.object({
        numero: yup.string().required(),
        nomeImpresso: yup.string().required(),
        bandeira: yup.object({
          id: yup.number().required().min(1),
        }),
        codigoSeguranca: yup.string().required(),
      })
    )
    .required(),
});
