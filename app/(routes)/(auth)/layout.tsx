import Logo from "@/components/shared/Logo/Logo";

export default function AuthLayouth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full">
      <div className="relative h-full">
        <div className="-z-10 absolute bg-black w-full h-full min-h-screen">
          <div className="bg-[url('/login-bg.jpg')] bg-cover bg-no-repeat opacity-40 h-full" />
        </div>
        <div className="mx-auto px-8 py-5 max-w-7xl">
          <Logo />
        </div>
        <div className="mx-auto w-full max-w-md h-full">
          <div className="bg-black px-14 py-6 rounded-lg">{children }</div>
        </div>
      </div>
    </div>
  );
}
