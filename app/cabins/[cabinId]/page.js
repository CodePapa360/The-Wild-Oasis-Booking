import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const cabin = await getCabin(params.cabinId);

  return {
    title: `Cabin ${cabin.name}`,
  };
}

// This is for static page generation. if you have finite small amout of pages, then you can pre generate the pages so that it's not dynamic and it is fast.
// export async function generateStaticParams() {
//   const cabins = await getCabins();

//   const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));

//   return ids;
// }

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);

  const { name } = cabin;

  return (
    <div className="max-w-6xl mx-auto mt-0 md:mt-8">
      <Cabin cabin={cabin} />

      <div>
        <h2 className="text-2xl md:text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
