import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <footer className="border-t">
      <div
        className="flex-center wapper flex-between flex
        flex-col gap-4 p-5 text-center sm:flex-row"
      >
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>
        <p>2023 app. all Rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
