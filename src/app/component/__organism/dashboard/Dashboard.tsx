"use client";

import { useSignInStore } from "@/app/store/sign-in.store";
import { useEffect } from "react";
import NoteDetails from "../noteDetails/NoteDetails";
import Notes from "../notes/Notes";

const Dashboard = () => {
  const { accessToken, initialize, currentUser } = useSignInStore();
  console.log(currentUser, "currentUser");
  useEffect(() => {
    initialize();
  }, [initialize]);

  if (!accessToken) return null;

  return (
    <section className="w-full min-h-screen flex ">
      <Notes />
      <NoteDetails />
    </section>
  );
};

export default Dashboard;
