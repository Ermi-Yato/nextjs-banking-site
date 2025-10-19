import { Footer } from "@/components/layout/Footer";
import { FAQ } from "@/components/sections/home/FAQ";
import Overview from "@/components/sections/security/Overview";
import Protection from "@/components/sections/security/Protection";

export default function Security() {
  return (
    <>

      <Overview />
      <Protection />
      <FAQ />
      <Footer />

    </>
  );
}
