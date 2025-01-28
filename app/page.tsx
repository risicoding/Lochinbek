import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoLogoGooglePlaystore } from "react-icons/io5";

import { FaApple } from "react-icons/fa";

const Page = () => {
  return (
    <div className="min-h-screen flex items-start justify-center px-8 py-24">
      <div className="px-3 flex-col relative top-8">
        <h1 className="text-2xl font-bold">
          Develop Your Life With{" "}
          <span className="text-green-400">One step</span>
        </h1>
        <p className="text-gray-300">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          scrambled it to make a type specimen book
        </p>
        <div className="mt-6 flex items-center">
          <Input
            className="placeholder-gray-300 shadow-md"
            placeholder="Enter your email"
          />
          <Button className="bg-red-500">Send</Button>
        </div>
        <div className="mt-6 flex gap-4">
          <div className="flex items-center border-1 border-black  gap-2 text-gray-500">
            <IoLogoGooglePlaystore />
            <div>
            <p className="text-xs">Android app on </p>
            <p className="uppercase">google play</p>
            </div>
          </div>
          <div className="flex items-center border-1 border-black  gap-2 text-gray-500">
            <FaApple />
            <div>
            <p className="text-xs">Availabe on the </p>
            <p className="uppercase">App store</p>
            </div>
          </div>
 
        </div>
      </div>
      <Image
        src={"/hero-mockup.png"}
        width={300}
        height={250}
        alt="hero-mockup"
      />
    </div>
  );
};

export default Page;
