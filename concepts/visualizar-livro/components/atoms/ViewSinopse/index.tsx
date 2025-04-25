type ViewSinopseProps = {
  sinopse?: string;
};

const ViewSinopse: React.FC<ViewSinopseProps> = ({ sinopse }) => {
  return (
    <div>
      <div className="relative">
        <div
          className={`w-auto h-[130px] bg-white overflow-y-auto
                      [&::-webkit-scrollbar]:w-2
                      [&::-webkit-scrollbar-track]:rounded-full
                    [&::-webkit-scrollbar-track]:bg-gray-100
                      [&::-webkit-scrollbar-thumb]:rounded-full
                    [&::-webkit-scrollbar-thumb]:bg-gray-300
                    dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                    dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500`}
        >
          <span className="block text-base text-justify hyphens-auto pr-4 h-[130px]">
            {sinopse}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ViewSinopse;
