"use client";
import Homepage from "@/concepts/homepage/components/organisms/Homepage";
import FiltrosContextProvider from "@/concepts/livros/contexts/FiltrosContext";
import SessionContextProvider from "@/concepts/login/contexts/SessionContext";
import Navbar from "@/concepts/navegacao/components/organisms/Navbar";

export default function Home() {
  return (
    <FiltrosContextProvider>
      <SessionContextProvider>
        <Navbar />
        <Homepage />
      </SessionContextProvider>
    </FiltrosContextProvider>
  );
}
