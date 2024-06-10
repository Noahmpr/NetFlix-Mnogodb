// 'use client'
import { ReactNode } from "react";
// import { redirect } from "next/navigation";
import Navbar from "../components/Navbar";

export default  function HomeLayout({
  children,
}: {
  children: ReactNode;
}) {
  // const storedData = localStorage.getItem('authToken');

  // if (!storedData) {
  //   return redirect("/sign-in");
  // }

  return (
    <>
      <Navbar />
      <main className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  );
}