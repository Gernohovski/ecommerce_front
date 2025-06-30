import { Dispatch, SetStateAction } from "react";

export type Mensagem = {
  origem: "cliente" | "bot";
  mensagem: string;
  livroId?: number;
};

export type ChatBotContextType = {
  mensagens: Mensagem[];
  setMensagens: Dispatch<SetStateAction<Mensagem[]>>;
  isMinimized: boolean;
  setIsMinimized: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  enviarMensagem: (mensagem: string, clienteId: number) => void;
  openChatBot: () => void;
  closeChatBot: () => void;
  toggleChatBot: () => void;
  toggleIsMinimized: () => void;
  isLoading: boolean;
};
