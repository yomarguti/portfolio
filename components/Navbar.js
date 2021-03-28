import NavItem from './NavItem';

const Navbar = () => {
  return (
    <nav className="w-full h-16 text-sm text-gray-800 md:text-base">
      <ul className="flex items-center justify-center h-full tracking-wider sm:shadow">
        <NavItem path="/" menuName="Home" />
        <NavItem path="/skills" menuName="Skills" />
        <NavItem path="/blog" menuName="Blog" />
        <NavItem path="/me" menuName="About Me" />
      </ul>
    </nav>
  );
};

export default Navbar;
