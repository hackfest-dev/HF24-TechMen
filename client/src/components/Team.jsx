import pratham from "./images/pratham.jpeg";
import rahul from "./images/rahul.png";
import athul from "./images/athul.png";
import Image from "next/image";

export default function Team() {
  return (
    <div id="team">
      <h1 className="text-center text-3xl font-bold font-mono mb-10">Our Team</h1>

      <div className="md:flex justify-center md:space-x-16 mb-5 font-mono">
        <div>
          <Image src={pratham} className="rounded-full h-40 w-40 m-auto"></Image>
          <p className="text-center text-xl mt-2 max-md:mb-3">Pratham A Kadekar</p>
        </div>
        <div>
          <Image src={rahul} className="rounded-full h-40 w-40 m-auto"></Image>
          <p className="text-center text-xl mt-2 max-md:mb-3">Rahul AR</p>
        </div>
        <div>
          <Image src={athul} className="rounded-full h-40 w-40 m-auto"></Image>
          <p className="text-center text-xl mt-2 max-md:mb-3">Athul D Bhandary</p>
        </div>
      </div>
    </div>
  );
}
