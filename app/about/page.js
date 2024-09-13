import Image from "next/image";
import Image1 from "@/public/about-1.jpg";
import { getCabins } from "../_lib/data-service";

export const revalidate = 86400;

export const metadata = {
  title: "About",
};

export default async function Page() {
  const cabins = await getCabins();

  return (
    <div className="text-lg">
      <div className="mb-14">
        <h1 className="text-3xl md:text-4xl mb-10 text-accent-400 font-medium">
          Welcome to The Wild Oasis
        </h1>

        <div className="grid gap-4 md:gap-10 grid-cols-1 grid-rows-[auto_auto] md:grid-rows-1 md:grid-cols-[2fr_1fr] ">
          <div className="space-y-8">
            <p>
              Where nature&rsquo;s beauty and comfortable living blend
              seamlessly. Hidden away in the heart of the Italian Dolomites,
              this is your paradise away from home. But it&rsquo;s not just
              about the luxury cabins. It&rsquo;s about the experience of
              reconnecting with nature and enjoying simple pleasures with
              family.
            </p>
            <p>
              Our {cabins.length} luxury cabins provide a cozy base, but the
              real freedom and peace you&rsquo;ll find in the surrounding
              mountains. Wander through lush forests, breathe in the fresh air,
              and watch the stars twinkle above from the warmth of a campfire or
              your hot tub.
            </p>
            <p>
              This is where memorable moments are made, surrounded by
              nature&rsquo;s splendor. It&rsquo;s a place to slow down, relax,
              and feel the joy of being together in a beautiful setting.
            </p>
          </div>

          <div className="relative aspect-square">
            <Image
              src={Image1}
              alt="Family sitting around a fire pit in front of cabin"
              placeholder="blur"
              className="object-cover"
              fill
              quality={80}
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl md:text-4xl mb-10 text-accent-400 font-medium">
          Managed by our family since 1962
        </h2>

        <div className="grid gap-4 md:gap-10 grid-cols-1 grid-rows-[auto_auto] md:grid-rows-1 md:grid-cols-[1fr_2fr]">
          {/* This is an example when you can't provide the static sourse and the source will come from a 3rd perty database */}
          <div className="relative aspect-square">
            <Image
              fill
              className="object-cover"
              src="/about-2.jpg" // This is a placeholder image for the image that will come from a 3rd party database
              alt="Family that manages The Wild Oasis"
            />
          </div>

          <div className="space-y-8">
            <p>
              Since 1962, The Wild Oasis has been a cherished family-run
              retreat. Started by our grandparents, this haven has been nurtured
              with love and care, passing down through our family as a testament
              to our dedication to creating a warm, welcoming environment.
            </p>
            <p>
              Over the years, we&rsquo;ve maintained the essence of The Wild
              Oasis, blending the timeless beauty of the mountains with the
              personal touch only a family business can offer. Here,
              you&rsquo;re not just a guest; you&rsquo;re part of our extended
              family. So join us at The Wild Oasis soon, where tradition meets
              tranquility, and every visit is like coming home.
            </p>

            <div>
              <a
                href="/cabins"
                className="inline-block mt-4 bg-accent-500 px-4 py-2 md:px-8 md:py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
              >
                Explore our luxury cabins
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
