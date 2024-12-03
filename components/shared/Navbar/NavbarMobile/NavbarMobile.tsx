import { BellRing, Menu, Search } from "lucide-react";
import Logo from "../../Logo/Logo";
import { itemsNavbar } from "@/data/itemsNavbar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { NavbarMobileProps } from "./NavbarMobile.type";
import SelectorProfile from "../../SelectorProfile/SelectorProfile";

const NavbarMobile = (props: NavbarMobileProps) => {
  const { users } = props;
  return (
    <div className="p-4 flex justify-between">
      <Logo />
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent className="bg-black" side="left">
          <div className="flex flex-col gap-4">
            {itemsNavbar.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="hover:text-gray-300 transition-all duration-500 hover:scale-x-105"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="border-[1px] border-white/70 my-5" />
          <div className="flex justify-between gap-6 mt-4">
            <Search className="cursor-pointer" />
            <BellRing className="cursor-pointer" />
           <SelectorProfile users={users} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavbarMobile;
