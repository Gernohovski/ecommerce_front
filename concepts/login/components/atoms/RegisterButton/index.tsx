"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const RegisterButton: React.FC = () => {
  const router = useRouter();
  const handleButtonClick = useCallback(() => {
    router.push("/cadastro");
  }, [router]);

  return (
    <div className="text-sm flex flex-col">
      <span> Ainda não possui uma conta?</span>
      <Button
        variant="link"
        className="text-sm text-[#7738C8]"
        onClick={handleButtonClick}
      >
        Cadastre-se!
      </Button>
    </div>
  );
};

export default RegisterButton;
