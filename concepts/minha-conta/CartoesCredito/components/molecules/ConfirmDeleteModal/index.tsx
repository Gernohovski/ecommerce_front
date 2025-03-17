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
import { CartaoCreditoType } from "@/concepts/cadastro/CartaoCredito/contexts/CartaoCreditoContextProvider/types";
import useDeleteCartaoCliente from "@/concepts/minha-conta/VisualizarInformacoes/hooks/useDeleteCartaoCliente";
import errorMessage, { APIError } from "@/utils/error-message";
import { useQueryClient } from "@tanstack/react-query";
import { Trash } from "lucide-react";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import DeleteCartaoButton from "../../atoms/DeleteCartaoButton";
import DisabledDeleteCartaoButton from "../../atoms/DisabledDeleteCartaoButton";

type Props = {
  title: string;
  description: string;
  cartao: CartaoCreditoType;
  isPrincipal?: boolean;
};

const ConfirmDeleteModal: React.FC<Props> = ({
  title,
  description,
  cartao,
  isPrincipal,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const { mutate } = useDeleteCartaoCliente();
  const queryClient = useQueryClient();

  const handleButtonClick = useCallback(() => {
    mutate(
      { id: cartao.id },
      {
        onSuccess: () => {
          toast.success("Cartão excluído com sucesso!");
          queryClient.invalidateQueries({ queryKey: ["getCliente"] });
          setOpen(false);
        },
        onError: (error) => {
          errorMessage(error as APIError);
        },
      }
    );
  }, [mutate, cartao, queryClient]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger disabled={isPrincipal}>
        {isPrincipal ? <DisabledDeleteCartaoButton /> : <DeleteCartaoButton />}
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
              id="confirm-delete-cartao-button"
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
