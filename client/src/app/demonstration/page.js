"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

export default function Page() {
  const [file, setFile] = useState(undefined);
  const [dataUrl, setDataUrl] = useState(undefined);
  const [result, setResult] = useState(undefined);
  const [rate, setRate] = useState(0);
  const [load, setLoad] = useState(false);
  const [ graph , setGraph ] = useState(undefined);

  const convertDataUrlToVideo = (base64String,type) => {
    let byteString = atob(base64String);

    let arrayBuffer = new ArrayBuffer(byteString.length);
    let uint8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i);
    }

    let blob = new Blob([arrayBuffer], { type: type });

    let url = URL.createObjectURL(blob);
    return url;
  };

  const handleSubmit = async (e) => {
    setLoad(true);
    if (file === undefined) {
      alert("File is not present");
      setLoad(false);
      return;
    }
    try {
      await fetch(`http://172.16.16.218:5000/test`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ file: dataUrl }),
      }).then(async (res) => {
        const data = await res.json();
        
        setRate(data.respiratoryRate);
        setResult(convertDataUrlToVideo(data.video , "video/mp4"))
        setGraph(convertDataUrlToVideo(data.graph , "image/png"))
        setLoad(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = async (e) => {
    const data = e.target.files[0];

    if (data != null) {
      setFile(data);

      let videoBlob = new Blob([data], { type: "video/mp4" });
      let reader = new FileReader();
      reader.onload = function (event) {
        setDataUrl(event.target.result);
      };

      reader.readAsDataURL(videoBlob);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="grid w-full max-w-sm items-center gap-1.5 m-auto mt-16">
        <Label htmlFor="video-data">Insert Video</Label>
        <Input
          id="video-data"
          type="file"
          accept="video/*"
          onInput={handleInput}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
      <div className="h-[700px] flex justify-center space-x-5 mt-5">
        {load ? (
          <>
            <Skeleton className="w-[300px] h-[300px] rounded-md" />
            <Skeleton className="w-[300px] h-[300px] rounded-md" />
          </>
        ) : result ? (
          <>
            <video
              className="w-[300px] h-[300px] rounded-md"
              controls
              src={dataUrl}
              autoPlay
            ></video>
            <video
              className="w-[300px] h-[300px] rounded-md"
              controls
              src={result}
              autoPlay 
            ></video>
            <Image src={graph} alt="graph" width={300} height={300} />
            <p>Respiratory Rate: {rate}</p>
          </>
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </div>
  );
}
