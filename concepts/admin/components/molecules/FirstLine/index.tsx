"use client";
import { Button } from "@/components/ui/button";
import { useListarClienteContext } from "@/concepts/admin/contexts/ListarClienteContext";
import { useListarClientes } from "@/concepts/admin/hooks/useListarClientes";
import Image from "next/image";
import { useEffect, useState } from "react";
import CPFInput from "../../atoms/CPFInput";
import EmailInput from "../../atoms/EmailInput";
import GenderSelect from "../../atoms/GenderSelect";
import NameInput from "../../atoms/NameInput";

const FirstLine: React.FC = () => {
  const { setClientes, cpf, email, gender, name } = useListarClienteContext();

  const [filtros, setFiltros] = useState({
    generoId: "",
    nome: "",
    cpf: "",
    email: "",
  });

  const { data: clientes } = useListarClientes(filtros);

  useEffect(() => {
    if (clientes) {
      setClientes(
        clientes.sort((a, b) => {
          if (a.id == null) return 1;
          if (b.id == null) return -1;
          return a.id - b.id;
        })
      );
    }
  }, [clientes, setClientes]);

  const handleFiltrar = () => {
    setFiltros({
      generoId: String(gender),
      nome: name,
      cpf,
      email,
    });
  };

  return (
    <div className="flex gap-6 justify-center items-end">
      <NameInput />
      <GenderSelect />
      <CPFInput />
      <EmailInput />
      <Button variant="default" className="h-[40px]" onClick={handleFiltrar}>
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

export default FirstLine;
