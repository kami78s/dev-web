import MouseHighlighter from '../components/MouseHighlighter'
import AnimatedLink from '../components/AnimatedLink'

function OurServices() {
    return (
        <section className='flex flex-col gap-9 max-w-7xl mx-auto mt-16 px-4 md:flex-row md:flex-wrap md:px-16 md:mt-24'>
            {services.map((service, i) => (
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

const services = [
    {
        header: "Social engenering",
        content: "Assurez la sécurité et l’intégrité de votre environnement numérique avec nos services d’audit et de pentest sur mesure."
    },
    {
        header: "Prestation de penteste",
        content: "Élevez votre défense contre les cybermenaces grâce à nos formations sur mesure et à notre expertise en simulation d'attaques de phishing."
    },
    {
        header: "Sensibilisation",
        content: "Renforcez votre sécurité informatique avec le service Blue Team, fourni par notre partenaire MOART IT"
    },
    {
        header: "Prestation audite de sécurité",
        content: "Développez vos compétences en cybersécurité avec notre service CTF, offrant des compétitions sur mesure et des plateformes clé en main."
    }
]