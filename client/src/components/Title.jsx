import baby_img from "./baby.png";
import Image from "next/image";

export default function Title() {
  return (
    <>
      <div className=" m-auto b flex h-[500px]">
        {/*
        <Image
          src={baby_img}
          alt="baby_img"
          className=" w-[300px] h-[300px] rounded-full  "
        />
  */}
        <p className="m-auto text-6xl">Using <span className="text-[rgb(225,29,73)]">optical Flow</span> for Respiratory Monitoring in Neonates</p>
      </div>
    </>
  );
}
