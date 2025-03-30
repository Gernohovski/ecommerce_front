import Image from "next/image";
import Link from "next/link";

const NavbarIcon: React.FC = () => {
  return (
    <Link className="flex justify-between items-center gap-4" href={"/"}>
      <Image
        src="\icons\bookly.svg"
        alt="Bookly"
        width={54}
        height={54}
      ></Image>
      <span className="text-xl">Bookly</span>
    </Link>
  );
};

export default NavbarIcon;
