"use client";
import Dock from "./components/Dock/Dock";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full ">
      <Navbar />
      <Dock />
    </main>
  );
}
