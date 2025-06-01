import { useCartaoCreditoContext } from "@/concepts/cadastro/CartaoCredito/contexts/CartaoCreditoContextProvider";
import { useEnderecoEntregaContext } from "@/concepts/cadastro/EnderecoEntrega/contexts/EnderecoEntregaContext";
import { useCarrinhoContext } from "@/concepts/carrinho/contexts/CarrinhoContext";
import { useFinalizarPedidoContext } from "@/concepts/finalizar-pedido/contexts/FinalizarPedidoContext";
import { useFetchBuscarCliente } from "@/concepts/minha-conta/VisualizarInformacoes/hooks/useFetchBuscarCliente";
import { transformCartaoCredito } from "@/utils/transform-cartao-credito";
import { transformEndereco } from "@/utils/transform-endereco";
import { useEffect, useMemo } from "react";
import ConferenciaSection from "../../molecules/ConferenciaSection";
import FormasPagamentoSection from "../../molecules/FormasPagamentoSection";
import MetodosEnvioSection from "../../molecules/MetodosEnvioSection";

const FinalizarPedidosPage: React.FC = () => {
  const id = useMemo(() => {
    return localStorage.getItem("cliente") ?? "";
  }, []);
  const { data } = useFetchBuscarCliente(id);
  const { id: idCarrinho } = useCarrinhoContext();
  const {
    isSelected,
    setEnderecoId,
    setCartoesId,
    enderecoId,
    cartoesId,
    valorPedido,
    valorFrete,
    desconto,
    itensPedido,
    cuponsTrocaSelecionados,
  } = useFinalizarPedidoContext();
  const { setEnderecos: setEnderecosEntrega } = useEnderecoEntregaContext();
  const { setCartoesCredito: setCartoesCredito } = useCartaoCreditoContext();

  const objectToSave = useMemo(() => {
    return {
      carrinhoId: idCarrinho,
      enderecoId: enderecoId,
      cartoesCreditoId: cartoesId,
      valorPedido: valorPedido - desconto + valorFrete,
      valorFrete: valorFrete,
      clienteId: String(id) ?? "",
      itensPedido,
      cuponsTroca: cuponsTrocaSelecionados,
    };
  }, [
    idCarrinho,
    enderecoId,
    cartoesId,
    valorPedido,
    id,
    desconto,
    valorFrete,
    itensPedido,
    cuponsTrocaSelecionados,
  ]);

  useEffect(() => {
    if (!data) return;
    setEnderecosEntrega(
      transformEndereco(
        data.enderecoEntrega.sort((a, b) => {
          if (a.id == null) return 1;
          if (b.id == null) return -1;
          return a.id - b.id;
        })
      )
    );
    const enderecoPrincipal = data.enderecoEntrega.find(
      (endereco) => endereco.principal
    );
    setEnderecoId(String(enderecoPrincipal?.id));
    setCartoesCredito(
      transformCartaoCredito(
        data.cartaoCredito.sort((a, b) => {
          if (a.id == null) return 1;
          if (b.id == null) return -1;
          return a.id - b.id;
        })
      )
    );
    const cartaoPrincipal = data.cartaoCredito.find(
      (cartao) => cartao.principal
    );
    setCartoesId([String(cartaoPrincipal?.id)]);
  }, [
    setEnderecosEntrega,
    setCartoesCredito,
    data,
    setEnderecoId,
    setCartoesId,
  ]);

  const currentSection = useMemo(() => {
    if (isSelected.conferencia) return <ConferenciaSection />;
    if (isSelected.metodoEnvio) return <MetodosEnvioSection />;
    if (isSelected.formaPagamento)
      return <FormasPagamentoSection pedidoToSave={objectToSave} />;
  }, [isSelected, objectToSave]);

  return <div className="p-6">{currentSection}</div>;
};

export default FinalizarPedidosPage;
