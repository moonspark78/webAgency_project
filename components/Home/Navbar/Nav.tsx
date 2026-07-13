import Link from 'next/link';
import { NAVLINKS } from '../../../constant/constant';
import Logo from '../../Helper/Logo';

const Nav = () => {
  return (
    <div className="transition-all duration-200 h-[12vh] z-100 fixed w-full bg-black">
      <div className="flex justify-between items-center h-full w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Logo/>
        {/* NavLinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {NAVLINKS.map((link) => {
            return (
            <Link
              key={link.id}
              href={link.url}
            >
            </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Nav
