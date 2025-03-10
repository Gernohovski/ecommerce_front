"use client";
import FormPageTemplate from "@/components/ui/form-page-template";
import FiltrarClientesSection from "@/concepts/admin/components/organisms/FiltrarClientesSection";
import ListarClienteContextProvider from "@/concepts/admin/contexts/ListarClienteContext";
import Navbar from "@/concepts/navegacao/components/organisms/Navbar";

export default function AdminPage() {
  return (
    <ListarClienteContextProvider>
      <Navbar />
      <FormPageTemplate subtitle="Listar clientes">
        <FiltrarClientesSection />
      </FormPageTemplate>
    </ListarClienteContextProvider>
  );
}
