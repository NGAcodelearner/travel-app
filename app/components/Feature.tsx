import { Features } from "@/constants";
import Image from "next/image";
import { IconType } from "react-icons";
import { PiDog, PiLeaf } from "react-icons/pi";
import { GiFireBowl, GiHiking } from "react-icons/gi";

const Feature = () => {
  return (
    <div
      className="py-12 mt-10 max-w-[1440px] mx-auto flex 
    items-center justify-center flex-col"
    >
      <div className="flex w-full justify-between gap-x-12 px-8 py-8 lg:py-20 lg:px-20 ">
        {/* left */}
        <div className="flex flex-1 lg:min-h-[500px]">
          <Image
            src="/feature.jpg"
            width={400}
            height={1000}
            alt="feature"
            className="hidden lg:flex  rounded-3xl "
          />
        </div>

        {/* right */}
        <div className="flex flex-col gap-8 w-full z-20 lg:w-[60%]">
          <div className="relative">
            <Image
              src="/camp.svg"
              width={40}
              height={40}
              alt="camp"
              className="absolute -top-2 lg:left-52 left-44"
            />
            <h2 className="font-bold text-3xl lg:text-4xl 2xl:text-5xl mr-4">
              Our Features
            </h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
            {Features.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

type FeatureItem = {
  title: string;
  description: string;
  icon: string;
};
type iconsMap = {
  [key: string]: IconType;
};

const FeatureItem = ({ title, description, icon }: FeatureItem) => {
  const iconsMap: iconsMap = {
    leaf: PiLeaf,
    hiking: GiHiking,
    fire: GiFireBowl,
    animal: PiDog,
  };
  const Icon = iconsMap[icon];
  return (
    <div className="flex flex-col flex-1 items-start">
      <div
        className="rounded-full p-2 flex items-center w-10 bg-green-600
       text-white"
      >
        {Icon && <Icon size={24} />}
      </div>
      <h2 className="font-bold text-lg lg:text-xl mt-4">{title}</h2>
      <p className="mt-2 text-gray-600 text-sm lg:text-base">{description}</p>
    </div>
  );
};

export default Feature;
