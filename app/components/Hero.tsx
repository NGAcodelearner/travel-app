import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Button from "./Button";

const Hero = () => {
  return (
    <div
      className="mx-auto max-w-[1440px] px-8 py-10 lg:py-20 lg:px-20 flex flex-col
       lg:flex-row gap-8 pb-32  "
    >
      {/* left */}
      <div className="relative flex flex-1 flex-col lg:w-2/3">
        <Image
          src="/camp.svg"
          alt="camp"
          width="40"
          height="40"
          className="absolute top-[-10%] left-[-5%]"
        />
        <h1 className=" font-bold text-3xl lg:text-5xl">Welcom to Camp Area</h1>
        <p className="mt-6 max-w-[500px] text-base text-gray-500">
          Welcome to our campsite nestled in the heart of nature, where
          adventure awaits at every turn. Immerse yourself in the tranquility of
          the wilderness, surrounded by towering trees and crystal-clear
          streams.
        </p>

        <div className="flex flex-wrap gap-4 my-6">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <FaStar key={index} size={20} className="text-yellow-400 " />
              ))}
          </div>
          <p className="font-bold text-green-700">100k Execellent reviews</p>
        </div>

        <div>
          <Button type="button" label="Get more info" />
        </div>
      </div>

      {/* right */}
      <Image
        src="/camp1.jpg"
        alt="hero"
        width={100}
        height={100}
        className="w-full lg:w-1/3"
      />
    </div>
  );
};

export default Hero;
