import Image from "next/image";
import Link from "next/link";

const DarkLogo = ({ className }) => {
  return (
    <Link href={"/"}>
      <Image
        src={"/darklogo.png"}
        alt="ffi_logo"
        height={80}
        width={80}
        className={`w-15 h-15 md:w-14 md:h-14 lg:w-20 lg:h-18 ${className}`}
      />
    </Link>
  );
};

export default DarkLogo;
