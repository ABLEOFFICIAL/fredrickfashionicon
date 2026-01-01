import Image from "next/image";
import Link from "next/link";

const LightLogo = ({ className }) => {
  return (
    <Link href={"/"}>
      {/* <img src="/logoImg.png" className={className} /> */}
      <Image
        src="/lightlogo.png"
        alt="ffi_logo"
        height={100}
        width={100}
        className="invert brightness-0 saturate-0 sepia-[1] hue-rotate-320"
      />
    </Link>
  );
};

export default LightLogo;
