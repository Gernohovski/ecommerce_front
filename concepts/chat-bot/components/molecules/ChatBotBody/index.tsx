import { useChatBotContext } from "@/concepts/chat-bot/contexts/ChatBotContext";
import ChatMessageInput from "../../atoms/ChatMessageInput";
import ChatMessageList from "../../atoms/ChatMessageList";

const ChatBotBody: React.FC = () => {
  const { isLoading } = useChatBotContext();
  return (
    <div className="w-[350px] h-[496px] rounded-b-[20px] bg-white flex flex-col justify-between border-b border-r border-l border-[#382057]">
      <div
        className="w-[345px] h-[396px] bg-white max-h-[396px] overflow-y-auto
                      [&::-webkit-scrollbar]:w-2
                      [&::-webkit-scrollbar-track]:rounded-full
                    [&::-webkit-scrollbar-track]:bg-gray-100
                      [&::-webkit-scrollbar-thumb]:rounded-full
                    [&::-webkit-scrollbar-thumb]:bg-gray-300
                    dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                    dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
      >
        <ChatMessageList isLoading={isLoading} />
      </div>
      <ChatMessageInput />
    </div>
  );
};

export default ChatBotBody;
