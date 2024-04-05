"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Title from "@/components/Title";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex p-20"><Title />
      <Features /></div>
      
    </>
  );
}
