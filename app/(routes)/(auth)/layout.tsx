import Logo from "@/components/shared/Logo/Logo";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background */}
      <div className="-z-10 absolute inset-0">
        <div className="bg-black w-full h-full">
          <div
            className="bg-[url('/login-bg.jpg')] bg-cover bg-no-repeat bg-center opacity-40 w-full h-full"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative mx-auto px-8 py-5 max-w-7xl">
        <Logo />
      </div>
      <div className="relative flex justify-center items-start mx-auto w-full max-w-md min-h-screen">
        <div className="bg-black px-14 pt-4 rounded-lg">{children}</div>
      </div>
    </div>
  );
}
