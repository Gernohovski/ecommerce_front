"use client";
import errorMessage from "@/utils/error-message";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import useSolicitarRecomendacao from "../../hooks/useSolicitarRecomendacao";
import { ChatBotContextType, Mensagem } from "./types";

const ChatBotContext = createContext({} as ChatBotContextType);

export const useChatBotContext = () => useContext(ChatBotContext);

const ChatBotContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { mutate, status } = useSolicitarRecomendacao();
  const [mensagens, setMensagens] = useState<Mensagem[]>([
    {
      origem: "bot",
      mensagem: "Olá, eu sou a LexIA, como posso te ajudar hoje?",
    },
  ]);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const isLoading = useMemo(() => {
    return status === "pending";
  }, [status]);

  const openChatBot = useCallback(() => {
    setIsOpen(true);
  }, []);
  const closeChatBot = useCallback(() => {
    setIsOpen(false);
  }, []);
  const toggleChatBot = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  const toggleIsMinimized = useCallback(() => {
    setIsMinimized((prev) => !prev);
  }, []);

  const enviarMensagem = useCallback(
    (mensagem: string, clienteId: number) => {
      const mensagemUsuario: Mensagem = { origem: "cliente", mensagem };
      setMensagens((prev) => [...prev, mensagemUsuario]);
      mutate(
        { pergunta: mensagem, clienteId: clienteId },
        {
          onSuccess: (data) => {
            const mensagemReposta: Mensagem = {
              origem: "bot",
              mensagem: data.mensagem,
              livroId: data?.livroId,
            };
            setMensagens((prev) => [...prev, mensagemReposta]);
          },
          onError: (error) => {
            errorMessage(error);
          },
        }
      );
    },
    [mutate]
  );

  const values = useMemo(
    () => ({
      mensagens,
      setMensagens,
      isMinimized,
      setIsMinimized,
      isOpen,
      setIsOpen,
      enviarMensagem,
      openChatBot,
      closeChatBot,
      toggleChatBot,
      toggleIsMinimized,
      isLoading,
    }),
    [
      mensagens,
      enviarMensagem,
      isMinimized,
      isOpen,
      openChatBot,
      closeChatBot,
      toggleChatBot,
      toggleIsMinimized,
      isLoading,
    ]
  );
  return (
    <ChatBotContext.Provider value={values}>{children}</ChatBotContext.Provider>
  );
};

export default ChatBotContextProvider;
