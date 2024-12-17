import Image from "next/image";

export default function TopSvg() {
  return (
    <div className="absolute top-6 right-6 flex space-x-2">
      <Image
        src="/assets/icons/9.svg"
        alt="9 Icon"
        width={31}
        height={55}
        className="object-contain"
      />
      <Image
        src="/assets/icons/9.svg"
        alt="9 Icon"
        width={31}
        height={55}
        className="object-contain"
      />
    </div>
  );
}
