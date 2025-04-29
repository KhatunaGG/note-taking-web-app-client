"use client";
import { useSignInStore } from "@/app/store/sign-in.store";
import { useEffect, useState } from "react";
import NoteDetails from "../noteDetails/NoteDetails";
import Notes from "../notes/Notes";

const Dashboard = () => {
  const { accessToken, initialize, currentUser } = useSignInStore();



  useEffect(() => {
    initialize();
  }, [initialize]);


  if (!accessToken) return null;

  return (
    <section className="w-full min-h-screen flex ">
      {/* <Notes /> */}
      <NoteDetails />
    </section>
  );
};

export default Dashboard;
