import QueryProvider from "@/utils/contexts/QueryContext";
import { ToastContainer } from "react-toastify";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
