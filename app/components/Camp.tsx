import { FaMap } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";

type CampProps = {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
};

const Campsite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  return (
    <div
      className="h-full w-full bg-cover min-w-[800px] lg:rounded-3xl text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* camping area sliders */}
      <div className="flex flex-col items-start justify-between p-6 lg:px-20 lg:py-10 h-full">
        <div className="flex items-center justify-between gap-4">
          <div className=" rounded-full p-3 bg-green-600">
            <FaMap size={24} className="text-white" />
          </div>

          <div className="flex flex-col">
            <h2 className="font-bold text-lg">{title}</h2>
            <p>{subtitle}</p>
          </div>
        </div>

        <div className="flex justify-between items-center gap-2">
          <div className="flex -space-x-2">
            {Array(3)
              .fill(1)
              .map((_, index) => (
                <div
                  key={index}
                  className="rounded-full p-1 bg-white overflow-hidden"
                >
                  <BsPerson size={24} className="text-green-500" />
                </div>
              ))}
          </div>
          <p className="font-bold text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <div className="border-2 border-green-500  max-w-[1440px] mx-auto flex flex-col px-8 lg:px-20 py-10 lg:py-20">
      <div
        className="hide-scrollbar relative flex items-start justify-start gap-8 overflow-x-auto h-[340px]
      w-full lg:h-[400px]"
      >
        <Campsite
          backgroundImage="/camp3.jpg"
          title="River area"
          subtitle="Lucy, Prifen"
          peopleJoined="50+ Joined"
        />
        <Campsite
          backgroundImage="/camp4.jpg"
          title="Mountain area"
          subtitle="Stephen, Prifen"
          peopleJoined="50+ Joined"
        />
        <Campsite
          backgroundImage="/camp1.jpg"
          title="Camping 1"
          subtitle="Lucy, Prifen"
          peopleJoined="50+ Joined"
        />
      </div>
      <div className="flex justify-end items-center px-6 mt-10 lg:-mt-52 lg:mr-20 z-10">
        <div
          className="bg-green-500 lg:max-w-[500px] 2xl:max-w-[600px] text-white p-8 
        xl:px-8 rounded-3xl w-full overflow-hidden"
        >
          <h2 className="capitalize  text-xl xl:text-2xl ">
            <strong>Embrace Nature: </strong>Camping Areas Await Your Adventure
          </h2>
          <p className="mt-5 text-base xl:text-lg">
            Discover the allure of camping areas, where serene landscapes and
            outdoor adventures collide. From tranquil forests to lakeside
            retreats, immerse yourself in nature's beauty and create
            unforgettable memories under the open sky.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Camp;
