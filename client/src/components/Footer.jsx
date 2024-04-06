import { FaGithub } from "react-icons/fa";

export default function Footer(){

    const github_link="https://github.com/hackfest-dev/HF24-TechMen/tree/main"

    return(
        <div className="dark:bg-[rgb(26,24,26)] py-5 bg-[rgb(255,201,213)]">
        <p className="text-center">© 2024 TechMen</p>
        <FaGithub className="mx-auto mt-2 text-xl cursor-pointer dark:text-[rgb(225,29,73)]" onClick={()=>window.open(github_link)}/>
        </div>
    );
}