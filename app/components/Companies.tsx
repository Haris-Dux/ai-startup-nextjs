import Image from "next/image";

const Companies: React.FC = () => {
  return (
    <section>
      <div className=" my-8 space-y-4 w-full lg:px-36 text-center bg-[#020103]">
        <span className="text-[#b3b3b3]  font-medium max-[350px]:text-sm  leading-6">
          Trusted by the world’s most innovative teams
        </span>
        <div className=" flex lg:flex-col w-full px-4 gap-x-2 ">
          {/* ROW 1 */}
          <div className="lg:flex  w-full  gap-x-2 ">
            <Image
              className=" w-full my-2 border rounded-lg border-[#282729] py-6 px-2"
              src={"/acme 1.png"}
              alt="company-image"
              width={170}
              height={34}
            />
            <Image
              className=" w-full my-2  border rounded-lg border-[#282729] py-6 px-2"
              src={"/acme 2.png"}
              alt="company-image"
              width={170}
              height={34}
            />
            <Image
              className=" w-full my-2  border rounded-lg border-[#282729] py-6 px-2"
              src={"/acme 3.png"}
              alt="company-image"
              width={170}
              height={34}
            />
            <Image
              className="w-full my-2  border rounded-lg border-[#282729] py-6 px-2"
              src={"/acme 4.png"}
              alt="company-image"
              width={170}
              height={34}
            />
          </div>
          {/* ROW 2 */}
          <div className="lg:flex  w-full gap-x-2">
            <Image
              className="w-full my-2  border rounded-lg border-[#282729] py-6 px-2"
              src={"/acme 5.png"}
              alt="company-image"
              width={170}
              height={34}
            />

            <Image
              className="w-full my-2  border rounded-lg border-[#282729] py-6 px-2"
              src={"/acme 6.png"}
              alt="company-image"
              width={170}
              height={34}
            />

            <Image
              className="w-full my-2  border rounded-lg border-[#282729] py-6 px-2"
              src={"/acme 3.png"}
              alt="company-image"
              width={170}
              height={34}
            />

            <Image
              className="w-full my-2  border rounded-lg border-[#282729] py-6 px-2"
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
