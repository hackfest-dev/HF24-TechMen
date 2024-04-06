import pratham from "./images/pratham.jpeg";
import rahul from "./images/rahul.png";
import athul from "./images/athul.png";
import Image from "next/image";

export default function Team() {

  const pratham_github="https://github.com/pratham-ak2004";
  const rahul_github="https://github.com/rahul-ar-sys";
  const athul_github="https://github.com/Athul28";

  return (
    <div id="team">
      <h1 className="text-center text-3xl font-bold font-mono mb-10">Our Team</h1>

      <div className="md:flex justify-center md:space-x-16 mb-5 font-mono">
        <div>
          <Image src={pratham} className="rounded-full h-40 w-40 m-auto" alt="Pratham Image"></Image>
          <p className="text-center text-xl mt-2 max-md:mb-3 cursor-pointer hover:text-[rgb(225,29,73)]" onClick={()=>window.open(pratham_github,'_self')}>Pratham A Kadekar</p>
        </div>
        <div>
          <Image src={rahul} className="rounded-full h-40 w-40 m-auto" alt="Rahul Image"></Image>
          <p className="text-center text-xl mt-2 max-md:mb-3 cursor-pointer hover:text-[rgb(225,29,73)]" onClick={()=>window.open(rahul_github,'_self')}>Rahul AR</p>
        </div>
        <div>
          <Image src={athul} className="rounded-full h-40 w-40 m-auto" alt="Athul Image"></Image>
          <p className="text-center text-xl mt-2 max-md:mb-3 md:mb-10 cursor-pointer hover:text-[rgb(225,29,73)]" onClick={()=>window.open(athul_github,'_self')}>Athul D Bhandary</p>
        </div>
      </div>    
    </div>
  );
}
