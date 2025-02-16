import FormPageTemplate from "@/components/ui/form-page-template";
import DadosBasicosSection from "@/concepts/cadastro/DadosBasicos/components/organisms/DadosBasicosSection";
import EnderecoCobrancaSection from "@/concepts/cadastro/EnderecoCobranca/components/organisms/EnderecoCobrancaSection";
import EnderecoEntregaSection from "@/concepts/cadastro/EnderecoEntrega/components/organisms/EnderecoEntregaSection";
import EnderecoResidencialSection from "@/concepts/cadastro/EnderecoResidencial/components/organisms/EnderecoResidencialSection";
import Navbar from "@/concepts/navegacao/components/organisms/Navbar";

export default function Cadastro() {
  return (
    <div>
      <Navbar />
      <FormPageTemplate subtitle="Cadastrar usuário">
        <DadosBasicosSection />
        <EnderecoResidencialSection />
        <EnderecoCobrancaSection />
        <EnderecoEntregaSection />
      </FormPageTemplate>
    </div>
  );
}
