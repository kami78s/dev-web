
function Footer() {
  return (
    <footer className="px-3 py-12 text-primary font-grotesk bg-background-accent md:grid md:grid-cols-5 md:gap-12 md:px-16 md:py-10">
      <img src="/logo/full-logo.png" alt="logo" className="md:row-span-1 md:col-span-3" />
      <div className="flex flex-col gap-3 mt-6 md:row-start-2 md:col-start-1 md:col-end-3 md:mt-0">
        <p className="mt-6 text-xl font-medium md:row-start-2 md:col-start-1 md:mt-0">Learn it, Build it, Break it.</p>
        <a href="mailto:contact@oxyhack.com" className="mt-6 text-xl font-medium md:mt-0">contact@oxyhack.com</a>
        <a href="tel:+33 5 64 37 61 24" className="mt-3 text-xl font-medium md:mt-0">+33 5 64 37 61 24</a>
      </div>
      <div className='mt-12 font-vietnam md:row-start-2 md:col-start-3 md:col-end-6 md:grid md:grid-cols-subgrid md:mt-0'>
        <ul className="mt-12 font-normal text-base md:mt-0">Sitemap
          <a href=""><li className="mt-6 text-dimmed">Lorem ipsum</li></a>
          <a href=""><li className="mt-3 text-dimmed">Lorem ipsum</li></a>
          <a href=""><li className="mt-3 text-dimmed">Lorem ipsum</li></a>
          <a href=""><li className="mt-3 text-dimmed">Lorem ipsum</li></a>
          <a href=""><li className="mt-3 text-dimmed">Lorem ipsum</li></a>
          <a href=""><li className="mt-3 text-dimmed">Lorem ipsum</li></a>
          <a href=""><li className="mt-3 text-dimmed">Lorem ipsum</li></a>
          <a href=""><li className="mt-3 text-dimmed">Lorem ipsum</li></a>
        </ul>
        <ul className="mt-12 font-normal text-base md:mt-0">Réseaux
          <a href=""><li className="mt-6 text-dimmed">LinkedIn</li></a>
          <a href=""><li className="mt-3 text-dimmed">Instagram</li></a>
          <a href=""><li className="mt-3 text-dimmed">Facebook</li></a>
        </ul>
        <ul className="mt-12 font-normal text-base md:mt-0">Support
          <a href=""><li className="mt-6 text-dimmed">Mentions légales</li></a>
          <a href=""><li className="mt-3 text-dimmed">Cookies</li></a>
        </ul>
      </div>
      <p className="mt-12 text-sm font-normal font-vietnam md:row-start-3 md:col-start-1 md:col-end-6 text-center md:mt-0">© Copyright {new Date().getFullYear()} Oxyhack Tous Droits Réservés</p>
    </footer>
  )
}

export default Footer