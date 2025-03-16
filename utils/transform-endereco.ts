import { EnderecoType } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext/types";
import { Endereco } from "@/concepts/cadastro/types";

export const transformEndereco = (enderecos: Endereco[]): EnderecoType[] => {
  return enderecos.map((endereco) => ({
    id: String(endereco.id),
    cep: endereco.cep,
    city: endereco.bairro.cidade.nome,
    country: endereco.bairro.cidade.estado.pais.nome,
    logradouro: endereco.logradouro,
    tipoLogradouro: endereco.tipoLogradouro.nome ?? "",
    tipoLogradouroId: String(endereco.tipoLogradouro.id),
    neighborhood: endereco.bairro.nome,
    number: endereco.numero,
    observations: endereco.observacoes,
    residenceType: endereco.tipoResidencia.nome ?? "",
    residenceTypeId: String(endereco.tipoResidencia.id),
    state: endereco.bairro.cidade.estado.nome,
    shortPhrase: endereco.fraseIdentificacao,
    principal: endereco.principal,
  }));
};
