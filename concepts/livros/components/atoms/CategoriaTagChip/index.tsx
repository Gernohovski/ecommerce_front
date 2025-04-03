type Props = {
  categoria: string;
};

const CategoriaTagChip: React.FC<Props> = ({ categoria }) => {
  return (
    <div className="flex min-w-[69px] max-w-[69px] min-h-[20px] max-h-[20px] justify-center items-center bg-[#F7F1FF] border-[#382057] border rounded-[6px]">
      <span className="text-xs text-[#382057]">{categoria}</span>
    </div>
  );
};

export default CategoriaTagChip;
