import Section from "@/components/ui/section";
import { useFetchLivros } from "@/concepts/livros/hooks/useFetchLivros";
import Image from "next/image";
import EstoqueDataTable from "../../molecules/EstoqueDataTable";

const ControleEstoqueSection: React.FC = () => {
  const { data: livros } = useFetchLivros();

  return (
    <div className="p-6">
      <Section
        icon={
          <Image src="/icons/box.svg" alt="Bookly" width={30} height={30} />
        }
        title="Estoque"
        subtitle="Visualize e gerencie o estoque"
      >
        <EstoqueDataTable livros={livros} />
      </Section>
    </div>
  );
};

export default ControleEstoqueSection;
