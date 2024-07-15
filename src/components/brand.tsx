function SidebarBrand() {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-xl font-bold">Promptificient</span>
      <span className="text-sm text-muted-foreground">ver 0.0.1</span>
    </div>
  );
}

SidebarBrand.displayName = "SidebarBrand";

const Brand = {
  Sidebar: SidebarBrand,
};

export default Brand;
