import { useSessionContext } from "@/concepts/login/contexts/SessionContext";
import MinhaContaDropDown from "@/concepts/minha-conta/Dropdown/components/organisms/MinhaContaDropdown";
import CartButton from "../../atoms/CartButton";
import LoginButton from "../../atoms/LoginButton";
import NavbarIcon from "../../atoms/NavbarIcon";
import SearchInput from "../../atoms/SearchInput";
import LiteraryGenres from "../../molecules/LiteraryGenres";

const Navbar: React.FC = () => {
  const { clienteId } = useSessionContext();
  return (
    <div>
      <div className="flex justify-between items-center w-full h-[75px]">
        <div className="flex items-center pl-[30px] gap-20">
          <NavbarIcon />
          <SearchInput />
        </div>
        <div className="flex h-14 items-center px-8 gap-8">
          {clienteId ? <MinhaContaDropDown /> : <LoginButton />}
          <CartButton />
        </div>
      </div>
      <div>
        <div className="flex justify-start items-center bg-[#7738C8] h-[32px]">
          <LiteraryGenres />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
