import CancelarEdicaoDadosBasicosButton from "../../atoms/CancelarEdicaoDadosBasicosButton";
import SalvarEdicaoDadosBasicosButton from "../../atoms/SalvarEdicaoDadosBasicosButton";

const FormDadosBasicosFooter: React.FC = () => {
  return (
    <div className="flex gap-4">
      <CancelarEdicaoDadosBasicosButton />
      <SalvarEdicaoDadosBasicosButton />
    </div>
  );
};

export default FormDadosBasicosFooter;
