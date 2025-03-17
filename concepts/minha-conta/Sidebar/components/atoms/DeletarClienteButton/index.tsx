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
import { useDadosBasicosContext } from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";
import { useQueryClient } from "@tanstack/react-query";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import useDeleteCliente from "../../../hooks/useDeleteCliente";

const DeletarClienteButton: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const { id } = useDadosBasicosContext();
  const { mutate } = useDeleteCliente();
  const queryClient = useQueryClient();

  const handleButtonClick = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      mutate(
        { id: String(id) ?? localStorage.getItem("cliente") },
        {
          onSuccess: () => {
            toast.success("Seu cadastro foi deletado.");
            localStorage.clear();
            router.push("/");
            queryClient.invalidateQueries({ queryKey: ["getClientes"] });
          },
          onError: () => {
            toast.error("Erro ao deletar cadastro.");
          },
        }
      );
    },
    [mutate, id, router, queryClient]
  );

  return (
    <div className="flex justify-between items-center">
      <div
        className={`flex items-center gap-2 hover:bg-[#FDDBDC] rounded-md cursor-pointer`}
      >
        <Trash className="text-[#C8383A]" size={30} />
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
            <Button
              id="sidebar-delete-client-button"
              asChild
              variant={"ghost"}
              className="w-[201px] justify-start"
            >
              <div>
                <span className="text-base text-[#C8383A]">Excluir conta</span>
              </div>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Excluir cadastro</DialogTitle>
              <DialogDescription>
                Tem certeza que deseja excluir seu cadastro? Essa ação não
                poderá ser desfeita.
              </DialogDescription>
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
                  id="confirm-delete-client"
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
      </div>
    </div>
  );
};

export default DeletarClienteButton;
