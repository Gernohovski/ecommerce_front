import CancelarEdicaoCartaoButton from "../../atoms/CancelarEdicaoCartaoButton";
import SalvarEdicaoCartaoCreditoButton from "../../atoms/SalvarCartaoCreditoButton";

const FormFooter: React.FC = () => {
  return (
    <div className="flex gap-6">
      <CancelarEdicaoCartaoButton />
      <SalvarEdicaoCartaoCreditoButton />
    </div>
  );
};

export default FormFooter;
