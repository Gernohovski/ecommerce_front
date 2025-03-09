import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EnderecoType } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext/types";
import useDeleteEnderecoCliente from "@/concepts/minha-conta/VisualizarInformacoes/hooks/useDeleteEnderecoCliente";
import { Trash } from "lucide-react";
import { useCallback } from "react";
import { toast } from "react-toastify";
import DeleteEnderecoButton from "../../atoms/DeleteEnderecoButton";

type Props = {
  title: string;
  description: string;
  endereco: EnderecoType;
  tipoEndereco: string;
};

const ConfirmDeleteModal: React.FC<Props> = ({
  title,
  description,
  endereco,
  tipoEndereco,
}) => {
  const { mutate } = useDeleteEnderecoCliente();

  const handleButtonClick = useCallback(() => {
    mutate(
      { id: endereco.id, tipoEndereco: tipoEndereco },
      {
        onSuccess: () => {
          toast.success("Cliente criado com sucesso!");
        },
        onError: () => {
          toast.error("Erro ao salvar cliente");
        },
      }
    );
  }, [mutate, endereco, tipoEndereco]);

  return (
    <Dialog>
      <DialogTrigger>
        <DeleteEnderecoButton />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="flex gap-6">
            <DialogClose>
              <Button
                className="min-w-[98px] max-w-[98px]"
                variant={"outline"}
                asChild
              >
                <div>
                  <span>Cancelar</span>
                </div>
              </Button>
            </DialogClose>
            <Button
              className="min-w-[98px] max-w-[98px]"
              variant={"delete"}
              onClick={handleButtonClick}
              asChild
            >
              <div>
                <Trash />
                <span>Excluir</span>
              </div>
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmDeleteModal;
