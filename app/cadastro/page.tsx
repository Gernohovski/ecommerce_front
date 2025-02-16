"use client";
import FormPageTemplate from "@/components/ui/form-page-template";
import CreditCardSection from "@/concepts/cadastro/CartaoCredito/components/organisms/CartaoDeCreditoSection";
import CartaoCreditoContextProvider from "@/concepts/cadastro/CartaoCredito/contexts/CartaoCreditoContextProvider";
import DadosBasicosSection from "@/concepts/cadastro/DadosBasicos/components/organisms/DadosBasicosSection";
import DadosBasicosContextProvider from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";
import EnderecoCobrancaSection from "@/concepts/cadastro/EnderecoCobranca/components/organisms/EnderecoCobrancaSection";
import EnderecoCobrancaContextProvider from "@/concepts/cadastro/EnderecoCobranca/contexts/EnderecoCobrancaContext";
import EnderecoEntregaSection from "@/concepts/cadastro/EnderecoEntrega/components/organisms/EnderecoEntregaSection";
import EnderecoResidencialSection from "@/concepts/cadastro/EnderecoResidencial/components/organisms/EnderecoResidencialSection";
import EnderecoResidencialContextProvider from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext";
import Navbar from "@/concepts/navegacao/components/organisms/Navbar";

export default function Cadastro() {
  return (
    <DadosBasicosContextProvider>
      <EnderecoResidencialContextProvider>
        <EnderecoCobrancaContextProvider>
          <EnderecoResidencialContextProvider>
            <CartaoCreditoContextProvider>
              <Navbar />
              <FormPageTemplate subtitle="Cadastrar usuário">
                <DadosBasicosSection />
                <EnderecoResidencialSection />
                <EnderecoCobrancaSection />
                <EnderecoEntregaSection />
                <CreditCardSection />
              </FormPageTemplate>
            </CartaoCreditoContextProvider>
          </EnderecoResidencialContextProvider>
        </EnderecoCobrancaContextProvider>
      </EnderecoResidencialContextProvider>
    </DadosBasicosContextProvider>
  );
}
