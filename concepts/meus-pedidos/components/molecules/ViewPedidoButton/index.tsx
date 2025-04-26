import { Button } from "@/components/ui/button";
import { PedidoResponse } from "@/concepts/finalizar-pedido/hooks/useFazerPedido/types";
import Image from "next/image";
import { useState } from "react";
import ViewPedidoModal from "../ViewPedidoModal";

type ViewPedidoButtonProps = {
  pedido: PedidoResponse;
};

const ViewPedidoButton: React.FC<ViewPedidoButtonProps> = ({ pedido }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
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
        <ViewPedidoModal
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

export default ViewPedidoButton;
