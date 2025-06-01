import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import DarEntradaModal from "../DarEntradaModal";

const EditLivroButton: React.FC<{ livroId: string }> = ({ livroId }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex">
      <Button className="w-auto" variant={"ghost"} asChild>
        <Image
          src="/icons/pen.svg"
          className="cursor-pointer"
          alt="editar-livro"
          width={24}
          height={24}
        />
      </Button>
      <Button
        id={livroId}
        className="w-auto"
        variant={"ghost"}
        asChild
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src="/icons/plus-circle.svg"
          className="cursor-pointer"
          alt="adicionar-estoque"
          width={24}
          height={24}
        />
      </Button>
      <DarEntradaModal
        livroId={livroId}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default EditLivroButton;
