'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className={`${
              pathname === '/cabins' ? 'text-accent-400' : ''
            } hover:text-accent-400 transition-colors`}
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`${
              pathname === '/about' ? 'text-accent-400' : ''
            } hover:text-accent-400 transition-colors`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className={`${
              pathname === '/account' ? 'text-accent-400' : ''
            } hover:text-accent-400 transition-colors`}
          >
            Guest area
          </Link>
        </li>
      </ul>
    </nav>
  );
}
