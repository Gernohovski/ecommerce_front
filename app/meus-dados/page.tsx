"use client";
import CartaoCreditoContextProvider from "@/concepts/cadastro/CartaoCredito/contexts/CartaoCreditoContextProvider";
import DadosBasicosContextProvider from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";
import EnderecoCobrancaContextProvider from "@/concepts/cadastro/EnderecoCobranca/contexts/EnderecoCobrancaContext";
import EnderecoEntregaContextProvider from "@/concepts/cadastro/EnderecoEntrega/contexts/EnderecoEntregaContext";
import EnderecoResidencialContextProvider from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext";
import SessionContextProvider from "@/concepts/login/contexts/SessionContext";
import ViewCartaoCreditoSection from "@/concepts/minha-conta/CartoesCredito/components/organisms/ViewCartaoCreditoSection";
import MinhaContaSidebar from "@/concepts/minha-conta/Sidebar/components/organisms/MinhaContaSidebar";
import Navbar from "@/concepts/navegacao/components/organisms/Navbar";

export default function Cadastro() {
  return (
    <SessionContextProvider>
      <DadosBasicosContextProvider>
        <EnderecoResidencialContextProvider>
          <EnderecoCobrancaContextProvider>
            <EnderecoEntregaContextProvider>
              <CartaoCreditoContextProvider>
                <Navbar />
                <div className="flex gap-10 h-auto">
                  <MinhaContaSidebar />
                  <div className="mt-6 mb-6">
                    <ViewCartaoCreditoSection />
                  </div>
                </div>
              </CartaoCreditoContextProvider>
            </EnderecoEntregaContextProvider>
          </EnderecoCobrancaContextProvider>
        </EnderecoResidencialContextProvider>
      </DadosBasicosContextProvider>
    </SessionContextProvider>
  );
}
