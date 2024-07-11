
function OurServices() {
    return (
        <section className='flex flex-col gap-9 justify-between max-w-7xl mx-auto mt-16 px-4 md:flex-row md:flex-wrap md:px-16 md:mt-24'>
            {services.map((service, i) => (
                <div className='w-full px-3 py-4 flex-shrink-0 flex-grow rounded-2xl bg-background-accent md:basis-1/3 md:p-10' key={i}>
                    <h3 className='text-2xl font-bold text-primary'>{service.header}</h3>
                    <p className="mt-5 mb-3 font-vietnam text-base text-dimmed">{service.content}</p>
                    <a href="#" className='text-lg text-accent font-bold'>En savoir plus</a>
                </div>
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