import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
        src={bg}
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-8xl text-primary-50 mb-10 tracking-tight font-normal relative">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-4 py-4 md:px-8 md:py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all relative"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
