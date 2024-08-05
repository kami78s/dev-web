import { useContext } from 'react';

import { langContext } from '../context/languageContext';

import MouseHighlighter from '../components/MouseHighlighter'
import AnimatedLink from '../components/AnimatedLink'

function OurServices() {
	const { locale } = useContext(langContext);

    return (
        <section className='flex flex-col gap-9 max-w-7xl mx-auto mt-16 px-4 md:flex-row md:flex-wrap md:px-16 md:mt-24'>
            {locale.services.map((service, i) => (
                <MouseHighlighter key={i}>
                    <div className='px-3 py-5'>
                        <h3 className='text-2xl font-bold text-primary'>{service.header}</h3>
                        <p className="mt-5 mb-3 font-vietnam text-base text-dimmed">{service.content}</p>
                        <AnimatedLink href="#" />
                    </div>
                </MouseHighlighter>
            ))}
        </section>
    )
}

export default OurServices