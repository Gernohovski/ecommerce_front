import { CartaoCreditoType } from "@/concepts/cadastro/CartaoCredito/contexts/CartaoCreditoContextProvider/types";
import { CartaoCredito } from "@/concepts/cadastro/types";

export const transformCartaoCredito = (
  cartoes: CartaoCredito[]
): CartaoCreditoType[] => {
  return cartoes.map((cartao) => ({
    id: String(cartao.id),
    flag: cartao.bandeira.nome ?? "",
    printedName: cartao.nomeImpresso,
    cardNumber: cartao.numero,
    securityCode: cartao.codigoSeguranca,
  }));
};
