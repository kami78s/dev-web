import { useContext, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import {langContext} from "../context/languageContext"

import Header from "../components/Header"
import Footer from "../components/Footer"
import OurServices from "../sections/OurServices"
import Carousel from "../sections/Carousel"
import MouseHighlighter from '../components/MouseHighlighter'
import CTAButton from '../components/CTAButton'
import AnimatedLink from "../components/AnimatedLink"

function Home() {
	const { locale } = useContext(langContext);
	const { pathname } = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		document.title = 'OXYHACK - Accueil';
		if (pathname === '/') navigate('/fr');
	}, []);

	return (
		<main className='min-h-screen bg-background font-forma'>
			<Header />
			<section className='text-center mx-4 mt-16 md:mt-36'>
				<h1 className='pb-4 w-4/5 max-w-5xl mx-auto text-3xl font-bold bg-gradient-to-l from-[#950101] via-[#BC2D2D] to-[#EC6464] text-transparent bg-clip-text md:text-5xl'>{locale.heroParagraph}</h1>
				<p className='font-vietnam font-normal text-base text-dimmed md:hidden'>{locale.heroSmall}</p>
			</section>

			<OurServices />

			{/* section2 */}
			<section className='max-w-7xl mx-auto mt-16 px-4 md:px-16 md:mt-36'>
				<h2 className='text-primary font-bold text-4xl'>{locale.home_section2_h2}</h2>
				<p className='w-4/5 mt-6 mb-3 text-3xl font-forma font-bold text-dimmed'>OxyHack, filiale cybersécurité de MOAR IT, se <span className='text-primary'>spécialise dans la protection de votre entreprise</span> contre les menaces en ligne. Nous proposons des services complets pour renforcer la sécurité de vos systèmes informatiques, assurés par une <span className='text-primary'>équipe d'experts dédiés.</span></p>
				<AnimatedLink href="#" />
			</section>

			<Carousel />

			{/* section3 */}
			<section className='max-w-7xl mx-auto my-16 px-4 md:px-16 md:mt-36'>
				<MouseHighlighter>
					<div className='px-3 py-6 rounded-3xl md:flex md:gap-10 md:justify-between md:items-center'>
						<h4 className='pb-6 text-3xl text-primary font-bold font-forma'>{locale.home_section2_h4}</h4>
						<CTAButton href="#" style="px-3 flex-shrink-0 font-bold" title="Contactez-nous" />
					</div>
				</MouseHighlighter>
			</section>
			<Footer />
		</main>
	)
}

export default Home