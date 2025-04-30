"use client";
import { useSignInStore } from "@/app/store/sign-in.store";
import { useEffect } from "react";
import NoteDetails from "../noteDetails/NoteDetails";

const Dashboard = () => {
  const { accessToken, initialize, currentUser } = useSignInStore();

  useEffect(() => {
    initialize();
  }, [initialize]);

  if (!accessToken) return null;

  return <NoteDetails />;
};

export default Dashboard;
