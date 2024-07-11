
function Carousel() {
    return (
        <section className='max-w-7xl mx-auto mt-16 px-4 font-forma md:px-16 md:mt-36'>
            <h2 className='text-primary font-bold text-4xl'>Les risques de la sécurité</h2>
            {/* Carousel */}
            <ul className='flex gap-6 mt-6 overflow-x-scroll hide-scrollbar'>
                {/* Cards */}
                {
                    carouselItems.map((item, i) => (
                        <li className='flex flex-col shrink-0 w-[247px] h-fit' key={i}>
                            <div className='w-full h-[197px] rounded-2xl bg-white'></div> {/* Dummy card image */}
                            <h3 className='mt-3 mb-2 text-3xl font-bold text-primary'>{item.header}</h3>
                            <p className='font-vietnam text-xl font-normal text-dimmed'>{item.content}</p>
                        </li>

                    ))
                }
            </ul>
        </section>
    )
}

export default Carousel

const carouselItems = [
    {
        header: "Espionnage",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        image: ""
    }, {
        header: "Destruction de donnée",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        image: ""
    }, {
        header: "Atteinte à l’image",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        image: ""
    }, {
        header: "Demande de rançon",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        image: ""
    }
]