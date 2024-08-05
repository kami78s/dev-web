import {useContext} from 'react'

import {langContext} from '../context/languageContext'

function AnimatedLink({href}) {
  const {locale} = useContext(langContext);

  return (
    <a href={href} className='inline-block w-fit text-lg text-accent font-bold underline-animation'>{locale.animatedLink}
    <img src="/images/right-arrow.png" alt="right arrow icon" className='inline ml-2' />
</a>
  )
}

export default AnimatedLink