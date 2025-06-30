import { useChatBotContext } from "@/concepts/chat-bot/contexts/ChatBotContext";
import useDeleteHistoricoCliente from "@/concepts/chat-bot/hooks/useDeleteHistoricoCliente";
import { useSessionContext } from "@/concepts/login/contexts/SessionContext";
import errorMessage, { APIError } from "@/utils/error-message";
import clsx from "clsx";
import { useCallback } from "react";
import { createPortal } from "react-dom";
import ChatBotBody from "../../molecules/ChatBotBody";
import ChatBotHeader from "../../molecules/ChatBotHeader";

interface CarrinhoProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatBotModal: React.FC<CarrinhoProps> = ({ isOpen, onClose }) => {
  const { setMensagens, isMinimized, setIsMinimized } = useChatBotContext();
  const { mutate } = useDeleteHistoricoCliente();
  const { clienteId } = useSessionContext();

  const onCloseModal = useCallback(() => {
    mutate(
      { id: clienteId },
      {
        onSuccess: () => {
          onClose();
          setMensagens([
            {
              origem: "bot",
              mensagem: "Olá, eu sou a LexIA, como posso te ajudar hoje?",
            },
          ]);
        },
        onError: (error) => {
          errorMessage(error as APIError);
        },
      }
    );
  }, [onClose, setMensagens, mutate, clienteId]);

  const onMinimizeModal = useCallback(() => {
    setIsMinimized(!isMinimized);
  }, [setIsMinimized, isMinimized]);

  // useEffect(() => {
  //   if (isOpen && !isMinimized) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [isOpen, isMinimized]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className={clsx(
        "fixed z-50",
        isMinimized
          ? "bottom-0 right-0"
          : "inset-0 flex items-end justify-end bg-black bg-opacity-50"
      )}
    >
      <div
        className={clsx(
          "relative shadow-lg",
          isMinimized
            ? "w-full h-auto rounded-md overflow-hidden"
            : "w-[350px] h-[540px]"
        )}
      >
        <ChatBotHeader onClose={onCloseModal} onMinimize={onMinimizeModal} />
        {!isMinimized && <ChatBotBody />}
      </div>
    </div>,
    document.body
  );
};

export default ChatBotModal;
