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
        asChild
        className="flex flex-col h-auto gap-0 items-center hover:text-[#7738C8]"
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
      >
        {itensCarrinho.length > 0 ? (
          <div>
            <Image
              src="\icons\cart-items.svg"
              alt="Bookly"
              width={30}
              height={30}
            ></Image>
            <span>Carrinho</span>
          </div>
        ) : (
          <div>
            <Image
              src="\icons\cart.svg"
              alt="Bookly"
              width={30}
              height={30}
            ></Image>
            <span>Carrinho</span>
          </div>
        )}
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
