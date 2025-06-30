import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useChatBotContext } from "@/concepts/chat-bot/contexts/ChatBotContext";
import { useSessionContext } from "@/concepts/login/contexts/SessionContext";
import Image from "next/image";
import { ChangeEvent, useCallback, useState } from "react";

const ChatMessageInput: React.FC = () => {
  const { enviarMensagem } = useChatBotContext();
  const { clienteId } = useSessionContext();
  const [mensagem, setMensagem] = useState<string>("");

  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMensagem(value);
  };

  const handleEnviarMensagem = useCallback(() => {
    enviarMensagem(mensagem, clienteId ?? localStorage.getItem("cliente"));
    setMensagem("");
  }, [clienteId, enviarMensagem, setMensagem, mensagem]);

  return (
    <div className="flex items-center gap-2 m-4">
      <Input
        className="shadow-sm w-[260px]"
        id="chat-bot-input"
        placeholder="Envie uma mensagem"
        value={mensagem}
        onChange={handleMessageChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleEnviarMensagem();
          }
        }}
      />
      <Button
        className="h-[40px]"
        variant="default"
        id="send-message-button"
        onClick={handleEnviarMensagem}
      >
        <Image
          src="/icons/send.svg"
          width={20}
          height={20}
          alt="Enviar mensagem"
        ></Image>
      </Button>
    </div>
  );
};

export default ChatMessageInput;
