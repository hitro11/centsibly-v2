import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full my-6 flex">
      <Link href="/">
        <Image
          className="dark:invert ml-8"
          src="/centsibly.png"
          alt="Centsibly logo"
          width={50}
          height={50}
          priority
        />
      </Link>
      <button className="ml-auto mr-8 bg-black dark:bg-zinc-200 hover:bg-zinc-50 text-black font-bold  px-2 rounded cursor-pointer">
        Sign In
      </button>
    </header>
  );
}
