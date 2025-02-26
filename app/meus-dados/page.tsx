"use client";
import CartaoCreditoContextProvider from "@/concepts/cadastro/CartaoCredito/contexts/CartaoCreditoContextProvider";
import DadosBasicosContextProvider from "@/concepts/cadastro/DadosBasicos/contexts/DadosBasicosContext";
import EnderecoCobrancaContextProvider from "@/concepts/cadastro/EnderecoCobranca/contexts/EnderecoCobrancaContext";
import EnderecoEntregaContextProvider from "@/concepts/cadastro/EnderecoEntrega/contexts/EnderecoEntregaContext";
import EnderecoResidencialContextProvider from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext";
import SessionContextProvider from "@/concepts/login/contexts/SessionContext";
import SidebarNavegacaoContextProvider from "@/concepts/minha-conta/Sidebar/contexts/SidebarNavegacaoContext";
import ViewInformacoesPage from "@/concepts/minha-conta/VisualizarInformacoes/components/organisms/ViewInformacoesPage";
import Navbar from "@/concepts/navegacao/components/organisms/Navbar";

export default function Cadastro() {
  return (
    <SessionContextProvider>
      <SidebarNavegacaoContextProvider>
        <DadosBasicosContextProvider>
          <EnderecoResidencialContextProvider>
            <EnderecoCobrancaContextProvider>
              <EnderecoEntregaContextProvider>
                <CartaoCreditoContextProvider>
                  <Navbar />
                  <ViewInformacoesPage />
                </CartaoCreditoContextProvider>
              </EnderecoEntregaContextProvider>
            </EnderecoCobrancaContextProvider>
          </EnderecoResidencialContextProvider>
        </DadosBasicosContextProvider>
      </SidebarNavegacaoContextProvider>
    </SessionContextProvider>
  );
}
