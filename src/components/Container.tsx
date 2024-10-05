import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Outlet } from "react-router-dom";

export const Container = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 bg-neutral-200 p-2 dark:bg-neutral-800">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};
