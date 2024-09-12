import NavToggle from "./NavToggle";
import { auth } from "@/app/_lib/auth";

async function Header() {
  const session = await auth();

  return (
    <header className="border-b border-primary-900 p-2 md:px-8 md:py-5">
      <NavToggle session={session} />
    </header>
  );
}

export default Header;
