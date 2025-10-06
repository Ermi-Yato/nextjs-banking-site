import { Navbar } from "@/components/layout/Navbar";
import Overview from "@/components/sections/security/Overview";
import Protection from "@/components/sections/security/Protection";

export default function Security() {
  return (
    <>

      <Navbar />
      <Overview />
      <Protection />

    </>
  );
}
