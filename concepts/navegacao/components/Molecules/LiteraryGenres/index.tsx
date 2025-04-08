import { Button } from "@/components/ui/button";
import { useFiltrosContext } from "@/concepts/livros/contexts/FiltrosContext";
import { useFetchCategorias } from "@/concepts/livros/hooks/useFetchCategorias";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const LiteraryGenres: React.FC = () => {
  const { data } = useFetchCategorias();
  const { filtros, setFiltros } = useFiltrosContext();
  const router = useRouter();
  const pathname = usePathname();

  const handleButtonClick = (categoriaId: string) => {
    setFiltros((prevState) => ({
      ...prevState,
      categoriaId: categoriaId,
    }));
  };

  return (
    <>
      <Button variant="ghost" className="gap-1 group">
        {!filtros?.categoriaId && pathname === "/livros" ? (
          <Image
            src="/icons/list-violet.svg"
            alt="Bookly"
            width={20}
            height={20}
          />
        ) : (
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
        )}
        <span
          className={
            !filtros?.categoriaId && pathname === "/livros"
              ? "text-[#391667]"
              : "text-white hover:text-[#391667] cursor-pointer"
          }
          onClick={() => {
            router.push("/livros");
            setFiltros((prevState) => ({
              ...prevState,
              categoriaId: "",
            }));
          }}
        >
          Todos
        </span>
      </Button>
      {data?.map((categoria) => (
        <Button variant="ghost" key={categoria.id}>
          <span
            className={
              (filtros?.categoriaId ?? "") == String(categoria.id)
                ? "text-[#391667]"
                : "text-white hover:text-[#391667] cursor-pointer"
            }
            onClick={() => handleButtonClick(String(categoria.id))}
          >
            {categoria.nome}
          </span>
        </Button>
      ))}
    </>
  );
};

export default LiteraryGenres;
