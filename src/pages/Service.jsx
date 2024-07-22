import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import OverlayImage from '../components/OverlayImage'
import Drawer from '../components/Drawer'

function Services() {
  return (
    <>
      <Header />
      <main className='min-h-screen py-20 bg-background font-forma md:py-40'>

        {/* Hero section */}
        <section className='flex flex-col justify-center items-center gap-3 px-4 text-center md:px-16'>
          <h1 className='w-4/5 max-w-5xl mx-auto text-3xl font-bold bg-gradient-to-l from-[#950101] via-[#BC2D2D] to-[#EC6464] text-transparent bg-clip-text md:text-6xl'>Audit & Pentest</h1>
          <p className='text-lg font-vietnam font-normal text-dimmed md:text-2xl md:max-w-[50ch]'>Lorem ipsum dolor sit amet consectetur. Tempor diam et etiam fermentum augue mauris neque scelerisque.</p>
          <Button title="Lorem ipsum" />
          {/* Dummy hero image */}
          <div className='w-full h-[232px] mt-6 rounded-3xl bg-[#D9D9D9] md:mt-12 md:h-[581px]'></div>
        </section>

        <section className='flex gap-12 mx-4 mt-12 md:mx-16 md:mt-24'>
          <p className='font-forma font-bold text-2xl leading-relaxed text-dimmed md:text-3xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
            <br />
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            <br />
            <br />
            When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
          </p>
          <img src="/images/dummy-image-vertical.jpg" alt="dummy image" className='w-1/4 self-center hidden rounded-3xl object-cover object-center lg:inline' />
        </section>

        <section className="grid grid-cols-1 justify-items-center gap-12 mx-4 mt-12 md:mx-16 md:mt-24 md:grid-cols-2">
          <OverlayImage src="/images/dummy-image2-1x.jpg" />
          <OverlayImage src="/images/dummy-image2-1x.jpg" />
          <OverlayImage src="/images/dummy-image2-2x.jpg" styles="md:row-start-1 md:row-end-3 md:col-start-2" />
        </section>

        <section className='flex flex-col gap-6 mx-4 mt-12 md:mx-16'>
          <Drawer header="Lorem ipsum dolor sit amet" content="Lorem ipsum dolor sit amet consectetur. Tempor diam et etiam fermentum augue mauris neque scelerisque. Lorem ipsum dolor sit amet consectetur." />
          <Drawer header="Lorem ipsum dolor sit amet" content="Lorem ipsum dolor sit amet consectetur. Tempor diam et etiam fermentum augue mauris neque scelerisque. Lorem ipsum dolor sit amet consectetur." />
          <Drawer header="Lorem ipsum dolor sit amet" content="Lorem ipsum dolor sit amet consectetur. Tempor diam et etiam fermentum augue mauris neque scelerisque. Lorem ipsum dolor sit amet consectetur." />
          <Drawer header="Lorem ipsum dolor sit amet" content="Lorem ipsum dolor sit amet consectetur. Tempor diam et etiam fermentum augue mauris neque scelerisque. Lorem ipsum dolor sit amet consectetur." />
        </section>

        <section className='mt-16 px-4 md:px-16 md:mt-36'>
          <div className='px-3 py-6 rounded-3xl bg-background-accent md:flex md:gap-10 md:justify-between md:items-center md:p-14'>
            <h4 className='mb-6 text-2xl text-primary font-medium font-grotesk md:mb-0'>Lorem ipsum dolor sit amet consectetur.</h4>
            <Button title="Contactez-nous" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Services