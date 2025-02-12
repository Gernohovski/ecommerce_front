import { Button } from "@/components/ui/button";
import Image from "next/image";

const LiteraryGenres: React.FC = () => {
  return (
    <>
      <Button variant="ghost" className="gap-1 group">
        <div className="relative w-5 h-5 group">
          <Image
            src="/icons/list.svg"
            alt="Bookly"
            width={20}
            height={20}
            className="absolute inset-0 transition-opacity group-hover:opacity-0"
          />
          <Image
            src="/icons/list-violet.svg"
            alt="Bookly"
            width={20}
            height={20}
            className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
          />
        </div>
        <span className="text-white group-hover:text-[#391667] transition">
          Todos
        </span>
      </Button>
      <Button variant="ghost">
        <span className="text-white hover:text-[#391667]">Ação</span>
      </Button>
      <Button variant="ghost">
        <span className="text-white hover:text-[#391667]">Aventura</span>
      </Button>
      <Button variant="ghost">
        <span className="text-white hover:text-[#391667]">Romance</span>
      </Button>
      <Button variant="ghost">
        <span className="text-white hover:text-[#391667]">Fantasia</span>
      </Button>
      <Button variant="ghost">
        <span className="text-white hover:text-[#391667]">Terror</span>
      </Button>
      <Button variant="ghost">
        <span className="text-white hover:text-[#391667]">
          Ficção Científica
        </span>
      </Button>
    </>
  );
};

export default LiteraryGenres;
