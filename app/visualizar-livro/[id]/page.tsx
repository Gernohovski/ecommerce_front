"use client";
import CarrinhoContextProvider from "@/concepts/carrinho/contexts/CarrinhoContext";
import SessionContextProvider from "@/concepts/login/contexts/SessionContext";
import Navbar from "@/concepts/navegacao/components/organisms/Navbar";
import ViewLivroSection from "@/concepts/visualizar-livro/components/organisms/ViewLivroSection";
import { useFetchLivro } from "@/concepts/visualizar-livro/hooks/useFetchLivro";
import { useParams } from "next/navigation";

export default function Cadastro() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const { data: livro } = useFetchLivro(id ?? "");

  if (!livro) {
    return <p>Carregando...</p>;
  }

  return (
    <SessionContextProvider>
      <CarrinhoContextProvider>
        <Navbar />
        <ViewLivroSection livro={livro} />
      </CarrinhoContextProvider>
    </SessionContextProvider>
  );
}
