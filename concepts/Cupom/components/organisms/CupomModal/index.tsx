import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useCadastrarCupom from "@/concepts/Cupom/hooks/useCadastrarCupom";
import errorMessage from "@/utils/error-message";
import { formatValue } from "@/utils/format-value";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { toast } from "react-toastify";

interface CupoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CupomModal: React.FC<CupoModalProps> = ({ isOpen, onClose }) => {
  const { mutate } = useCadastrarCupom();
  const [porcentagem, setPorcentagem] = useState<string>("");
  const [codigoCupom, setCodigoCupom] = useState<string>("");

  const cupomToSave = useMemo(() => {
    const valor = parseFloat(porcentagem.replace(",", ".")) / 100;
    const arredondado = Math.round(valor * 10000) / 10000;
    return {
      porcentagemDesconto: arredondado,
      codigo: codigoCupom,
    };
  }, [porcentagem, codigoCupom]);

  const handleButtonClick = useCallback(() => {
    mutate(cupomToSave, {
      onSuccess: () => {
        toast.success("Cupom cadastrado com sucesso!");
        setPorcentagem("");
        setCodigoCupom("");
        onClose();
      },
      onError: (error) => {
        errorMessage(error);
      },
    });
  }, [cupomToSave, onClose, mutate]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 top-[75px]">
      <div className="relative w-[518px] h-auto bg-white p-6 rounded-[20px] shadow-lg">
        <div className="flex items-center justify-between">
          <span className="font-medium text-2xl mb-6">
            Gerar cupom promocional
          </span>
          <div
            className="cursor-pointer"
            onClick={() => {
              onClose();
              setPorcentagem("");
              setCodigoCupom("");
            }}
          >
            <Image src="/icons/close.svg" alt="fechar" width={24} height={24} />
          </div>
        </div>
        <div className="flex flex-col gap-6 mb-6">
          <div>
            <Label className="text-sm">Porcentagem de desconto *</Label>
            <Input
              id="ticket-desconto-input"
              className="min-w-[470px] max-w-[470px]"
              placeholder="Insira a porcentagem de desconto"
              value={porcentagem}
              onChange={(e) => setPorcentagem(formatValue(e.target.value))}
            ></Input>
          </div>
          <div>
            <Label className="text-sm">Código do cupom *</Label>
            <Input
              id="ticket-codigo-input"
              className="min-w-[470px] max-w-[470px]"
              placeholder="Insira o código do cupom"
              value={codigoCupom}
              onChange={(e) => setCodigoCupom(e.target.value.toUpperCase())}
            ></Input>
          </div>
        </div>
        <div className="flex justify-end gap-6">
          <Button
            className="w-[150px] h-[40px]"
            onClick={() => {
              onClose();
              setPorcentagem("");
              setCodigoCupom("");
            }}
            variant={"cancel"}
          >
            Cancelar
          </Button>
          <Button className="w-[150px] h-[40px]" onClick={handleButtonClick}>
            Gerar cupom
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CupomModal;
