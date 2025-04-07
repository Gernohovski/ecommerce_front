import Image from "next/image";
import Link from "next/link";

const AdminNavbarIcon: React.FC = () => {
  return (
    <Link className="flex justify-between items-center gap-4" href={"/admin"}>
      <Image
        src="\icons\bookly.svg"
        alt="Bookly"
        width={54}
        height={54}
      ></Image>
      <span className="text-xl">Bookly - Administrador</span>
    </Link>
  );
};

export default AdminNavbarIcon;
