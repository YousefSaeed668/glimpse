import Image from "next/image";

export const Loading = () => {
  return (
    <div className="w-full h-full  flex flex-col items-center justify-center ">
      <Image
        src="/logo.svg"
        width={120}
        height={120}
        alt="Logo"
        className=" animate-pulse duration-700"
      />
    </div>
  );
};
