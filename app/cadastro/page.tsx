"use client";
import FormPageTemplate from "@/components/ui/form-page-template";
import FormPersisteClienteButton from "@/concepts/cadastro/CadastrarCliente/components/atoms/FormPersisteClienteButton";
import CreditCardSection from "@/concepts/cadastro/CartaoCredito/components/organisms/CartaoDeCreditoSection";
import CartaoCreditoContextProvider from "@/concepts/cadastro/CartaoCredito/contexts/CartaoCreditoContextProvider";
import DadosBasicosSection from "@/concepts/cadastro/DadosBasicos/components/organisms/DadosBasicosSection";
import DadosBasicosContextProvider from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";
import EnderecoCobrancaSection from "@/concepts/cadastro/EnderecoCobranca/components/organisms/EnderecoCobrancaSection";
import EnderecoCobrancaContextProvider from "@/concepts/cadastro/EnderecoCobranca/contexts/EnderecoCobrancaContext";
import EnderecoEntregaSection from "@/concepts/cadastro/EnderecoEntrega/components/organisms/EnderecoEntregaSection";
import EnderecoEntregaContextProvider from "@/concepts/cadastro/EnderecoEntrega/contexts/EnderecoEntregaContext";
import EnderecoResidencialSection from "@/concepts/cadastro/EnderecoResidencial/components/organisms/EnderecoResidencialSection";
import EnderecoResidencialContextProvider from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext";
import SessionContextProvider from "@/concepts/login/contexts/SessionContext";
import Navbar from "@/concepts/navegacao/components/organisms/Navbar";

export default function Cadastro() {
  return (
    <SessionContextProvider>
      <DadosBasicosContextProvider>
        <EnderecoResidencialContextProvider>
          <EnderecoEntregaContextProvider>
            <EnderecoCobrancaContextProvider>
              <CartaoCreditoContextProvider>
                <Navbar />
                <FormPageTemplate
                  subtitle="Cadastrar usuário"
                  footer={<FormPersisteClienteButton />}
                >
                  <DadosBasicosSection />
                  <EnderecoResidencialSection />
                  <EnderecoCobrancaSection />
                  <EnderecoEntregaSection />
                  <CreditCardSection />
                </FormPageTemplate>
              </CartaoCreditoContextProvider>
            </EnderecoCobrancaContextProvider>
          </EnderecoEntregaContextProvider>
        </EnderecoResidencialContextProvider>
      </DadosBasicosContextProvider>
    </SessionContextProvider>
  );
}
