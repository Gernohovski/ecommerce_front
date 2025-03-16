import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import nextId from "react-id-generator";
import { useCartaoCreditoContext } from "../../../contexts/CartaoCreditoContextProvider";

const AddCartaoCreditoButton: React.FC = () => {
  const {
    cardPrintedName,
    cardFlag,
    cardNumber,
    cardSecurityCode,
    setCartoesCredito,
    clearForm,
  } = useCartaoCreditoContext();

  const handleClick = () => {
    setCartoesCredito((prev) => [
      ...prev,
      {
        id: "",
        idTemporario: nextId(),
        printedName: cardPrintedName,
        flag: cardFlag,
        cardNumber: cardNumber,
        securityCode: cardSecurityCode,
      },
    ]);
    clearForm();
  };

  return (
    <div>
      <Button className="w-auto" asChild onClick={handleClick}>
        <PlusIcon />
      </Button>
    </div>
  );
};

export default AddCartaoCreditoButton;
