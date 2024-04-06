"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";

export default function Page() {
  const handleInput = (e) => {
    const data = e.target.files[0];
    try {
      console.log(data);
        axios.get("http://172.16.16.218:5000/demonstration")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="video-data">Insert Video</Label>
        <Input
          id="video-data"
          type="file"
          accept="video/*"
          onInput={handleInput}
        />
      </div>
      <div className="h-[700px]">

      </div>
      <Footer />
    </div>
  );
}
