import Image from "next/image";

const Companies: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col items-center  bg-[#010101]">
        <span className="text-[#b3b3b3] my-6 font-medium max-[350px]:text-sm  leading-6">
          Trusted by the world’s most innovative teams
        </span>
        <div className="flex items-center max-[350px]:mx-2 gap-2 ">
          {/* ROW 1 */}
          <div className="space-y-2">
            <Image
              className="border rounded-lg border-[#282729] py-6 px-2"
              src={"/acme 1.png"}
              alt="company-image"
              width={170}
              height={34}
            />
            <Image
              className="border rounded-lg border-[#282729] py-6 px-2"
              src={"/acme 2.png"}
              alt="company-image"
              width={170}
              height={34}
            />
            <Image
              className="border rounded-lg border-[#282729] py-6 px-2"
              src={"/acme 3.png"}
              alt="company-image"
              width={170}
              height={34}
            />
            <Image
              className="border rounded-lg border-[#282729] py-6 px-2"
              src={"/acme 4.png"}
              alt="company-image"
              width={170}
              height={34}
            />
          </div>
          {/* ROW 2 */}
          <div className="space-y-2">
            <Image
              className="border rounded-lg border-[#282729] py-6 px-2"
              src={"/acme 5.png"}
              alt="company-image"
              width={170}
              height={34}
            />

            <Image
              className="border rounded-lg border-[#282729] py-6 px-2"
              src={"/acme 6.png"}
              alt="company-image"
              width={170}
              height={34}
            />

            <Image
              className="border rounded-lg border-[#282729] py-6 px-2"
              src={"/acme 3.png"}
              alt="company-image"
              width={170}
              height={34}
            />

            <Image
              className="border rounded-lg border-[#282729] py-6 px-2"
              src={"/acme 4.png"}
              alt="company-image"
              width={170}
              height={34}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
