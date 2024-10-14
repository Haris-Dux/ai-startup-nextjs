import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col  mt-20 items-center gap-4 ">
        <div className="flex gap-2 px-2 py-1  items-center justify-center text-[#9855ff] border border-[#616062] rounded-3xl">
          <span className="font-bold text-xs px-1 text-black bg-[#9855ff] rounded-lg">
            NEW
          </span>
          <p className="text-[#9855ff] font-normal text-xs">
            Latest integration just arrived
          </p>
        </div>
        <div className="text-center resizing-text">
          <h1 className="text-white font-medium text-5xl leading-10">
            Boost your
          </h1>
          <h1 className="bg-clip-text sm:text-3xl tracking-tighter font-medium text-5xl leading-10 text-transparent bg-gradient-to-b from-white via-[#FFFFFF] to-[#B372CF]">
            rankings with AI.
          </h1>
        </div>
        <p className="text-white text-center">
          Elevate your site’s visibility effortlessly
          <br />
          with AI, where smarttechnology meets
          <br />
          user-friendly SEO tools.
        </p>
        <button className="bg-white rounded py-1 px-2 font-medium text-black">
          Start For Free
        </button>
        <div className="hero-image mt-10 max-[350px]:mx-2 relative">
          <Image
            className=" box-border rounded-lg"
            src={"/App.png"}
            alt="Hero-Image-app"
            width={355}
            height={255}
          />
          <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-transparent to-[#050208] rounded-lg pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
