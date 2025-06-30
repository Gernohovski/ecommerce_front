export type DashBigNumbersType = {
  label: string;
  value: string;
};

const DashBigNumbers: React.FC<DashBigNumbersType> = ({ label, value }) => {
  return (
    <div className="flex flex-col items-center gap-4 mb-4 mt-4">
      <span className="text-2xl font-medium">{value}</span>
      <span className="text-[18px] font-medium">{label}</span>
    </div>
  );
};

export default DashBigNumbers;
