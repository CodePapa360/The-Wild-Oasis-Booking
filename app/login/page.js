import SignInButton from "../_components/SignInButton";

const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="text-xl text-center md:text-3xl font-semibold">
        Sign in to access your guest area
      </h2>

      <SignInButton />
    </div>
  );
}
