import { Link } from "react-router-dom"

function Header() {
  return (
    <header className='flex items-center justify-between h-20 px-3 bg-background-accent md:px-16 md:py-6'>
      {/* Mobile Nav */}
      <Link to="/">
        <img src='/logo/logo-typo.svg' alt='logo' className='h-6' />
      </Link>
      {/* Desktop Nav */}
      <nav>
        <ul className='items-center gap-6 font-grotesk text-base font-normal text-primary hidden lg:flex'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/service'>Service</Link></li>
          <li><Link to=''>Accueil</Link></li>
          <li><Link to=''>Accueil</Link></li>
          <li><Link to=''>Accueil</Link></li>
          <li>
            <a href="#" className='inline-block px-6 py-4 font-forma rounded-md text-lg font-medium text-background-accent bg-accent md:inline'>Contactez-nous</a>
          </li>
        </ul>
        <img src='/logo/hamburger.png' alt="hamburger icon" className="lg:hidden" />
      </nav>
    </header>
  )
}

export default Header