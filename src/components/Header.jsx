import { useState } from "react";
import { Link } from "react-router-dom"
import clsx from "clsx";
import CTAButton from "../components/CTAButton";

function Header() {
  const [isNavOpened, setIsNavOpened] = useState(false);

  return (
    <header className='flex items-center justify-between h-20 px-3 bg-background-accent md:px-16 md:py-6'>
      {/* Mobile Nav */}
        <Link to="/">
          <img src='/logo/logo-typo.svg' alt='logo' className='h-6' />
        </Link>

      {/* Desktop Nav */}
      <nav>
        <ul className='relative items-center gap-6 font-grotesk text-base font-normal text-primary hidden lg:flex'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/service'>Service</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to=''>Accueil</Link></li>
          <li><Link to=''>Accueil</Link></li>
          <li>
            <CTAButton title="Contactez-nous" href="/contact" />
          </li>
        </ul>
        <img src='/images/hamburger.png' alt="hamburger icon" className="cursor-pointer lg:hidden" onClick={() => setIsNavOpened(true)} />
        <ul className={clsx(`fixed left-0 top-0 flex flex-col justify-center gap-10 items-center h-full w-full transition-transform bg-background/95 text-accent text-4xl font-forma font-medium z-50 lg:hidden`, { '-translate-x-full': !isNavOpened })}>
          <li className="absolute top-4 right-4 cursor-pointer" onClick={() => setIsNavOpened(false)}>X</li>
          <li className="hover:text-background hover:bg-accent w-full text-center"><Link to="/">Home</Link></li>
          <li className="hover:text-background hover:bg-accent w-full text-center"><Link to="/service">Service</Link></li>
          <li className="hover:text-background hover:bg-accent w-full text-center"><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header