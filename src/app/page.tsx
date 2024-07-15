import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-100 py-2">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between">
          <div className="relative w-full">
            <MagnifyingGlassIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for template"
              className="pl-8 bg-white w-full"
            />
          </div>
          <Button className="ml-4" variant="default">
            Add template
          </Button>
        </div>
      </main>
    </div>
  );
}
