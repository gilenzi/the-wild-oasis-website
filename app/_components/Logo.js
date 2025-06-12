import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo-dark.png';

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* <Image
        src="/logo-dark.png"
        height="60"
        width="60"
        alt="The Wild Oasis logo"
      /> */}
      <Image
        src={logo}
        width={60}
        height={60}
        alt="The Wild Oasis logo"
        quality={1}
      />
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
