import Image from "next/image";
import App from "@/public/App.png"

const Hero: React.FC = () => {

  return (
    <section>
      <div className="flex flex-col mt-20 items-center gap-4 md:gap-6 ">
        <div className="flex gap-2 px-2 py-1 md:p-3  items-center justify-center text-[#9855ff] border border-[#616062] rounded-3xl">
          <span className="font-bold md:text-lg md:rounded-xl text-xs px-1 text-black bg-[#9855ff] md:px-2 rounded-lg">
            NEW
          </span>
          <p className="text-[#9855ff] font-normal text-xs md:text-lg ">
            Latest integration just arrived
          </p>
        </div>
        <div className="text-center space-y-1 w-full resizing-text">
          <h1 className="text-white font-medium md:leading-[82px]  text-5xl md:text-8xl leading-10  ">
            Boost your
          </h1>
          <h1 className="bg-clip-text md:leading-[82px]  sm:text-3xl md:text-8xl tracking-tighter font-medium text-5xl leading-10 text-transparent bg-gradient-to-b from-white via-[#FFFFFF] to-[#B372CF] ">
            rankings with AI.
          </h1>
        </div>
        <p className="text-white  text-center md:text-xl md:leading-9">
          Elevate your site’s visibility effortlessly
          <br className="md:hidden"/> with AI, where <br className="hidden md:block"/> smart technology meets 
          <br className="md:hidden"/> user-friendly SEO tools.
        </p>
        <button className="bg-white md:font-semibold rounded py-1 px-2 lg:py-2 font-medium text-black">
          Start For Free
        </button>
        <div className="hero-image w-full max-w-[90%]  mt-10 relative ">
          <Image
            className="w-full object-cover h-auto box-border rounded-lg"
            src={App}
            alt="Hero-Image-app"
           
          />
          <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-transparent to-[#050208] rounded-lg pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
