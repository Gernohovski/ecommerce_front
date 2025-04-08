import { useFinalizarPedidoContext } from "@/concepts/finalizar-pedido/contexts/FinalizarPedidoContext";
import { useCallback } from "react";

const AlterarEtapasButton: React.FC = () => {
  const { isSelected, setIsSelected } = useFinalizarPedidoContext();

  const handleButtonClick = useCallback(
    (value: string) => {
      setIsSelected({
        conferencia: value === "conferencia",
        metodoEnvio: value === "metodoEnvio",
        formaPagamento: value === "formaPagamento",
      });
    },
    [setIsSelected]
  );

  return (
    <div className="flex w-[683px] h-[31px] min-h-[31px] rounded-[20px] bg-[#E4CFFF] items-center mb-6 box-border">
      <div className="grid grid-cols-3 w-[677px] ml-[5.5px]">
        <button
          className={`border border-[#382057] h-[25px] w-[220px] text-xs rounded-[20px] box-border ${
            isSelected.conferencia ? "bg-[#9747FF] text-white" : "bg-[#E4E4E7]"
          }`}
          onClick={() => handleButtonClick("conferencia")}
        >
          Conferência de produtos
        </button>
        <button
          className={`border border-[#382057] h-[25px] w-[220px] text-xs rounded-[20px] box-border ${
            isSelected.metodoEnvio ? "bg-[#9747FF] text-white" : "bg-[#E4E4E7]"
          }`}
          onClick={() => handleButtonClick("metodoEnvio")}
        >
          Método de envio
        </button>
        <button
          className={`border border-[#382057] h-[25px] w-[220px] text-xs rounded-[20px] box-border ${
            isSelected.formaPagamento
              ? "bg-[#9747FF] text-white"
              : "bg-[#E4E4E7]"
          }`}
          onClick={() => handleButtonClick("formaPagamento")}
        >
          Formas de pagamento
        </button>
      </div>
    </div>
  );
};

export default AlterarEtapasButton;
