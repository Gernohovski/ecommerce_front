import Sidebar from "@/components/ui/sidebar";
import CartoesCreditoButton from "../../atoms/CartoesCreditoButton";
import DadosBasicosButton from "../../atoms/DadosBasicosButton";
import EnderecoCobrancaButton from "../../atoms/EnderecoCobrancaButton";
import EnderecoEntregaButton from "../../atoms/EnderecoEntregaButton";
import EnderecosResidenciasButton from "../../atoms/EnderecosResidenciasButton";
import SegurancaButton from "../../atoms/SegurancaButton";

const MinhaContaSidebar: React.FC = () => {
  return (
    <Sidebar>
      <DadosBasicosButton />
      <SegurancaButton />
      <EnderecosResidenciasButton />
      <EnderecoCobrancaButton />
      <EnderecoEntregaButton />
      <CartoesCreditoButton />
    </Sidebar>
  );
};

export default MinhaContaSidebar;
