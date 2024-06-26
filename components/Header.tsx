import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            // className="rounded-full"
            width={200}
            height={50}
            src="/logo.png"
            alt="Logo"
          />
        </Link>
        <h1></h1>
      </div>
      <div>
      <Link
      href="/"
      className="px-5 py-3 text-sm md:text-base bg-gray-100 text-[#BF2121] flex items-center rounded-full
      text-center">
          Login
      </Link>
      </div>
    </header>
  );
}

export default Header;
