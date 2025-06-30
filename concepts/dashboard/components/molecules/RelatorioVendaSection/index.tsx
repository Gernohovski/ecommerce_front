import { FiltrarVendasResponse } from "@/concepts/dashboard/hooks/useFiltrarVendas/types";
import Image from "next/image";
import DashBigNumbers from "../../atoms/DashBigNumbers";

type RelatorioVendaSectionType = {
  vendas?: FiltrarVendasResponse;
};

const RelatorioVendaSection: React.FC<RelatorioVendaSectionType> = ({
  vendas,
}) => {
  return (
    <div className="bg-white w-[267px] h-[656px] rounded-[20px]">
      <div className="p-8">
        <div className="flex gap-2 items-center">
          <Image
            src="/icons/bill.svg"
            alt="simbolo-dinheiro"
            width={42}
            height={42}
          />
          <span className="text-lg text-[#7738C8] font-bold">
            Relatório geral
          </span>
        </div>
        <div className="mt-4">
          <div className="h-[3px] bg-[#EFE3FF]"></div>
          <DashBigNumbers
            value={vendas?.numeroVendas ? String(vendas?.numeroVendas) : "0"}
            label="Número de vendas"
          />
        </div>
        <div>
          <div className="h-[3px] bg-[#EFE3FF]"></div>
          <DashBigNumbers
            value={vendas?.novosClientes ? String(vendas?.novosClientes) : "0"}
            label="Novos clientes"
          />
        </div>
        <div className="mt-4">
          <div className="h-[3px] bg-[#EFE3FF]"></div>
          <DashBigNumbers value={"0"} label="Pedidos cancelados" />
        </div>
        <div className="mt-4">
          <div className="h-[3px] bg-[#EFE3FF]"></div>
          <DashBigNumbers value={"0"} label="Livros Vendidos" />
        </div>
        <div className="mt-4">
          <div className="h-[3px] bg-[#EFE3FF]"></div>
          <DashBigNumbers value={"0"} label="Trocas solicitadas" />
        </div>
      </div>
    </div>
  );
};

export default RelatorioVendaSection;
