import Section from "@/components/ui/section";
import { useCadastrarClienteContext } from "@/concepts/cadastro/CadastrarCliente/contexts/CadastrarClienteContext";
import Image from "next/image";
import FirstLine from "../../molecules/FirstLine";

const SegurancaSection: React.FC = () => {
  const { errors } = useCadastrarClienteContext();
  return (
    <Section
      icon={<Image src="/icons/lock.svg" alt="Bookly" width={30} height={30} />}
      title="Segurança"
      subtitle="Preencha suas informações de segurança"
    >
      <FirstLine errors={errors} />
    </Section>
  );
};

export default SegurancaSection;
