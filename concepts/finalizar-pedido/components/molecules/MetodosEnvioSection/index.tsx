import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useEnderecoEntregaContext } from "@/concepts/cadastro/EnderecoEntrega/contexts/EnderecoEntregaContext";
import { useFinalizarPedidoContext } from "@/concepts/finalizar-pedido/contexts/FinalizarPedidoContext";
import { formatCurrency } from "@/utils/format-currency";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import AdicionarEnderecoModal from "../AdicionarEnderecoModal";
import AlterarEtapasButton from "../AlterarEtapasButton";

const MetodosEnvioSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { setIsSelected, setEnderecoId, enderecoId, valorFrete, prazoDias } =
    useFinalizarPedidoContext();
  const { enderecos } = useEnderecoEntregaContext();

  const handleEtapaAnterior = useCallback(() => {
    setIsSelected({
      conferencia: true,
      metodoEnvio: false,
      formaPagamento: false,
    });
  }, [setIsSelected]);

  const handleProximaEtapa = useCallback(() => {
    setIsSelected({
      conferencia: false,
      metodoEnvio: false,
      formaPagamento: true,
    });
  }, [setIsSelected]);

  const handleChange = (value: string) => {
    setEnderecoId(value);
  };

  return (
    <>
      <div className="flex flex-col w-[731px] h-[626px] bg-white rounded-[20px] p-6 shadow-md box-border">
        <AlterarEtapasButton />
        <span className="font-medium text-[#7738C8] text-2xl">
          Endereço de envio
        </span>
        <div
          className="mt-8 h-[347.8px] bg-white overflow-y-auto
                [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:rounded-full
              [&::-webkit-scrollbar-track]:bg-gray-100
                [&::-webkit-scrollbar-thumb]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-gray-300
              dark:[&::-webkit-scrollbar-track]:bg-neutral-700
              dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        >
          {enderecos.map((endereco) => (
            <div
              key={endereco.id}
              className="flex items-center justify-between mb-2"
            >
              <div className="flex gap-2">
                <Image
                  src="/icons/circle-filled.svg"
                  alt="bolinha"
                  width={8}
                  height={8}
                />
                <span className="text-sm">{`${endereco.logradouro},${endereco.number}.${endereco.neighborhood},${endereco.city} - ${endereco.state}`}</span>
              </div>
              <div className="flex mr-6">
                <Checkbox
                  checked={endereco.id === enderecoId}
                  disabled={endereco.id === enderecoId}
                  onClick={() => handleChange(endereco.id)}
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
            Enviar para outro endereço
          </button>
        </div>
        <div className="h-[3px] bg-gray-300 w-full mb-3"></div>
        <div className="flex flex-col mb-6">
          <div className="flex justify-between items-center">
            <span className="text-base">Valor do envio:</span>
            <span>{`${formatCurrency(valorFrete)}`}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-base">Prazo de entrega:</span>
            <span>{`${prazoDias} dias`}</span>
          </div>
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
              onClick={handleProximaEtapa}
            >
              <div>
                <span>Próximo</span>
                <ArrowRight />
              </div>
            </Button>
          </div>
        </div>
      </div>
      <AdicionarEnderecoModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default MetodosEnvioSection;
