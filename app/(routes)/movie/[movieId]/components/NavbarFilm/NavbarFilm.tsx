"use client";
import { ArrowLeft } from "lucide-react";
import { NavbarFilmProps } from "./navbarFilm.types";
import { useRouter } from "next/navigation";

const NavbarFilm = (props: NavbarFilmProps) => {
  const { titleMovie } = props;
  const router = useRouter();
  const backToHome = () => {
    router.push("/");
  }
  return (
    <nav className="fixed flex gap-2 p-5 cursor-pointer items-center z-10 bg-zinc-900/70">
      <ArrowLeft className="w-6 h-6" onClick={() => backToHome()} />
      <p className="font-bold">Estas viendo: {titleMovie}</p>
    </nav>
  );
};

export default NavbarFilm;
