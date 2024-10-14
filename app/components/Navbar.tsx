import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <header className="container  border-b border-[#616062]">
      <div className="flex items-center mx-2 md:mx-8 lg:mx-16 justify-between py-3  ">
        <Image src={"/Logo.png"} width={38} height={38} alt="main-logo" />
        <div className="text-[#616062] font-normal py-2 px-7 hidden md:flex  items-cente gap-6  border border-[#616062] rounded-3xl">
          <div className="flex items-center gap-1">
            <Link href={""}>Features</Link>
            <Image
              src={"/caret-down.svg"}
              className="cursor-pointer text-[#616062] "
              width={14}
              height={14}
              alt="down-icon"
            />
          </div>
          <Link href={""}>Developers</Link>
          <div className="flex items-center gap-1 ">
            <Link href={""}>Company</Link>
            <span className="text-[#616062]">
            <Image
              src={"/caret-down.svg"}
              className="cursor-pointer text-[#616062]  "
              width={14}
              height={14}
              alt="down-icon"
            />
              </span>
          </div>

          <Link href={""}>Blog</Link>
          <Link href={""}>Changelog</Link>
        </div>
        <div className="flex items-center gap-4 justify-between">
          <button className=" box-border py-1 px-4 text-xs  text-white  bg-[#361764]  backdrop-blur ">
            Join Waitlist
          </button>
          <Image
            src={"/list 1@2x.svg"}
            className="cursor-pointer md:hidden"
            width={32}
            height={32}
            alt="menu-buton"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
