import Logo from '../../Helper/Logo';

const Nav = () => {
  return (
    <div className="transition-all duration-200 h-[12vh] z-100 fixed w-full bg-black">
      <div className="flex justify-between items-center h-full w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Logo/>
      </div>
    </div>
  );
}

export default Nav
