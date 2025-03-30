import Image from "next/image";

const ClientesTableEmpty: React.FC = () => {
  return (
    <div className="flex flex-col items-center m-6">
      <Image
        src="/icons/cloud-alert.svg"
        width={80}
        height={80}
        alt="Cloud Alert"
      />
      <span>Ocorreu um erro ao buscar os dados dos clientes.</span>
    </div>
  );
};

export default ClientesTableEmpty;
