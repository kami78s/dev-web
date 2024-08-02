import clsx from "clsx";
import { useState } from "react"

function Carousel() {
    const [position, setPosition] = useState(0);

    const handleMovement = (direction) => {
        if (direction === "left" && position > -75) {
            setPosition(position - 25);
        } else if (direction === "right" && position < 0) {
            setPosition(position + 25);
        }
    }

    return (
        <section className='max-w-7xl mx-auto mt-16 px-4 font-forma md:px-16 md:mt-36'>
            <div className="flex items-center">
                <h2 className='grow text-primary font-bold text-4xl'>Les risques de la sécurité</h2>
                <img src="/images/right-arrow.png" alt="left arrow icon" className={clsx(`hidden mr-5 rotate-180 size-5 cursor-pointer lg:inline`, {'opacity-25': position === -75})} onClick={() => handleMovement("left")} />
                <img src="/images/right-arrow.png" alt="right arrow icon" className={clsx(`hidden mr-5 size-5 cursor-pointer lg:inline`, {'opacity-25': position === 0})} onClick={() => handleMovement("right")} />
            </div>
            {/* Carousel */}
            {/* Window */}
            <div className="overflow-scroll lg:overflow-hidden">
                {/* Track */}
                <ul className={`flex gap-6 mt-6 w-max hide-scrollbar`} style={{transform: `translateX(${position}%)`}}>
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
            </div>
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