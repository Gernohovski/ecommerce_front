import AdminNavbarIcon from "../../atoms/AdminNavbarIcon";
import ClientesButton from "../../atoms/ClientesButton";
import CupomButton from "../../atoms/CupomButton";
import DashboardButton from "../../atoms/DashboardButton";
import EstoqueButton from "../../atoms/EstoqueButton";
import PedidosButton from "../../atoms/PedidosButton";

const AdminNavbar: React.FC = () => {
  return (
    <div className="flex justify-between items-center w-full h-[75px] shadow-md">
      <div className="flex items-center pl-[30px] gap-20">
        <AdminNavbarIcon />
      </div>
      <div className="flex h-14 items-center px-8 gap-8">
        <CupomButton />
        <ClientesButton />
        <PedidosButton />
        <DashboardButton />
        <EstoqueButton />
      </div>
    </div>
  );
};

export default AdminNavbar;
