import React from "react";

export interface InfoItem {
  label: string;
  value: string | number;
}

interface InfoListProps {
  data: InfoItem[];
  columns?: number;
}

const InfoList: React.FC<InfoListProps> = ({ data = [], columns = 3 }) => {
  return (
    <div
      className="grid gap-6 min-w-[1106px] max-w-[1106px]"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }} // ✅ Define colunas dinamicamente
    >
      {data.map((item, index) => (
        <InfoBlock key={index} label={item.label} value={item.value} />
      ))}
    </div>
  );
};

const InfoBlock: React.FC<InfoItem> = ({ label, value }) => (
  <div className="flex items-center">
    <span className="font-semibold">{label}:</span>
    <span className="ml-2">{value}</span>
  </div>
);

export default InfoList;
