import CancelarEdicaoEnderecoResidencialButton from "../../atoms/CancelarEdicaoEnderecoResidencialButton";
import SalvarEnderecoResidencialButton from "../../atoms/SalvarEnderecoResidencialButton";

const FormFooter: React.FC = () => {
  return (
    <div className="flex gap-6">
      <CancelarEdicaoEnderecoResidencialButton />
      <SalvarEnderecoResidencialButton />
    </div>
  );
};

export default FormFooter;
