import { NavbarProps } from "./Navbar.types";
import NavbarDesktop from "./NavbarDesktop/NavbarDesktop";
import NavbarMobile from "./NavbarMobile/NavbarMobile";

const Navbar = (props: NavbarProps) => {
  const { users } = props;
  return (
    <nav className="">
      <div className="hidden mx-auto md:block">
        <NavbarDesktop users={users} />
      </div>
      <div className="md:hidden">
        <NavbarMobile users={users}/>
      </div>
    </nav>
  );
};

export default Navbar;
