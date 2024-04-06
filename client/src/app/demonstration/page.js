"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [file, setFile] = useState(undefined);

  const handleSubmit = async (e) => {
    if (file === undefined) {
      alert("File is not present");
      return;
    }

    let formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.get("http://172.16.16.218:5000/demo", {
        body: formData,
      });
      alert("Sucessfull", response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = async (e) => {
    const data = e.target.files[0];

    if (data != null) {
      setFile(data);
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
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
      <div className="h-[700px]"></div>
      <Footer />
    </div>
  );
}
