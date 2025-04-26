import { SituacaoPedidoNomeMap } from "@/constants/situacao-pedido";
import { darkenColor } from "@/utils/darken-color";

type SituacaoBadgeProps = {
  situacaoNome: string;
};

const SituacaoBadge: React.FC<SituacaoBadgeProps> = ({ situacaoNome }) => {
  const corSituacaoPedido: Record<string, string> = {
    "aprovacao-de-pagamento": "#FFFCB1",
    "pendente-de-envio": "#FFFCB1",
    "em-transito": "#FFFCB1",
    "solicitacao-de-troca": "#FFFCB1",

    "pedido-recebido": "#C9FFB1",
    "pedido-finalizado": "#C9FFB1",
    "troca-finalizada": "#C9FFB1",

    "troca-aprovada": "#B1C5FF",

    "pagamento-recusado": "#FFB1B3",
    "pedido-cancelado": "#FFB1B3",
    "pedido-nao-entregue": "#FFB1B3",
    "troca-recusada": "#FFB1B3",
  };

  const cor = corSituacaoPedido[situacaoNome] || "#E0E0E0";
  const corBorda = darkenColor(cor, 150);

  return (
    <div
      className="rounded-[20px] w-auto h-[20px] flex items-center justify-center px-2 border text-xs"
      style={{
        backgroundColor: cor,
        borderColor: corBorda,
      }}
    >
      <span className="text-xs" style={{ color: corBorda }}>
        {SituacaoPedidoNomeMap[situacaoNome]}
      </span>
    </div>
  );
};

export default SituacaoBadge;
