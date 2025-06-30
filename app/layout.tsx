// app/layout.tsx (ou app/root/layout.tsx)

import CarrinhoContextProvider from "@/concepts/carrinho/contexts/CarrinhoContext";
import { ChatBotProvider } from "@/concepts/chat-bot/components/organisms/ChatBotRenderer";
import FiltrosContextProvider from "@/concepts/livros/contexts/FiltrosContext";
import SessionContextProvider from "@/concepts/login/contexts/SessionContext";
import QueryProvider from "@/utils/contexts/QueryContext";
import { ToastProvider } from "@/utils/contexts/ToastProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Bookly</title>
        <meta name="description" content="Compre livros incríveis online" />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        <ToastProvider>
          <SessionContextProvider>
            <FiltrosContextProvider>
              <CarrinhoContextProvider>
                <QueryProvider>
                  <ChatBotProvider>{children}</ChatBotProvider>
                </QueryProvider>
              </CarrinhoContextProvider>
            </FiltrosContextProvider>
          </SessionContextProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
