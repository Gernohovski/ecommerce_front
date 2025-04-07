"use client";
import FormPageTemplate from "@/components/ui/form-page-template";
import FiltrarClientesSection from "@/concepts/admin/components/organisms/FiltrarClientesSection";
import ListarClienteContextProvider from "@/concepts/admin/contexts/ListarClienteContext";
import AdminNavbar from "@/concepts/navegacao/components/organisms/AdminNavbar";

export default function AdminClientesPage() {
  return (
    <ListarClienteContextProvider>
      <AdminNavbar />
      <FormPageTemplate subtitle="Listar clientes">
        <FiltrarClientesSection />
      </FormPageTemplate>
    </ListarClienteContextProvider>
  );
}
