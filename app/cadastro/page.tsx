import FormPageTemplate from "@/components/ui/form-page-template";
import DadosBasicosSection from "@/concepts/cadastro/DadosBasicos/components/organisms/DadosBasicosSection";
import Navbar from "@/concepts/navegacao/components/organisms/Navbar";

export default function Cadastro() {
  return (
    <div>
      <Navbar />
      <FormPageTemplate subtitle="Cadastrar usuário">
        <DadosBasicosSection></DadosBasicosSection>
      </FormPageTemplate>
    </div>
  );
}
