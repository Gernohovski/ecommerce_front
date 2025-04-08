import CarrinhoContextProvider from "@/concepts/carrinho/contexts/CarrinhoContext";
import FiltrosContextProvider from "@/concepts/livros/contexts/FiltrosContext";
import QueryProvider from "@/utils/contexts/QueryContext";
import { ToastProvider } from "@/utils/contexts/ToastProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          <FiltrosContextProvider>
            <CarrinhoContextProvider>
              <QueryProvider>{children}</QueryProvider>
            </CarrinhoContextProvider>
          </FiltrosContextProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
