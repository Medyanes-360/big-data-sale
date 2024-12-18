import Image from "next/image";

export default function ImageSection({ imageSrc, altText }) {
  return (
    <div className="w-full h-auto flex justify-center items-center xl:w-[556px] lg:w-[500px] lg:h-[768px] md:ml-0 ml-4">
      <Image
        src={imageSrc}
        alt={altText}
        width={556}
        height={768}
        className="rounded-lg object-cover h-auto lg:h-[768px] w-full lg:max-xl:w-[500px] lg:w-[556px]"
      />
    </div>
  );
}
