"use client";

import { Button } from "@/components/ui/button";
import { useChatBotContext } from "@/concepts/chat-bot/contexts/ChatBotContext";
import Image from "next/image";

const IAButton: React.FC = () => {
  const { toggleChatBot, isMinimized, setIsMinimized } = useChatBotContext();

  return (
    <Button
      id="ia-button"
      asChild
      className="flex flex-col h-auto gap-0 items-center hover:text-[#7738C8]"
      variant="ghost"
      onClick={isMinimized ? () => setIsMinimized(!isMinimized) : toggleChatBot}
    >
      <div className="cursor-pointer">
        <Image
          src="/icons/ia.svg"
          alt="Inteligência artificial"
          width={43}
          height={43}
        />
        <span className="text-sm">LexIA</span>
      </div>
    </Button>
  );
};

export default IAButton;
