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
import errorMessage, { APIError } from "@/utils/error-message";
import { useQueryClient } from "@tanstack/react-query";
import { Trash } from "lucide-react";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import DeleteEnderecoButton from "../../atoms/DeleteEnderecoButton";
import DisabledDeleteEnderecoButton from "../../atoms/DisabledDeleteEnderecoButton";

type Props = {
  title: string;
  description: string;
  endereco: EnderecoType;
  tipoEndereco: string;
  isPrincipal?: boolean;
};

const ConfirmDeleteModal: React.FC<Props> = ({
  title,
  description,
  endereco,
  tipoEndereco,
  isPrincipal,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const { mutate } = useDeleteEnderecoCliente();
  const queryClient = useQueryClient();

  const handleButtonClick = useCallback(() => {
    mutate(
      { id: endereco.id, tipoEndereco: tipoEndereco },
      {
        onSuccess: () => {
          toast.success("Endereço excluído com sucesso!");
          queryClient.invalidateQueries({ queryKey: ["getCliente"] });
          setOpen(false);
        },
        onError: (error) => {
          errorMessage(error as APIError);
        },
      }
    );
  }, [mutate, endereco, tipoEndereco, queryClient]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger disabled={isPrincipal}>
        {isPrincipal ? (
          <DisabledDeleteEnderecoButton />
        ) : (
          <DeleteEnderecoButton />
        )}
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
              id="confirm-delete-endereco-button"
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
