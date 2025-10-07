import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FAQ } from "@/components/sections/home/FAQ";
import Overview from "@/components/sections/security/Overview";
import Protection from "@/components/sections/security/Protection";

export default function Security() {
  return (
    <>

      <Navbar />
      <Overview />
      <Protection />
      <FAQ />
      <Footer />

    </>
  );
}
