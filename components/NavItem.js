import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem = ({ path, menuName }) => {
  const router = useRouter();

  const liClassName = `${
    router.pathname === path ? 'font-bold text-primary ' : ''
  } px-4 cursor-pointer sm:px-10 md:px-12 transition-all duration-300 ease-in-out`;

  return (
    <Link href={path}>
      <li className={liClassName}>{menuName}</li>
    </Link>
  );
};

export default NavItem;
