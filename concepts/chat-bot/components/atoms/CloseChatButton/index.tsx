import { X } from "lucide-react";

type CloseChatButtonProps = {
  onClose: () => void;
};

const CloseChatButton: React.FC<CloseChatButtonProps> = ({ onClose }) => {
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        onClose();
      }}
    >
      <X />
    </div>
  );
};

export default CloseChatButton;
