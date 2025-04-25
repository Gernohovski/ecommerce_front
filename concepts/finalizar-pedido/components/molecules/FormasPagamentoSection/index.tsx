import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCartaoCreditoContext } from "@/concepts/cadastro/CartaoCredito/contexts/CartaoCreditoContextProvider";
import { useFinalizarPedidoContext } from "@/concepts/finalizar-pedido/contexts/FinalizarPedidoContext";
import useFazerPedido from "@/concepts/finalizar-pedido/hooks/useFazerPedido";
import { Pedido } from "@/concepts/finalizar-pedido/hooks/useFazerPedido/types";
import { useFetchCupomByCodigo } from "@/concepts/finalizar-pedido/hooks/useFetchCupomByCodigo";
import errorMessage, { APIError } from "@/utils/error-message";
import { maskCartaoCredito } from "@/utils/format-cartao-credito";
import { formatCurrency } from "@/utils/format-currency";
import { useQueryClient } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import CupomBadge from "../../atoms/CupomBadge";
import AdicionarCartaoModal from "../AdicionarCartaoModal";
import AlterarEtapasButton from "../AlterarEtapasButton";

type Props = {
  pedidoToSave: Pedido;
};

const FormasPagamentoSection: React.FC<Props> = ({ pedidoToSave }) => {
  const router = useRouter();
  const useQuery = useQueryClient();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [codigoCupom, setCodigoCupom] = useState<string>("");
  const [cupomBuscado, setCupomBuscado] = useState<string>("");
  const {
    setIsSelected,
    cupons,
    setCupons,
    handleRemoverCupom,
    valorPedido,
    desconto,
    setCartoesId,
    cartoesId,
    clearForm,
    valorFrete,
  } = useFinalizarPedidoContext();
  const { cartoesCredito } = useCartaoCreditoContext();

  const { mutate } = useFazerPedido();

  const handleButtonClick = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      mutate(pedidoToSave, {
        onSuccess: () => {
          toast.success("Pedido efetuado com sucesso!");
          router.push("/livros");
          useQuery.invalidateQueries({ queryKey: ["getCarrinho"] });
          clearForm();
        },
        onError: (error: APIError) => {
          errorMessage(error);
        },
      });
    },
    [mutate, pedidoToSave, clearForm, router, useQuery]
  );

  const handleBuscarCupom = useCallback(() => {
    setCupomBuscado(codigoCupom);
  }, [setCupomBuscado, codigoCupom]);

  const { data, error } = useFetchCupomByCodigo(cupomBuscado);

  useEffect(() => {
    if (error) {
      errorMessage(error);
    }
    if (data) {
      const jaExiste = cupons.some((c) => c.id === data.id);
      if (!jaExiste) {
        setCupons((prev) => [...prev, data]);
      } else {
        toast.error("Cupom já adicionado.");
      }
    }
    setCupomBuscado("");
  }, [data, cupons, setCupons, error]);

  const handleEtapaAnterior = useCallback(() => {
    setIsSelected({
      conferencia: false,
      metodoEnvio: true,
      formaPagamento: false,
    });
  }, [setIsSelected]);

  const handleChange = (id: string) => {
    setCartoesId((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <>
      <div className="flex flex-col w-[731px] h-[auto] bg-white rounded-[20px] p-6 shadow-md">
        <AlterarEtapasButton />
        <span className="font-medium text-[#7738C8] text-2xl">
          Formas de pagamento
        </span>
        <div
          className="mt-8 h-[100px] bg-white overflow-y-auto
                [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:rounded-full
              [&::-webkit-scrollbar-track]:bg-gray-100
                [&::-webkit-scrollbar-thumb]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-gray-300
              dark:[&::-webkit-scrollbar-track]:bg-neutral-700
              dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        >
          {cartoesCredito.map((cartao) => (
            <div
              key={cartao.id}
              className="flex items-center justify-between mb-2"
            >
              <div className="flex gap-2">
                <Image
                  src="/icons/circle-filled.svg"
                  alt="bolinha"
                  width={8}
                  height={8}
                />
                <span className="text-sm">{`${
                  cartao.flag
                } - ${maskCartaoCredito(cartao.cardNumber)} - ${
                  cartao.printedName
                }`}</span>
              </div>
              <div className="flex mr-6">
                <Checkbox
                  checked={cartoesId.some(
                    (cartaoCredito) => cartaoCredito === cartao.id
                  )}
                  disabled={
                    cartoesId.some(
                      (cartaoCredito) => cartaoCredito === cartao.id
                    ) && cartoesId.length == 1
                  }
                  onClick={() => handleChange(cartao.id)}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <button
            className="text-sm text-[#7F5AAF] underline mb-6"
            onClick={() => setIsOpen(true)}
          >
            Usar outra forma de pagamento
          </button>
        </div>
        <span className="font-medium text-[#7738C8] text-2xl mb-2">
          Cupons de desconto
        </span>
        <div className="flex mb-3 items-center gap-2">
          <div>
            <div className="flex items-end gap-2">
              <div>
                <Label className="text-sm">Código do cupom</Label>
                <Input
                  id="insert-cupom-input"
                  className="min-w-[313px] max-w-[313px]"
                  placeholder="Adicione um cupom"
                  value={codigoCupom}
                  onChange={(e) => setCodigoCupom(e.target.value.toUpperCase())}
                ></Input>
              </div>
              <Button
                variant="default"
                className="h-[40px]"
                onClick={handleBuscarCupom}
              >
                <Image
                  src="/icons/plus.svg"
                  width={20}
                  height={20}
                  alt="Search"
                ></Image>
              </Button>
            </div>
          </div>
          <div className="flex gap-2">
            {cupons.map((cupom) => (
              <div key={cupom.id}>
                <CupomBadge
                  cupomId={cupom.id}
                  onClick={handleRemoverCupom}
                  codigoCupom={cupom.codigo}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="h-[3px] bg-gray-300 w-full mb-3"></div>
        <div className="flex justify-end items-center">
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center">
              <div className="text-base">Valor dos itens:</div>
              <span className="text-base">{formatCurrency(valorPedido)}</span>
            </div>
            {cupons.length > 0 && (
              <div className="flex justify-between items-center">
                <div className="text-base">Desconto:</div>
                <span className="text-red-600 text-base">{`- ${formatCurrency(
                  desconto
                )}`}</span>{" "}
              </div>
            )}
            <div className="flex justify-between items-center">
              <div className="text-base">Valor do envio:</div>
              <span className="text-base">{formatCurrency(valorFrete)}</span>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-slate-800 w-full mb-3"></div>
        <div className="flex justify-between items-center mb-6">
          <div className="text-base">Total:</div>
          <span className="text-base">
            {formatCurrency(valorPedido - desconto + valorFrete)}
          </span>
        </div>
        <div>
          <div className="flex justify-between">
            <Button
              asChild
              className="w-[145px] h-[40px]"
              onClick={handleEtapaAnterior}
            >
              <div className="cursor-not-allowed">
                <ArrowLeft />
                <span>Anterior</span>
              </div>
            </Button>
            <Button
              asChild
              className="w-[145px] h-[40px]"
              onClick={handleButtonClick}
            >
              <div>
                <span>FinalizarPedido</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
      <AdicionarCartaoModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default FormasPagamentoSection;
