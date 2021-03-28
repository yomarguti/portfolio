import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem = ({ path, menuName }) => {
  const router = useRouter();

  const liClassName = `${
    router.pathname === path && 'font-bold'
  } px-4 transition-all duration-300 ease-in-out cursor-pointer sm:px-10 md:px-12 hover:text-black hover:font-bold`;

  return (
    <Link href={path}>
      <li className={liClassName}>{menuName}</li>
    </Link>
  );
};

export default NavItem;
