"use client";

import ListTemplate from "@/components/ui/list-template";
import AutoresFilter from "@/concepts/livros/components/molecules/AutoresFilter";
import CapasFilter from "@/concepts/livros/components/molecules/CapasFilter";
import CondicoesFilter from "@/concepts/livros/components/molecules/CondicoesFilter";
import IdiomasFIlter from "@/concepts/livros/components/molecules/IdiomasFIlter";
import PrecosFilter from "@/concepts/livros/components/molecules/PrecosFilter";
import Navbar from "@/concepts/navegacao/components/organisms/Navbar";

export default function Livros() {
  const filters = [
    <PrecosFilter key="precos" />,
    <CondicoesFilter key="condicoes" />,
    <CapasFilter key="capas" />,
    <AutoresFilter key="autores" />,
    <IdiomasFIlter key="idiomas" />,
  ];
  return (
    <>
      <Navbar />
      <ListTemplate filters={filters} />
    </>
  );
}
