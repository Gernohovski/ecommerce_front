import Filter from "@/components/ui/filter";

const CapasFilter: React.FC = () => {
  const capas = ["Dura", "Comum"];
  return (
    <div className="flex flex-col">
      <Filter filters={capas} filterTitle="Capa"></Filter>
    </div>
  );
};

export default CapasFilter;
