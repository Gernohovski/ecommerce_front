import Image from "next/image";

type CupomBadgeProps = {
  codigoCupom: string;
  cupomId: number;
  onClick: (cupomId: number) => void;
};

const CupomBadge: React.FC<CupomBadgeProps> = ({
  codigoCupom,
  cupomId,
  onClick,
}) => {
  return (
    <div
      id={`${codigoCupom}-badge`}
      className="bg-[#E4CFFF] rounded-[20px] w-auto h-[20px] flex items-center justify-between p-[5px] border border-black"
    >
      <span className="text-xs">{codigoCupom}</span>
      <div className="cursor-pointer" onClick={() => onClick(cupomId)}>
        <Image src="/icons/close.svg" alt="fechar" width={12} height={12} />
      </div>
    </div>
  );
};

export default CupomBadge;
