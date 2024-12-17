import Image from "next/image";

export default function ImageSection({ imageSrc, altText }) {
  return (
    <div>
      <Image
        src={imageSrc}
        alt={altText}
        width={556}
        height={768}
        className="rounded-lg object-cover h-full"
      />
    </div>
  );
}
