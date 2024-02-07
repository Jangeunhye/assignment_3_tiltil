import Link from "next/link";
import HeaderAuthButtons from "./_components/HeaderAuthButtons";

function Header() {
  return (
    <header className="h-20 border-b flex items-center px-9 justify-between ">
      <Link href="/" className="text-[20px]">
        띨띨한 TIL
      </Link>

      <nav className="absolute left-1/2 -translate-x-1/2">
        <ul className="flex gap-20">
          <li>
            <Link href="/til/total">전체글</Link>
          </li>
          <li>
            <Link href="/til/recent">최신글</Link>
          </li>
          <li>
            <Link href="/til/write">TIL 쓰러가기</Link>
          </li>
        </ul>
      </nav>

      <HeaderAuthButtons />
    </header>
  );
}

export default Header;
