import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { IConBackground } from "@/components/ui/IconBackground"
import Image from "next/image"
import abstractImage from "@/assets/images/Abstract Design (3).svg"
import google from "@/assets/icons/googleIcon.svg"
import facebook from "@/assets/icons/loginFacebook.svg"
import apple from "@/assets/icons/appleIcon.svg"
import eyeIcon from "@/assets/icons/eyeIcon.svg"
import { Footer } from "@/components/layout/Footer";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { InputField } from "@/components/ui/InputField";
import Link from "next/link";

const socialIcons = [
  google,
  facebook,
  apple
]

const inputClasses = "flex-1 bg-transparent outline-none placeholder:font-light placeholder:text-[#59595A] text-sm text-[#B3B3B3]"

export default function Login() {
  return (
    <>
      <Navbar />
      <section className="mt-28 lg:mt-40">
        <div className="container">
          <div className="p-8 lg:py-20 bg-[#1C1C1C] rounded-2xl border border-[#262626] lg:max-w-5xl lg:mx-auto relative z-0">

            <Image src={abstractImage} alt="image" className="absolute right-0 top-0 size-40 lg:size-64 w-auto h-auto -z-10" />
            <div className="lg:max-w-2xl lg:mx-auto">
              <div>
                <h2 className="text-3xl lg:text-4xl font-medium text-center text-[#CAFF33]">Sign Up</h2>
                <p className="text-[#B3B3B3] font-light text-sm lg:text-base text-center mt-3 lg:mt-4">Join our community today! Create an account to unlock exclusive features and personalized experiences.</p>
              </div>

              <form className="mt-10 lg:mt-16 flex flex-col gap-5 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-6">
                <InputField type="email" name="email" placeholder="Enter First Name" />
                <InputField type="email" name="email" placeholder="Enter Last Name" />
                <InputField type="email" name="email" placeholder="Enter your Email" />
                <div className="p-4 lg:p-5 rounded-full bg-[#191919] border border-[#262626] flex items-center justify-between">
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your Password"
                    required
                    className={inputClasses}
                  />
                  <Image src={eyeIcon} alt="Show password" className="ml-2 cursor-pointer" />
                </div>

              </form>
              <div className="lg:max-w-sm lg:mx-auto mt-8">
                <div className="flex flex-col gap-6 mt-6">
                  <Button btnType="primary" size="lg" dropShadow="yes">Sign Up</Button>
                  <Link href="/login" className="w-full flex">
                    <Button btnType="secondary" size="lg" dropShadow="yes" className="border border-[#333333] bg-[#262626] flex-1">Login</Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 mt-6 lg:mt-10 text-sm text-[#B3B3B3]">
                  <hr className="flex-1 border-t border-[#B3B3B3]" />
                  <span>Or Continue with</span>
                  <hr className="flex-1 border-t border-[#B3B3B3]" />
                </div>
                <div className="flex gap-5 mt-5 justify-center">
                  {socialIcons.map((icon, i) => (
                    <IConBackground key={i}>
                      <Image src={icon} alt="icon" />
                    </IConBackground>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <Footer />
    </>
  );
}
