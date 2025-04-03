import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFiltrosContext } from "@/concepts/livros/contexts/FiltrosContext";
import Image from "next/image";
import { ChangeEvent, useCallback, useState } from "react";

const SearchInput: React.FC = () => {
  const [unfetchedLivro, setUnfetchedLivro] = useState<string>("");
  const { setFiltros } = useFiltrosContext();

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUnfetchedLivro(value);
  };

  const handleButtonClick = useCallback(() => {
    setFiltros((prevState) => ({
      ...prevState,
      titulo: unfetchedLivro,
    }));
  }, [unfetchedLivro, setFiltros]);

  return (
    <div className="flex justify-center items-center gap-2">
      <Input
        size={100}
        height={12}
        className="text-lg"
        placeholder="Pesquise seu livro"
        value={unfetchedLivro}
        onChange={handleTitleChange}
      />
      <Button variant="default">
        <Image
          onClick={handleButtonClick}
          src="/icons/search.svg"
          width={20}
          height={20}
          alt="Search"
        ></Image>
      </Button>
    </div>
  );
};

export default SearchInput;
