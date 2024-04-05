import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "./ui/button";

export default function Features() {
  return (
    <div>
        <div className="flex justify-center">

        
<div className="flex flex-col items-center justify-center space-x-10 space-y-10">
<Card className="mt-[100px] w-[250px] h-[140px] hover:scale-105 transition shadow-sm hover:shadow-md hover:shadow-[rgb(225,29,73)] shadow-[rgb(225,29,73)]">
  <CardHeader>
    <CardTitle>GitHub</CardTitle>
    <CardDescription>Visit the repo</CardDescription>
  </CardHeader>
  <CardFooter className="relative">
    <div className="absolute right-10 bottom-0 text-3xl cursor-pointer text-[rgb(225,29,73)]">
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
    <div className="absolute right-10 bottom-0 text-3xl cursor-pointer text-[rgb(225,29,73)]">
      <FaArrowRightLong />
    </div>
  </CardFooter>
        </Card>
</div>
<div className="flex flex-col items-center justify-center space-x-10 space-y-10">
        <Card className=" w-[250px] h-[140px] hover:scale-105 transition shadow-sm hover:shadow-md hover:shadow-[rgb(225,29,73)] shadow-[rgb(225,29,73)]">
          <CardHeader>
            <CardTitle>Implementation</CardTitle>
            <CardDescription>That's how you do it</CardDescription>
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
    <div className="absolute right-10 bottom-0 text-3xl cursor-pointer text-[rgb(225,29,73)]">
      <FaArrowRightLong />
    </div>
  </CardFooter>
        </Card>
      </div>
    </div>
    </div>
  );
}
