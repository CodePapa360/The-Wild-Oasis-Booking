import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

function Logo({ handleToggle }) {
  return (
    <Link
      onClick={handleToggle}
      href="/"
      className="flex items-center gap-4 z-10 flex-col md:flex-row mb-2 md:mb-0"
    >
      {/* <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" /> */}
      <Image
        src={logo}
        // quality={100}
        height="60"
        width="60"
        alt="The Wild Oasis logo"
      />
      <span className="text-xl font-semibold hover:text-accent-400 transition-colors text-black md:text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
