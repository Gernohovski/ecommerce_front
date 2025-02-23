"use client";
import SessionContextProvider from "@/concepts/login/contexts/SessionContext";
import Navbar from "@/concepts/navegacao/components/organisms/Navbar";

export default function Home() {
  return (
    <>
      <SessionContextProvider>
        <Navbar />
      </SessionContextProvider>
    </>
  );
}
