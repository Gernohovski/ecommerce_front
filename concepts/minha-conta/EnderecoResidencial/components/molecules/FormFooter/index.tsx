import CancelarEdicaoDadosBasicosButton from "@/concepts/minha-conta/DadosBasicos/components/atoms/CancelarEdicaoDadosBasicosButton";
import SalvarEnderecoResidencialButton from "../../atoms/SalvarEnderecoResidencialButton";

const FormFooter: React.FC = () => {
  return (
    <div className="flex gap-6">
      <CancelarEdicaoDadosBasicosButton />
      <SalvarEnderecoResidencialButton />
    </div>
  );
};

export default FormFooter;
