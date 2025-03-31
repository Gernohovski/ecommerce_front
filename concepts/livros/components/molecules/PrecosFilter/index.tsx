import Filter from "@/components/ui/filter";

const PrecosFilter: React.FC = () => {
  const precos = [
    "Até R$20",
    "R$20 a R$40",
    "R$40 a R$60",
    "R$60 a R$80",
    "Mais de R$100",
  ];
  return (
    <div className="flex flex-col">
      <Filter filters={precos} filterTitle="Preço"></Filter>
    </div>
  );
};

export default PrecosFilter;
