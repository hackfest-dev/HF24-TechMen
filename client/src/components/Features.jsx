import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Features() {
  const openElement = (elementId) => {
    const Element = document.getElementById(elementId);
    Element.scrollIntoView({ behavior: "smooth" });
  };
  const docs_link="/documentation";
  const github_link="https://github.com/hackfest-dev/HF24-TechMen/tree/main"
  return (
    <div>
      <div className="lg:flex justify-center">
        <div className="lg:flex flex-col items-center justify-center md:space-x-10 space-y-10">
          <Card className="mt-[100px]  w-[250px] h-[140px] hover:scale-105 transition shadow-sm hover:shadow-md hover:shadow-[rgb(225,29,73)] shadow-[rgb(225,29,73)]">
            <CardHeader>
              <CardTitle>GitHub</CardTitle>
              <CardDescription>Visit the repo</CardDescription>
            </CardHeader>
            <CardFooter className="relative">
              <div className="absolute right-10 bottom-0 text-3xl cursor-pointer text-[rgb(225,29,73)]" onClick={()=>window.open(github_link,'_self')}>
                <FaArrowRightLong />
              </div>
            </CardFooter>
          </Card>

          <Card className="w-[250px] h-[140px] hover:scale-105 transition shadow-sm hover:shadow-md hover:shadow-[rgb(225,29,73)] shadow-[rgb(225,29,73)]">
            <CardHeader>
              <CardTitle>Documentation</CardTitle>
              <CardDescription>All about our solution</CardDescription>
            </CardHeader>
            <CardFooter className="relative">
              <div className="absolute right-10 bottom-0 text-3xl cursor-pointer text-[rgb(225,29,73)]" onClick={()=>window.open(docs_link,'_self')}>
                <FaArrowRightLong />
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="lg:flex flex-col items-center justify-center mt-10 md:space-x-10 space-y-10">
          <Card className=" w-[250px] h-[140px] hover:scale-105 transition shadow-sm hover:shadow-md hover:shadow-[rgb(225,29,73)] shadow-[rgb(225,29,73)]">
            <CardHeader>
              <CardTitle>Implementation</CardTitle>
              <CardDescription>That is how you do it</CardDescription>
            </CardHeader>
            <CardFooter className="relative">
              <div className="absolute right-10 bottom-0 text-3xl cursor-pointer text-[rgb(225,29,73)]">
                <FaArrowRightLong />
              </div>
            </CardFooter>
          </Card>

          <Card className="mb-[300px] w-[250px] h-[140px] hover:scale-105 transition shadow-sm hover:shadow-md hover:shadow-[rgb(225,29,73)] shadow-[rgb(225,29,73)]">
            <CardHeader>
              <CardTitle>Team</CardTitle>
              <CardDescription>TechMen!!</CardDescription>
            </CardHeader>
            <CardFooter className="relative">
              <div
                className="absolute right-10 bottom-0 text-3xl cursor-pointer text-[rgb(225,29,73)]"
                onClick={() => openElement("team")}
              >
                <FaArrowRightLong />
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
