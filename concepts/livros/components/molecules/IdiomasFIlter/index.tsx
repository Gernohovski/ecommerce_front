import FilterCheckbox from "@/components/ui/filter-checkbox";

const IdiomasFIlter: React.FC = () => {
  const idiomas = [
    { label: "Português", value: "1" },
    { label: "Inglês", value: "2" },
    { label: "Espanhol", value: "3" },
  ];
  return (
    <div className="flex flex-col">
      <FilterCheckbox options={idiomas} filterTitle="Idiomas"></FilterCheckbox>
    </div>
  );
};

export default IdiomasFIlter;
