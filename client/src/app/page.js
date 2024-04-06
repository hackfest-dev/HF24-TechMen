"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Title from "@/components/Title";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import Impact from "@/components/Impact";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="md:flex p-20">
        <Title />
        <Features />
      </div>
      <Impact />
      <Team />
      <Footer />
    </>
  );
}
