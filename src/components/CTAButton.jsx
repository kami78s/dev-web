import {Link} from 'react-router-dom'

function CTAButton({href, title, style}) {
  return (
    <Link to={href} className={`inline-block px-6 py-4 font-forma rounded-md text-lg font-medium text-background-accent bg-accent border-2 border-transparent transition-colors duration-300 hover:bg-transparent hover:border-accent hover:text-accent md:inline ${style}`}>{title}</Link>
  )
}

export default CTAButton