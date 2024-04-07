"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function Page() {
  const [file, setFile] = useState(undefined);
  const [dataUrl, setDataUrl] = useState(undefined);
  const [result, setResult] = useState(undefined);
  const [rate, setRate] = useState(0);
  const [load, setLoad] = useState(false);
  const [graph, setGraph] = useState(undefined);

  const convertDataUrlToVideo = (base64String, type) => {
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
      await fetch(`http://172.16.16.218:5000/demo`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ file: dataUrl }),
      }).then(async (res) => {
        const data = await res.json();

        setRate(data.respiratoryRate);
        setResult(convertDataUrlToVideo(data.video, "video/mp4"));
        setGraph(convertDataUrlToVideo(data.graph, "image/png"));
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
        <Button onClick={handleSubmit} disabled={load}>
          {load ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              This might take several minutes
            </>
          ) : (
            "submit"
          )}
        </Button>
      </div>
      {load ? (
        <>
          <div className="h-[700px] w-full flex justify-center space-x-5 mt-5 content-center">
            <Skeleton className="w-[500px] h-[300px] rounded-md" />
            <Skeleton className="w-[500px] h-[300px] rounded-md" />
          </div>
        </>
      ) : result ? (
        <>
          <div className="md:flex justify-center md:space-x-5 mt-5">
            <video
              className="w-[500px] h-[500px] rounded-md max-md:m-auto"
              controls
              src={dataUrl}
              autoPlay
            ></video>
            <video
              className="w-[500px] h-[500px] rounded-md max-md:m-auto"
              controls
              src={result}
              autoPlay
            ></video>
          </div>
          <div className="w-full flex flex-row justify-center gap-96 mt-2">
            <Label className="text-md">Original Video</Label>
            <Label className="text-md">Processed Video</Label>
          </div>
          <Image
            src={graph}
            alt="graph"
            width={500}
            height={500}
            className="m-auto mt-8 border-2"
          />
          <p
            className={`text-center mb-3 text-md mt-2 w-full ${
              parseInt(rate) < 30 ? "text-red-500" : ""
            }`}
          >
            {parseInt(rate) > 30
              ? `Normal Respiratory Rate: ${rate}`
              : `Low Respiratory Rate: ${rate}`}
          </p>
          <div className="w-full flex flex-row justify-center mb-5">
            {parseInt(rate) < 30 ? (
              <p className="text-center bg-destructive p-2 rounded-md text-md">
                You might want to consult a doctor
              </p>
            ) : (
              <>
                <p className="text-center bg-foreground text-background p-2 rounded-md text-md">
                  Your respiratory rate is normal
                </p>
              </>
            )}
          </div>
        </>
      ) : (
        <></>
      )}
      <div className={`${result ? "" : "absolute bottom-0 w-full"}`}>
        <Footer />
      </div>
    </div>
  );
}
