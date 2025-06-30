"use client";

import ChatBotModal from "@/concepts/chat-bot/components/organisms/ChatBotModal";
import ChatBotContextProvider, {
  useChatBotContext,
} from "@/concepts/chat-bot/contexts/ChatBotContext";

const ChatBotRenderer: React.FC = () => {
  const { isOpen, closeChatBot } = useChatBotContext();

  return <ChatBotModal isOpen={isOpen} onClose={closeChatBot} />;
};

export function ChatBotProvider({ children }: { children: React.ReactNode }) {
  return (
    <ChatBotContextProvider>
      {children}
      <ChatBotRenderer />
    </ChatBotContextProvider>
  );
}
