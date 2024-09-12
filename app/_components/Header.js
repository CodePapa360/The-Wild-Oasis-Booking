import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

function Header() {
  return (
    <header className="border-b border-primary-900 p-2 md:px-8 md:py-5">
      <div className="md:hidden bg-slate-600 rounded-full size-12 flex justify-center items-center select-none cursor-pointer z-50 relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto  absolute top-0 right-0 md:relative bg-slate-300 md:bg-transparent h-fit md:h-auto w-screen md:w-auto z-40 py-8 md:p-0 shadow-lg md:shadow-none">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
