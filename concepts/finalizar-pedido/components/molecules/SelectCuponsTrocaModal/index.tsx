import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { CupomTrocaResponse } from "@/concepts/finalizar-pedido/hooks/useFetchCupomCliente/types";
import { formatCurrency } from "@/utils/format-currency";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect } from "react";
import { createPortal } from "react-dom";

type SelectCuponsTrocaModalProps = {
  cuponsTroca: CupomTrocaResponse[];
  cuponsTrocaSelecionados: CupomTrocaResponse[];
  setCuponsTrocaSelecionados: Dispatch<SetStateAction<CupomTrocaResponse[]>>;
  isOpen: boolean;
  onClose: () => void;
};

const SelectCuponsTrocaModal: React.FC<SelectCuponsTrocaModalProps> = ({
  isOpen,
  onClose,
  cuponsTroca,
  cuponsTrocaSelecionados,
  setCuponsTrocaSelecionados,
}) => {
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-[518px] h-auto bg-white p-6 rounded-[20px] shadow-lg">
        <div className="flex items-top justify-between">
          <span className="font-semibold text-2xl mb-6">Cupons de troca</span>
          <div
            className="cursor-pointer"
            onClick={() => {
              onClose();
            }}
          >
            <Image src="/icons/close.svg" alt="fechar" width={24} height={24} />
          </div>
        </div>
        <div>
          <span>
            Foram encontrados cupons de troca de compras passadas, deseja
            utilizá-los na compra atual?
          </span>
          {cuponsTroca.map((cupom) => {
            return (
              <div key={cupom.id} className="flex items-center gap-2 my-6">
                <Checkbox
                  checked={cuponsTrocaSelecionados.some(
                    (c) => c.id === cupom.id
                  )}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setCuponsTrocaSelecionados((prev) => [...prev, cupom]);
                    } else {
                      setCuponsTrocaSelecionados((prev) =>
                        prev.filter((c) => c.id !== cupom.id)
                      );
                    }
                  }}
                />
                <span className="font-semibold">{`${cupom.codigo}:`}</span>
                <span>{formatCurrency(cupom.valorDesconto)}</span>
              </div>
            );
          })}
          <div className="grid grid-cols-2 mt-2 gap-2">
            <Button
              variant="delete"
              onClick={() => {
                setCuponsTrocaSelecionados([]);
                onClose();
              }}
            >
              Cancelar
            </Button>
            <Button
              variant="confirm"
              onClick={onClose}
              disabled={cuponsTrocaSelecionados.length <= 0}
            >
              Confirmar
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default SelectCuponsTrocaModal;
