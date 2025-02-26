import { useCartaoCreditoContext } from "@/concepts/cadastro/CartaoCredito/contexts/CartaoCreditoContextProvider";
import { useDadosBasicosContext } from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";
import { useEnderecoCobrancaContext } from "@/concepts/cadastro/EnderecoCobranca/contexts/EnderecoCobrancaContext";
import { useEnderecoEntregaContext } from "@/concepts/cadastro/EnderecoEntrega/contexts/EnderecoEntregaContext";
import { useEnderecoResidencialContext } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext";
import FormCartaoCreditoSection from "@/concepts/minha-conta/CartoesCredito/components/organisms/FormCartaoCreditoSection";
import FormDadosBasicosSection from "@/concepts/minha-conta/DadosBasicos/components/organisms/FormDadosBasicosSection";
import FormEnderecoEntregaSection from "@/concepts/minha-conta/EnderecoEntrega/components/organisms/FormEnderecoEntregaSection";
import FormEnderecoResidencialSection from "@/concepts/minha-conta/EnderecoResidencial/components/organisms/FormEnderecoResidencialSection";
import FormEnderecoCobrancaSection from "@/concepts/minha-conta/EnderecosCobranca/components/organisms/FormEnderecoCobrancaSection";
import FormEditSegurancaSection from "@/concepts/minha-conta/Seguranca/components/organisms/FormEditSegurancaSection";
import MinhaContaSidebar from "@/concepts/minha-conta/Sidebar/components/organisms/MinhaContaSidebar";
import { useSidebarNavegacaoContext } from "@/concepts/minha-conta/Sidebar/contexts/SidebarNavegacaoContext";
import { transformCartaoCredito } from "@/utils/transform-cartao-credito";
import { transformEndereco } from "@/utils/transform-endereco";
import { useEffect, useMemo } from "react";
import { useFetchBuscarCliente } from "../../../hooks/useFetchBuscarCliente";

const ViewInformacoesPage: React.FC = () => {
  const id = useMemo(() => {
    return localStorage.getItem("cliente") ?? "";
  }, []);

  const { data } = useFetchBuscarCliente(id);
  const {
    setBirthDate,
    setCpf,
    setEmail,
    setGender,
    setName,
    setTelephone,
    setTelephoneType,
  } = useDadosBasicosContext();

  const { setEnderecos: setEnderecosResidenciais } =
    useEnderecoResidencialContext();
  const { setEnderecos: setEnderecosCobranca } = useEnderecoCobrancaContext();
  const { setEnderecos: setEnderecosEntrega } = useEnderecoEntregaContext();
  const { setCartoesCredito: setCartoesCredito } = useCartaoCreditoContext();

  useEffect(() => {
    if (!data) return;
    setBirthDate(data.dataNascimento);
    setCpf(data.cpf ?? "");
    setEmail(data.email ?? "");
    setGender(String(data.genero.id));
    setName(data.nome ?? "");
    setTelephone(`${data.telefone.ddd ?? ""}${data.telefone.telefone ?? ""}`);
    setTelephoneType(String(data.telefone.tipoTelefone.id));
    setEnderecosResidenciais(transformEndereco(data.enderecoResidencial));
    setEnderecosCobranca(transformEndereco(data.enderecoCobranca));
    setEnderecosEntrega(transformEndereco(data.enderecoEntrega));
    setCartoesCredito(transformCartaoCredito(data.cartaoCredito));
  }, [
    data,
    setBirthDate,
    setCpf,
    setEmail,
    setGender,
    setName,
    setTelephone,
    setTelephoneType,
    setEnderecosResidenciais,
    setEnderecosCobranca,
    setEnderecosEntrega,
    setCartoesCredito,
  ]);

  const {
    dadosBasicos,
    seguranca,
    enderecosResidenciais,
    enderecosCobranca,
    enderecosEntrega,
    cartoesCredito,
  } = useSidebarNavegacaoContext();

  const section = useMemo(() => {
    if (dadosBasicos) return <FormDadosBasicosSection />;
    if (seguranca) return <FormEditSegurancaSection />;
    if (enderecosResidenciais) return <FormEnderecoResidencialSection />;
    if (enderecosCobranca) return <FormEnderecoCobrancaSection />;
    if (enderecosEntrega) return <FormEnderecoEntregaSection />;
    if (cartoesCredito) return <FormCartaoCreditoSection />;
  }, [
    dadosBasicos,
    seguranca,
    enderecosResidenciais,
    enderecosCobranca,
    enderecosEntrega,
    cartoesCredito,
  ]);

  return (
    <div className="flex gap-10 h-auto">
      <MinhaContaSidebar />
      <div className="mt-6 mb-6">{section}</div>
    </div>
  );
};

export default ViewInformacoesPage;
