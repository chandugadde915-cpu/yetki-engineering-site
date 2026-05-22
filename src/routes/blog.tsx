import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/blog")({
  component: BlogLayout,
});

function BlogLayout() {
  return (
    <div className="relative min-h-screen">
      <Nav />
      <main className="pt-28">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
