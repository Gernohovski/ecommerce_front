import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useChatBotContext } from "@/concepts/chat-bot/contexts/ChatBotContext";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

export type ChatMessageInputProps = {
  isLoading: boolean;
};

const ChatMessageList: React.FC<ChatMessageInputProps> = ({ isLoading }) => {
  const { mensagens } = useChatBotContext();
  const router = useRouter();
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensagens]);

  const handleRedirect = useCallback(
    (livroId: string) => {
      router.push(`/visualizar-livro/${livroId}`);
    },
    [router]
  );

  return (
    <div>
      {mensagens.map((msg, idx) => (
        <div
          key={idx}
          className={`p-2 m-4 rounded-[15px] max-w-[80%] border border-[#382057] text-sm ${
            msg.origem === "cliente" ? "ml-auto bg-[#FFFFFF]" : "bg-[#F7F1FF]"
          }`}
        >
          {msg.mensagem}
          <div>
            {msg.livroId && (
              <Button
                className="mt-2"
                onClick={() => handleRedirect(String(msg.livroId))}
              >
                Ver livro na loja
              </Button>
            )}
          </div>
        </div>
      ))}
      {isLoading && (
        <div className="p-2 m-4 rounded-[15px] max-w-[80%] border border-[#382057] text-sm bg-[#F7F1FF]">
          <Spinner size="small" />
        </div>
      )}
      <div ref={bottomRef} />
    </div>
  );
};

export default ChatMessageList;
