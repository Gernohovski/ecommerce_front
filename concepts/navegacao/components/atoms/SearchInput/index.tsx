import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const SearchInput: React.FC = () => {
  return (
    <div className="flex justify-center items-center gap-2">
      <Input
        size={100}
        height={12}
        className="text-lg"
        placeholder="Pesquise seu livro"
      />
      <Button variant="default">
        <Image
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
