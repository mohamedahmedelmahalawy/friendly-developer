import { Outlet } from "react-router";
import Hero from "~/components/hero/Hero";

function HomeLayout() {
  return (
    <>
      <Hero
        name="Mohamed"
        text="I build Friendly Web experiences and help others with their businesses"
      />
      <section className="max-w-6xl mx-auto my-8 px-6">
        <Outlet />
      </section>
    </>
  );
}

export default HomeLayout;
