import Image from "next/image";
import Link from "next/link";

export default function Navigation({ handleToggle, session }) {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex flex-col md:flex-row gap-2 md:gap-16 items-center">
        <li>
          <Link
            onClick={handleToggle}
            href="/cabins"
            className="hover:text-accent-400 transition-colors text-black md:text-primary-100"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            onClick={handleToggle}
            href="/about"
            className="hover:text-accent-400 transition-colors text-black md:text-primary-100"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              onClick={handleToggle}
              href="/account"
              className="hover:text-accent-400 transition-colors text-black md:text-primary-100 flex items-center gap-4 md:flex-row flex-col-reverse"
            >
              <div className="size-8 relative">
                <Image
                  fill
                  className="rounded-full object-cover"
                  src={session.user.image}
                  alt={session.user.name}
                  referrerPolicy="no-referrer"
                />
              </div>
              <span>Guest area</span>
            </Link>
          ) : (
            <Link
              onClick={handleToggle}
              href="/account"
              className="hover:text-accent-400 transition-colors text-black md:text-primary-100"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
