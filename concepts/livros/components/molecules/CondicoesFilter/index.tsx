import Filter from "@/components/ui/filter";

const CondicoesFilter: React.FC = () => {
  const condicoes = ["Novo", "Usado"];
  return (
    <div className="flex flex-col">
      <Filter filters={condicoes} filterTitle="Condição"></Filter>
    </div>
  );
};

export default CondicoesFilter;
