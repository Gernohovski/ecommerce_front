import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useDarEntradaEstoque from "@/concepts/estoque/hooks/useDarEntradaEstoque";
import { darEntradaSchema } from "@/concepts/estoque/validations/darEntradaValidation";
import errorMessage from "@/utils/error-message";
import validateSchema, { ValidationResult } from "@/utils/validate-schema";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { toast } from "react-toastify";

interface DarEntradaModalProps {
  isOpen: boolean;
  onClose: () => void;
  livroId: string;
}

const DarEntradaModal: React.FC<DarEntradaModalProps> = ({
  isOpen,
  onClose,
  livroId,
}) => {
  const { mutate } = useDarEntradaEstoque();
  const [errors, setErrors] = useState<ValidationResult[]>([]);
  const [quantidade, setQuantidade] = useState<number>(0);

  const entradaEstoque = useMemo(() => {
    return {
      livroId,
      quantidade,
    };
  }, [livroId, quantidade]);

  const handleButtonClick = useCallback(() => {
    const obj = entradaEstoque as unknown as Record<string, unknown>;
    validateSchema(darEntradaSchema, obj, setErrors);
    if (errors.length > 0) return;
    mutate(entradaEstoque, {
      onSuccess: () => {
        toast.success("Entrada efetuada com sucesso!");
        setQuantidade(0);
        onClose();
      },
      onError: (error) => {
        errorMessage(error);
      },
    });
  }, [entradaEstoque, onClose, mutate, errors.length]);

  const hasErrors = useMemo(() => {
    return {
      quantidadeErrors: errors?.some(
        (error) => error.nomeDoCampo === "quantidade" && !error.isValid
      ),
    };
  }, [errors]);

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
        <div className="flex items-center justify-between">
          <span className="font-medium text-2xl mb-6">
            Dar entrada no estoque
          </span>
          <div
            className="cursor-pointer"
            onClick={() => {
              onClose();
            }}
          >
            <Image src="/icons/close.svg" alt="fechar" width={24} height={24} />
          </div>
        </div>
        <div className="flex flex-col gap-6 mb-6">
          <div>
            <Label className="text-sm">Quantidade *</Label>
            <Input
              type="number"
              id="quantidade-item-estoque-input"
              className="min-w-[470px] max-w-[470px]"
              placeholder="Insira a quantidade de livros"
              value={quantidade}
              onChange={(e) => setQuantidade(Number(e.target.value))}
              error={hasErrors.quantidadeErrors}
            ></Input>
          </div>
        </div>
        <div className="flex justify-end gap-6">
          <Button
            className="w-[150px] h-[40px]"
            onClick={() => {
              onClose();
            }}
            variant={"cancel"}
          >
            Cancelar
          </Button>
          <Button className="w-[150px] h-[40px]" onClick={handleButtonClick}>
            Dar entrada
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default DarEntradaModal;
