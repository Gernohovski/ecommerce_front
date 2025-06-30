"use client";
import AdminNavbar from "@/concepts/navegacao/components/organisms/AdminNavbar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/admin/dashboard");
  }, [router]);

  return (
    <div>
      <AdminNavbar />
    </div>
  );
}
