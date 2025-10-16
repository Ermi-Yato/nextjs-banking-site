import { Footer } from "@/components/layout/Footer";
import Overview from "@/components/sections/about/Overview";
import { PressReleases } from "@/components/sections/about/Press-Releases";
import { Vision } from "@/components/sections/about/Vision";

export default function Home() {
  return (
    <>

      <Overview />
      <Vision />
      <PressReleases />
      <Footer />

    </>
  );
}
