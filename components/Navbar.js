import NavItem from './NavItem';

const Navbar = () => {
  return (
    <nav className="w-full h-16 text-base text-gray-800 md:text-base">
      <ul className="flex items-center justify-center h-full sm:tracking-wider sm:shadow">
        <NavItem path="/" menuName="Home" />
        <NavItem path="/education" menuName="Education" />
        <NavItem path="/blog" menuName="Blog" />
        <NavItem path="/me" menuName="About" />
      </ul>
    </nav>
  );
};

export default Navbar;
