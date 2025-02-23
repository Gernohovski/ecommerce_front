"use client";
import LoginForm from "@/concepts/login/components/organisms/LoginForm";
import FormLoginContextProvider from "@/concepts/login/contexts/FormLoginContext";
import SessionContextProvider from "@/concepts/login/contexts/SessionContext";

export default function Login() {
  return (
    <SessionContextProvider>
      <FormLoginContextProvider>
        <LoginForm />
      </FormLoginContextProvider>
    </SessionContextProvider>
  );
}
