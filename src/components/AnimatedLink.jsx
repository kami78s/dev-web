import React from 'react'

function AnimatedLink({href}) {
  return (
    <a href={href} className='inline-block w-fit text-lg text-accent font-bold underline-animation'>En savoir plus
    <img src="/images/right-arrow.png" alt="right arrow icon" className='inline ml-2' />
</a>
  )
}

export default AnimatedLink