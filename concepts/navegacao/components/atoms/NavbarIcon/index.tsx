import Image from "next/image";

const NavbarIcon: React.FC = () => {
  return (
    <div className="flex justify-between items-center gap-4">
      <Image
        src="\icons\bookly.svg"
        alt="Bookly"
        width={54}
        height={54}
      ></Image>
      <span className="text-xl">Bookly</span>
    </div>
  );
};

export default NavbarIcon;
