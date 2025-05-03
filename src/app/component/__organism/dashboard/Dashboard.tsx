"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSignInStore } from "@/app/store/sign-in.store";

const Dashboard = () => {
  const { accessToken, initialize, isLoading } = useSignInStore();
  const router = useRouter();

  useEffect(() => {
    initialize();
  }, [initialize]);

  useEffect(() => {
    if (accessToken) {
      router.replace("/note");
    }
  }, [accessToken, router]);

  if (isLoading || !accessToken) {
    return <div>Loading...</div>;
  }

  return null;
};

export default Dashboard;
