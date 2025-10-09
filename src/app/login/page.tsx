import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { IConBackground } from "@/components/ui/IconBackground"
import brief from "@/assets/icons/managingIcon.svg"
import Image from "next/image"
import abstractImage from "@/assets/images/Abstract Design (3).svg"

export default function Login() {
  let array = new Array(3).fill(0)
  return (
    <>
      <Navbar />
      <section>
        <div className="container">
          <div className="p-8 bg-[#1C1C1C] rounded-2xl border border-[#262626] relative">
            <Image src={abstractImage} alt="image" className="absolute right-0 top-0 size-40 w-auto h-auto" />
            <div>
              <h2 className="text-3xl lg:text-4xl font-medium text-center text-[#CAFF33]">Login</h2>
              <p className="text-[#B3B3B3] font-light text-sm lg:text-base text-center mt-3">Welcome back! Please log in to access your account.</p>
            </div>

            <form className="mt-6 flex flex-col gap-4">
              <div className="py-3 px-4 rounded-full bg-[#191919] border border-[#262626]">
                <input type="email" name="email" placeholder="Enter your Email" required className="placeholder:font-light  placeholder:text-[#B3B3B3] text-sm" />
              </div>
              <div className="py-3 px-4 rounded-full bg-[#191919] border border-[#262626]">
                <input type="password" name="password" placeholder="Enter your Password" required className="placeholder:font-light  placeholder:text-[#B3B3B3] text-sm" />
                {/* eye icon goes here */}
              </div>
            </form>
            <p className="mt-6 text-center text-sm">Forgot Password?</p>
            <div className="flex flex-col gap-6 mt-6">
              <Button btnType="primary" size="lg" dropShadow="yes">Login</Button>
              <Button btnType="secondary" size="lg" dropShadow="no" className="border border-[#333333] bg-[#262626]">Sign Up</Button>
            </div>
            <div className="flex justify-between mt-6 text-sm text-[#B3B3B3]">
              <hr />
              <span>Or Continue with</span>
              <hr />
            </div>
            <div className="flex gap-5 mt-5 justify-center">
              {array.map((icon, i) => (
                <IConBackground key={i}>
                  <Image src={brief} alt="icon" />
                </IConBackground>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
