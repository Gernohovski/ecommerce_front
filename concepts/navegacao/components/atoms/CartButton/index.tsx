import { Button } from "@/components/ui/button";
import CarrinhoModal from "@/concepts/carrinho/components/organisms/CarrinhoModal";
import { useCarrinhoContext } from "@/concepts/carrinho/contexts/CarrinhoContext";
import { useFetchCarrinho } from "@/concepts/carrinho/hooks/useFetchCarrinho";
import Image from "next/image";
import { useEffect, useState } from "react";

const CartButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { fillForm, itensCarrinho, valorCompra } = useCarrinhoContext();
  const { data } = useFetchCarrinho(localStorage.getItem("cliente") ?? "");

  useEffect(() => {
    if (data) {
      fillForm(data);
    }
  }, [data, fillForm]);

  return (
    <>
      <Button
        id="cart-button"
        asChild
        className="flex flex-col h-auto gap-0 items-center hover:text-[#7738C8]"
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <div id="cart-itens-count" className="relative">
            <Image
              src="/icons/cart.svg"
              alt="Carrinho"
              width={30}
              height={30}
            />
            <span className="absolute -top-1 -right-2 bg-primary text-white font-medium text-xs w-4 h-4 flex items-center justify-center rounded-full">
              {itensCarrinho.length}
            </span>
          </div>
          <span>Carrinho</span>
        </div>
      </Button>
      <CarrinhoModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        itensCarrinho={itensCarrinho}
        valorCompra={valorCompra}
      />
    </>
  );
};

export default CartButton;
