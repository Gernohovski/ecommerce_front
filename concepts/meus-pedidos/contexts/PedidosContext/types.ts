import { PedidoResponse } from "@/concepts/finalizar-pedido/hooks/useFazerPedido/types";
import { Dispatch, SetStateAction } from "react";

export type PedidosContextType = {
  pedidos: PedidoResponse[];
  setPedidos: Dispatch<SetStateAction<PedidoResponse[]>>;
};
