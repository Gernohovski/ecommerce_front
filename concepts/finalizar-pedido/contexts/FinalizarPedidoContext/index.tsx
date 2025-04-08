"use client";
import { useCarrinhoContext } from "@/concepts/carrinho/contexts/CarrinhoContext";
import { CupomResponse } from "@/concepts/Cupom/hooks/useCadastrarCupom/types";
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
  const { itensCarrinho } = useCarrinhoContext();

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
      const soma = itensCarrinho.reduce((acc, item) => {
        return acc + item.livro?.valorVenda * item?.quantidade;
      }, 0);
      setValorPedido(soma);
    } else {
      setValorPedido(0);
    }
    if (itensCarrinho && itensCarrinho.length > 0) {
      const descontos = cupons.reduce((acc, cupom) => {
        return acc + (cupom.porcentagemDesconto ?? 0);
      }, 0);
      if (descontos < 1) {
        setDesconto(descontos * valorPedido);
      } else {
        toast.info(
          "Não é possível ter mais de 100% de desconto em uma compra."
        );
        setDesconto(1 * valorPedido);
      }
    } else {
      setDesconto(0);
    }
  }, [itensCarrinho, cupons, valorPedido]);

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
    }),
    [
      isSelected,
      cupons,
      desconto,
      valorPedido,
      enderecoId,
      cartoesId,
      clearForm,
    ]
  );
  return (
    <FinalizarPedidoContext.Provider value={values}>
      {children}
    </FinalizarPedidoContext.Provider>
  );
};

export default FinalizarPedidoContextProvider;
