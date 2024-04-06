"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page(){
    return(
        <div>
            <Navbar />
            <input type="file" accept="video/*"></input>
            <div className="h-[500px]">
            </div>
            <Footer />
        </div>
    );
}