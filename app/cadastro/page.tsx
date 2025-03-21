"use client";
import FormPageTemplate from "@/components/ui/form-page-template";
import FormPersisteClienteButton from "@/concepts/cadastro/CadastrarCliente/components/atoms/FormPersisteClienteButton";
import CadastrarClienteContextProvider from "@/concepts/cadastro/CadastrarCliente/contexts/CadastrarClienteContext";
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
import SegurancaSection from "@/concepts/cadastro/Seguranca/components/organisms/SegurancaSection";
import SessionContextProvider from "@/concepts/login/contexts/SessionContext";
import Navbar from "@/concepts/navegacao/components/organisms/Navbar";

export default function Cadastro() {
  return (
    <SessionContextProvider>
      <CadastrarClienteContextProvider>
        <DadosBasicosContextProvider>
          <EnderecoResidencialContextProvider>
            <EnderecoEntregaContextProvider>
              <EnderecoCobrancaContextProvider>
                <CartaoCreditoContextProvider>
                  <Navbar />
                  <FormPageTemplate
                    subtitle="Efetuar cadastro"
                    footer={<FormPersisteClienteButton />}
                  >
                    <DadosBasicosSection />
                    <SegurancaSection />
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
      </CadastrarClienteContextProvider>
    </SessionContextProvider>
  );
}
