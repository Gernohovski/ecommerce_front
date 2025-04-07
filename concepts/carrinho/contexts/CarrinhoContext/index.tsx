"use client";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { CarrinhoContextType, CarrinhoType, ItemCarrinho } from "./types";

const CarrinhoContext = createContext({} as CarrinhoContextType);

export const useCarrinhoContext = () => useContext(CarrinhoContext);

const CarrinhoContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [id, setId] = useState<string>("");
  const [itensCarrinho, setItensCarrinho] = useState<ItemCarrinho[]>([]);
  const [dataExpiracao, setDataExpiracao] = useState<string>("");
  const [valorCompra, setValorCompra] = useState<number>(0);

  const fillForm = useCallback(
    (data: CarrinhoType) => {
      setId(data?.id ?? "");
      setItensCarrinho(data.itens ?? "");
      setDataExpiracao(data.dataExpiracao);
      if (data?.itens) {
        const soma = data.itens.reduce((acc, item) => {
          return acc + item.livro.valorVenda * item.quantidade;
        }, 0);
        setValorCompra(soma);
      }
    },
    [setId, setItensCarrinho, setDataExpiracao]
  );

  const values = useMemo(
    () => ({
      valorCompra,
      setValorCompra,
      id,
      setId,
      itensCarrinho,
      setItensCarrinho,
      dataExpiracao,
      setDataExpiracao,
      fillForm,
    }),
    [id, itensCarrinho, dataExpiracao, valorCompra, fillForm]
  );
  return (
    <CarrinhoContext.Provider value={values}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export default CarrinhoContextProvider;
