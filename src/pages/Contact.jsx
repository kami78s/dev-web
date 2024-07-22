import Header from '../components/Header'
import Footer from '../components/Footer'
import Input, { TextareaInput, TeleInput } from '../components/Input'

function Contact() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <Header />
            <main className='min-h-screen py-20 px-4 bg-background font-forma md:py-40 lg:px-16'>
                <section className='flex flex-col justify-center items-center gap-3'>
                    <h1 className='w-4/5 max-w-5xl mx-auto text-3xl font-bold bg-gradient-to-l from-[#950101] via-[#BC2D2D] to-[#EC6464] text-transparent text-center bg-clip-text md:text-6xl'>Contact us</h1>
                    <p className='text-lg font-vietnam font-normal text-dimmed text-center md:text-2xl md:max-w-[50ch]'>Our pleasure to hear from you.</p>
                </section>
                {/* Contact form */}
                <form
                    onSubmit={handleSubmit}
                    className="mt-12 max-w-7xl text-primary sm:grid sm:auto-rows-auto sm:grid-cols-2 sm:gap-x-14 md:mx-auto md:mt-24"
                >
                    <fieldset className="flex flex-col gap-2 mb-2 sm:colstart-1 sm:gap-y-14">
                        <Input type="text" id={'Firstname'} required />
                        <Input type="email" id={'Email'} required />
                        <Input type="text" id={'Company'} required />
                    </fieldset>

                    <fieldset className="flex flex-col gap-14 mb-2 sm:col-start-2 sm:gap-y-14">
                        <Input type="text" id={'Lastname'} required />
                        <TeleInput type="tel" id={'Telephone'} />
                        <Input type="text" id={'Country'} />
                    </fieldset>

                    <Input
                        type="text"
                        id={'Subject'}
                        style="my-10 sm:row-start-2 sm:row-end-3 sm:col-span-2"
                        required
                    />

                    <TextareaInput
                        id={'Message'}
                        style="my-10 sm:row-start-3 sm:row-end-4 sm:col-span-2"
                        required
                    />

                    <button className="w-full px-8 py-4 rounded-lg text-base font-medium font-barlow bg-accent text-white sm:col-start-2 sm:w-fit sm:justify-self-end">
                        Submit
                    </button>
                </form>
            </main>
            <Footer />
        </>
    )
}

export default Contact