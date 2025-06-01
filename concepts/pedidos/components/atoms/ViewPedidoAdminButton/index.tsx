import { Button } from "@/components/ui/button";
import { PedidoResponse } from "@/concepts/finalizar-pedido/hooks/useFazerPedido/types";
import Image from "next/image";
import { useState } from "react";
import ViewPedidoAdminModal from "../../molecules/ViewPedidoAdminModal";

type ViewPedidoAdminButtonProps = {
  pedido: PedidoResponse;
};

const ViewPedidoAdminButton: React.FC<ViewPedidoAdminButtonProps> = ({
  pedido,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id={`${pedido.cliente.nome}-${pedido.id}`}>
      <Button
        className="w-auto"
        variant={"ghost"}
        onClick={() => setIsOpen(!isOpen)}
        asChild
      >
        <Image
          src="/icons/eye.svg"
          className="cursor-pointer"
          alt="visualizar-pedido"
          width={24}
          height={24}
        />
      </Button>
      {pedido ? (
        <ViewPedidoAdminModal
          pedido={pedido}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ViewPedidoAdminButton;
