import useAlterarQuantidade from "@/concepts/carrinho/hooks/useAlterarQuantidade";
import errorMessage from "@/utils/error-message";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import { Input } from "./input";
import Tooltip from "./tooltip";

type Props = {
  quantidade: number;
  itemId: number;
  quantidadeMax: number;
  itemName: string;
};

const ItensCount: React.FC<Props> = ({
  quantidade,
  itemId,
  quantidadeMax,
  itemName,
}) => {
  const [quantidadeItem, setQuantidadeItem] = useState<number>(quantidade);
  const { mutate } = useAlterarQuantidade();
  const useQuery = useQueryClient();

  const handleChange = (value: string) => {
    setQuantidadeItem(Number(value));
    mutate(
      { itemId: itemId, quantidade: Number(value) },
      {
        onSuccess: () => {
          useQuery.invalidateQueries({ queryKey: ["getCarrinho"] });
        },
        onError: (error) => {
          errorMessage(error);
        },
      }
    );
  };

  return (
    <div className="flex gap-[2px]">
      <button
        id={`minus-quantity-${itemName}`}
        disabled={quantidadeItem == 1}
        className="flex border border-[#7738C8] w-[18px] h-[18px] justify-center items-center rounded-[20px] shadow-sm cursor-pointer"
        onClick={() => handleChange(String(quantidadeItem - 1))}
      >
        <Image src="/icons/minus.svg" alt="Menos" width={6} height={15} />
      </button>
      <Input
        id={`quantity-${itemName}-input`}
        className="w-[50px] h-[18px] border-[#7738C8] flex text-center items-center"
        onChange={(e) => handleChange(e.target.value)}
        value={quantidadeItem}
      ></Input>
      <Tooltip
        text={
          quantidade == quantidadeMax ? "Sem disponibilidade no estoque" : ""
        }
      >
        <button
          id={`plus-quantity-${itemName}`}
          disabled={quantidade == quantidadeMax}
          className="flex border border-[#7738C8] w-[18px] h-[18px] justify-center items-center rounded-[20px] shadow-sm cursor-pointer"
          onClick={() => handleChange(String(quantidadeItem + 1))}
        >
          <Image
            src="/icons/plus-black.svg"
            alt="Menos"
            width={6}
            height={15}
          />
        </button>
      </Tooltip>
    </div>
  );
};

export default ItensCount;
