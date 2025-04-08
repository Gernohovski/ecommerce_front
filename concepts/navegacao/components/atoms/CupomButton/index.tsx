import { Button } from "@/components/ui/button";
import CupomModal from "@/concepts/cupom/components/organisms/CupomModal";
import Image from "next/image";
import { useState } from "react";

const CupomButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Button
        asChild
        id="navbar-login-button"
        className="flex flex-col h-auto gap-0 items-center hover:text-[#7738C8]"
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="cursor-pointer">
          <Image
            src="\icons\ticket.svg"
            alt="Bookly"
            width={30}
            height={30}
          ></Image>
          <span className="text-sm">Cupom</span>
        </div>
      </Button>
      <CupomModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default CupomButton;
