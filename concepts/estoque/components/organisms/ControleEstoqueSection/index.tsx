import Section from "@/components/ui/section";
import { useFiltrosContext } from "@/concepts/livros/contexts/FiltrosContext";
import { useFetchLivros } from "@/concepts/livros/hooks/useFetchLivros";
import Image from "next/image";
import { useEffect } from "react";
import EstoqueDataTable from "../../molecules/EstoqueDataTable";

const ControleEstoqueSection: React.FC = () => {
  const { setSize } = useFiltrosContext();
  const { data: livros } = useFetchLivros();

  useEffect(() => {
    setSize(100);
  }, [setSize]);

  return (
    <div className="p-6">
      <Section
        icon={
          <Image src="/icons/box.svg" alt="Bookly" width={30} height={30} />
        }
        title="Estoque"
        subtitle="Visualize e gerencie o estoque"
      >
        <EstoqueDataTable livros={livros?.content} />
      </Section>
    </div>
  );
};

export default ControleEstoqueSection;
