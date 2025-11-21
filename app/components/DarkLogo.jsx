import Image from "next/image";
import Link from "next/link";

const DarkLogo = ({ className }) => {
  return (
    <Link href={"/"}>
      {/* <img src="/logoImg.png" className={className} /> */}
      <Image
        src={"/darklogo.png"}
        alt="ffi_logo"
        height={80}
        width={80}
        className={className}
      />
    </Link>
  );
};

export default DarkLogo;
