import { useChatBotContext } from "@/concepts/chat-bot/contexts/ChatBotContext";
import { Maximize2, Minimize2 } from "lucide-react";

type MinimizeChatButtonProps = {
  onMinimize: () => void;
};

const MinimizeChatButton: React.FC<MinimizeChatButtonProps> = ({
  onMinimize,
}) => {
  const { isMinimized } = useChatBotContext();
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        onMinimize();
      }}
    >
      {isMinimized ? <Maximize2 /> : <Minimize2 />}
    </div>
  );
};

export default MinimizeChatButton;
