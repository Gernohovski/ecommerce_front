import CloseChatButton from "../../atoms/CloseChatButton";
import MinimizeChatButton from "../../atoms/MinimizeChatButton";

type ActionsChatBotHeadearProps = {
  onClose: () => void;
  onMinimize: () => void;
};

const ActionsChatBotHeader: React.FC<ActionsChatBotHeadearProps> = ({
  onClose,
  onMinimize,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <MinimizeChatButton onMinimize={onMinimize} />
        <CloseChatButton onClose={onClose} />
      </div>
    </div>
  );
};

export default ActionsChatBotHeader;
