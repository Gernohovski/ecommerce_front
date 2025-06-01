"use client";
import { useCarrinhoContext } from "@/concepts/carrinho/contexts/CarrinhoContext";
import { CupomResponse } from "@/concepts/cupom/hooks/useCadastrarCupom/types";
import { useSessionContext } from "@/concepts/login/contexts/SessionContext";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { toast } from "react-toastify";
import { ItemPedido } from "../../hooks/useFazerPedido/types";
import { useFetchCupomCliente } from "../../hooks/useFetchCupomCliente";
import { CupomTrocaResponse } from "../../hooks/useFetchCupomCliente/types";
import { useFetchFrete } from "../../hooks/useFetchFrete";
import { FinalizarPedidoContextType } from "./types";

const FinalizarPedidoContext = createContext({} as FinalizarPedidoContextType);

export const useFinalizarPedidoContext = () =>
  useContext(FinalizarPedidoContext);

const FinalizarPedidoContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isSelected, setIsSelected] = useState<{
    conferencia: boolean;
    metodoEnvio: boolean;
    formaPagamento: boolean;
  }>({
    conferencia: true,
    metodoEnvio: false,
    formaPagamento: false,
  });
  const [cupons, setCupons] = useState<CupomResponse[]>([]);
  const [valorPedido, setValorPedido] = useState<number>(0);
  const [desconto, setDesconto] = useState<number>(0);
  const [enderecoId, setEnderecoId] = useState<string>("");
  const [cartoesId, setCartoesId] = useState<string[]>([]);
  const [valorFrete, setValorFrete] = useState<number>(0);
  const [prazoDias, setPrazoDias] = useState<number>(0);
  const [itensPedido, setItensPedido] = useState<ItemPedido[]>([]);
  const [cuponsTroca, setCuponsTroca] = useState<CupomTrocaResponse[]>([]);
  const [cuponsTrocaSelecionados, setCuponsTrocaSelecionados] = useState<
    CupomTrocaResponse[]
  >([]);
  const { itensCarrinho } = useCarrinhoContext();
  const { clienteId } = useSessionContext();

  const pesoPedido = useMemo(() => {
    return itensCarrinho.reduce((total, item) => {
      return total + item.livro.peso * item.quantidade;
    }, 0);
  }, [itensCarrinho]);

  const { data } = useFetchFrete(enderecoId, pesoPedido);

  const { data: cuponsCliente } = useFetchCupomCliente(
    String(clienteId) ?? localStorage.getItem("cliente")
  );

  useEffect(() => {
    if (cuponsCliente) {
      setCuponsTroca(cuponsCliente);
    }
  }, [cuponsCliente]);

  useEffect(() => {
    if (data) {
      setValorFrete(data.valorFrete);
      setPrazoDias(data.prazoDias);
    }
  }, [data]);

  const handleRemoverCupom = (id: number) => {
    setCupons((prevCupons) => prevCupons.filter((cupom) => cupom.id !== id));
  };

  const clearForm = useCallback(() => {
    setCupons([]);
    setValorPedido(0);
    setDesconto(0);
    setEnderecoId("");
    setCartoesId([]);
  }, [setCupons, setValorPedido, setDesconto, setEnderecoId, setCartoesId]);

  useEffect(() => {
    if (itensCarrinho && itensCarrinho.length > 0) {
      const totalPedido = itensCarrinho.reduce((acc, item) => {
        return acc + item.livro?.valorVenda * item?.quantidade;
      }, 0);
      setValorPedido(totalPedido);
      const descontosPorcentagem = cupons.reduce((acc, cupom) => {
        return acc + (cupom.porcentagemDesconto ?? 0);
      }, 0);
      const descontoFixos = cuponsTrocaSelecionados.reduce((acc, cupom) => {
        return acc + (cupom.valorDesconto ?? 0);
      }, 0);

      let descontoTotal = 0;
      if (descontosPorcentagem < 1) {
        descontoTotal = descontosPorcentagem * totalPedido;
      } else {
        toast.info(
          "Não é possível ter mais de 100% de desconto em uma compra."
        );
        descontoTotal = 1 * totalPedido;
      }
      descontoTotal += descontoFixos;
      if (descontoTotal > totalPedido) {
        descontoTotal = totalPedido;
      }
      setDesconto(descontoTotal);
      const novosItensComDesconto = itensCarrinho.map((item) => {
        const valorItem = item.livro?.valorVenda * item.quantidade;
        const proporcao = valorItem / totalPedido;
        const descontoItem = proporcao * descontoTotal;
        return {
          livro: item.livro,
          quantidade: item.quantidade,
          trocaAberta: false,
          devolucaoAberta: false,
          quantidadeTroca: 0,
          quantidadeDevolucao: 0,
          valor: valorItem - descontoItem,
        };
      });

      setItensPedido(novosItensComDesconto);
    } else {
      setValorPedido(0);
      setDesconto(0);
      setItensPedido([]);
    }
  }, [itensCarrinho, cupons, cuponsTrocaSelecionados]);

  const values = useMemo(
    () => ({
      valorPedido,
      desconto,
      setValorPedido,
      setDesconto,
      cupons,
      setCupons,
      isSelected,
      setIsSelected,
      handleRemoverCupom,
      enderecoId,
      setEnderecoId,
      cartoesId,
      setCartoesId,
      clearForm,
      valorFrete,
      prazoDias,
      itensPedido,
      setItensPedido,
      cuponsTroca,
      setCuponsTroca,
      cuponsTrocaSelecionados,
      setCuponsTrocaSelecionados,
    }),
    [
      isSelected,
      cupons,
      desconto,
      valorPedido,
      enderecoId,
      cartoesId,
      clearForm,
      valorFrete,
      prazoDias,
      itensPedido,
      cuponsTroca,
      cuponsTrocaSelecionados,
    ]
  );
  return (
    <FinalizarPedidoContext.Provider value={values}>
      {children}
    </FinalizarPedidoContext.Provider>
  );
};

export default FinalizarPedidoContextProvider;
