import LivroSection from "@/concepts/livros/components/molecules/LivroSection";
import { useFiltrosContext } from "@/concepts/livros/contexts/FiltrosContext";
import { useFetchLivros } from "@/concepts/livros/hooks/useFetchLivros";
import { LivroDetalhado } from "@/concepts/livros/types/types";
import Image from "next/image";
import { useEffect } from "react";

const Homepage: React.FC = () => {
  const { setSize } = useFiltrosContext();
  const { data: livros } = useFetchLivros();

  useEffect(() => {
    setSize(5);
  }, [setSize]);

  return (
    <div className="flex m-6 gap-4 justify-center">
      <div className="bg-white w-[1197px] h-auto rounded-[20px]">
        <div className="p-6">
          <div className="gap-6 flex flex-col">
            <Image
              src="/homepage/initial-photo.svg"
              alt="initial-merchandise"
              width={1183.74}
              height={441}
            />
            <div className="h-[3px] bg-[#D9D9D9]"></div>
            <div className="flex gap-9">
              <Image
                src="/homepage/book-photo.svg"
                alt="initial-merchandise"
                width={1183.74}
                height={441}
              />
              <div className="flex flex-col gap-[56px]">
                <span className="font-medium text-2xl text-[#382057]">
                  Vencendo os Traumas que nos Prendem
                </span>
                <span className="font-medium text-[#7738C8]">
                  Neste livro, é apresentado um belíssimo e sensível conteúdo,
                  pontuado com relatos extraídos de sua experiência clínica. Na
                  obra estão registradas histórias marcantes e, por vezes,
                  dolorosas, mas que em muitos casos trazem reviravoltas
                  inspiradoras. São verdadeiras experiências de cura dos mais
                  diversos traumas que, após anos de sofrimento, foram
                  trabalhados adequadamente e ganharam um novo sentido. Aceite
                  esse desafio, vença os traumas que o prendem e descubra os
                  primeiros passos para recomeçar!
                </span>
              </div>
            </div>
            <div className="h-[3px] bg-[#D9D9D9]"></div>
            <div className="flex flex-col gap-6">
              <span className="font-medium text-2xl text-[#382057]">
                Novidades
              </span>
              <div className="grid grid-cols-5 w-[1197px] ml-4 justify-center">
                {livros?.content?.map((livro: LivroDetalhado) => (
                  <LivroSection key={livro.id} livro={livro} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
