import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import clsx from "clsx";

import { langContext } from "../context/languageContext";

import CTAButton from "../components/CTAButton";
import LanguageSelector from "../components/languageSelector";

function Header() {
  const [isNavOpened, setIsNavOpened] = useState(false);
  const { lang, locale } = useContext(langContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (lang === 'fr') {
      document.documentElement.lang = 'fr';
      navigate(location.pathname.replace(/^\/en/, `/${lang}`));
    } else {
      document.documentElement.lang = 'en';
      navigate(location.pathname.replace(/^\/fr/, `/${lang}`));
    }
  }, [lang]);

  return (
    <header className='flex items-center justify-between h-20 px-3 bg-background-accent md:px-16 md:py-6'>
        <Link to="/">
          <img src='/logo/logo-typo.svg' alt='logo' className='h-6' />
        </Link>
      <nav>
        {/* Desktop Nav */}
        <ul className='relative items-center gap-6 font-grotesk text-base font-normal text-primary hidden lg:flex'>
          <li><Link to={`/${lang}`}>{locale.navLinks[0]}</Link></li>
          <li><Link to={`/${lang}/service`}>{locale.navLinks[1]}</Link></li>
          <li><Link to={`/${lang}/contact`}>{locale.navLinks[2]}</Link></li>
          <li><Link to=''>Accueil</Link></li>
          <li><LanguageSelector /></li>
          <li>
            <CTAButton title={locale.CTAButton} href={`/${lang}/contact`} />
          </li>
        </ul>
        {/* Mobile Nav */}
        <img src='/images/hamburger.png' alt="hamburger icon" className="cursor-pointer lg:hidden" onClick={() => setIsNavOpened(true)} />
        <ul className={clsx(`fixed left-0 top-0 flex flex-col justify-center gap-10 items-center h-full w-full transition-transform bg-background/95 text-accent text-4xl font-forma font-medium z-50 lg:hidden`, { '-translate-x-full': !isNavOpened })}>
          <li className="absolute top-4 right-4 cursor-pointer" onClick={() => setIsNavOpened(false)}>X</li>
          <li className="hover:text-background hover:bg-accent w-full text-center"><Link to={`/${lang}`}>{locale.navLinks[0]}</Link></li>
          <li className="hover:text-background hover:bg-accent w-full text-center"><Link to={`/${lang}/service`}>{locale.navLinks[1]}</Link></li>
          <li className="hover:text-background hover:bg-accent w-full text-center"><Link to={`/${lang}/contact`}>{locale.navLinks[2]}</Link></li>
          <li><LanguageSelector /></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header