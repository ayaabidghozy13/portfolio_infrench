import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/logo.png">
      <Image src="/logo.png" width={100} height={200} priority alt="" />
    </Link>
  );
};

export default Logo;
