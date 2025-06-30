import ChatBotIcon from "../../atoms/ChatBotIcon";
import ActionsChatBotHeader from "../ActionsChatBotHeadear";

type ChatBotHeaderProps = {
  onClose: () => void;
  onMinimize: () => void;
};

const ChatBotHeader: React.FC<ChatBotHeaderProps> = ({
  onClose,
  onMinimize,
}) => {
  return (
    <div>
      <div className="w-[350px] h-[44px] bg-white flex items-center justify-between px-3 rounded-t-[20px] border-t border-r border-l border-[#382057]">
        <ChatBotIcon />
        <ActionsChatBotHeader onClose={onClose} onMinimize={onMinimize} />
      </div>
      <div className="h-[1px] bg-gray-300 border-r border-l border-[#382057]"></div>
    </div>
  );
};

export default ChatBotHeader;
