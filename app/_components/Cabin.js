import TextExpander from "@/app/_components/TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

function Cabin({ cabin }) {
  const { name, description, maxCapacity, image } = cabin;

  return (
    <div className="grid grid-rows-[1fr_2fr] md:grid-rows-1 md:grid-cols-[3fr_4fr] gap-4 md:gap-20 border border-primary-800 py-3 px-3 md:px-10 mb-16 md:mb-24">
      <div className="relative  md:scale-[1.15] md:-translate-x-3">
        <Image
          fill
          className="object-cover"
          src={image}
          alt={`Cabin ${name}`}
        />
      </div>

      <div>
        <h3 className="text-accent-100 font-black text-3xl md:text-7xl mb-5 md:translate-x-[-254px] bg-primary-950 p-6 pb-1 md:w-[150%]">
          Cabin {name}
        </h3>

        <p className="text-lg text-primary-300 mb-10">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;
