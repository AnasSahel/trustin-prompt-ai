import Brand from "./brand";
import SidebarMenu from "./sidebar-menu";

export default function Sidebar() {
  return (
    <aside className="w-64">
      <div className="p-4">
        <Brand.Sidebar />
      </div>
      <SidebarMenu />
    </aside>
  );
}
