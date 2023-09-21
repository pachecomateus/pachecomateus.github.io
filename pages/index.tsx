/* eslint-disable react/no-string-refs */
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { motion } from "framer-motion";
import Link from 'next/link';
import { ParallaxBanner } from 'react-scroll-parallax';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  // let image = document.getElementsByClassName('parallax');
  // new SimpleParallax(image);

  return (
    <main
      className={`min-h-screen bg-black text-white ${inter.className}`}
    >
      <div className='overflow-hidden'>
        <div className='flex flex-col justify-between items-center h-[100vh]'>
          <h1 data-aos='fade-down' data-aos-duration="1000" className='mt-[35vh] text-9xl'>
            oi!
          </h1>
          <div data-aos='fade-up' data-aos-duration="1000" data-aos-delay="500" className="scroll-downs pb-[25vh] block md:hidden">
            <div className="phone">
              <div className="swiper"></div>
            </div>
          </div>
          <div data-aos='fade-up' data-aos-duration="1000" data-aos-delay="500" className="scroll-downs pb-[25vh] hidden md:block">
            <div className="mousey">
              <div className="scroller"></div>
            </div>
          </div>
        </div>

        <div id='memoji' className='h-[100vh] flex flex-col items-center justify-center'>
          <Image data-aos='fade-up' className='w-1/2 md:w-1/5' src={'/mateusmemoji.gif'} alt={'memoji'} width={600} height={450} />
          <p data-aos='fade-right' data-aos-duration="700" className='py-5 text-2xl'>meu nome é Mateus</p>
          <p data-aos='fade-left' data-aos-duration="700" data-aos-delay="500" className='text-2xl'>sou desenvolvedor web</p>
        </div>

        <div className='h-[100vh] py-12 flex flex-col items-center justify-center'>
          <p data-aos='fade-up' data-aos-duration="700" data-aos-delay="500" className='flex items-center justify-center text-2xl pb-5'>ou seja:</p>
          <p data-aos='fade-up' data-aos-duration="700" data-aos-delay="600" className='flex items-center justify-center text-8xl md:text-9xl'>eu</p>
          <p data-aos='fade-up' data-aos-duration="700" data-aos-delay="700" className='flex items-center justify-center text-8xl md:text-9xl'>faço</p>
          <p data-aos='fade-up' data-aos-duration="700" data-aos-delay="800" className='flex items-center justify-center text-8xl md:text-9xl'>sites!</p>
        </div>



        <div className='py-12 flex flex-col'>
          <p data-aos='fade-left' data-aos-duration="700" className='text-center md:text-left py-5 md:pl-24 text-2xl'>alguns projetos que participei:</p>

          <a href='https://www.casategra.com.br' target='_blank' className='pt-12 md:pt-24 hover:opacity-80 hover:transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100 duration-300	z-50'>
            <p className='py-10 text-2xl text-center'>Casa Tegra</p>
            <ParallaxBanner
              layers={[{ image: 'casa-tegra.jpg', speed: 10 }]}
              className="aspect-[3/1]">
            </ParallaxBanner>
          </a>

          <a href='https://www.seedincorp.com.br/' target='_blank' className='pt-12 md:pt-24 hover:opacity-80 hover:transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100 duration-300	z-50'>
            <p className='py-10 text-2xl text-center'>Seed Incorp</p>
            <ParallaxBanner
              layers={[{ image: 'seed.png', speed: -10 }]}
              className="aspect-[3/1]">
            </ParallaxBanner>
          </a>

          <a href='https://sioux.ag' target='_blank' className='pt-12 md:pt-24 hover:opacity-80 hover:transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100 duration-300	z-50'>
            <p className='py-10 text-2xl text-center'>Sioux Digital 1:1</p>
            <ParallaxBanner
              layers={[{ image: 'sioux.jpg', speed: 10 }]}
              className="aspect-[3/1]">
            </ParallaxBanner>
          </a>

          <a href='https://vitacon.com.br' target='_blank' className='pt-12 md:pt-24 hover:opacity-80 hover:transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100 duration-300	z-50'>
            <p className='py-10 text-2xl text-center'>Vitacon</p>
            <ParallaxBanner
              layers={[{ image: 'vitacon.jpg', speed: -10 }]}
              className="aspect-[3/1]">
            </ParallaxBanner>
          </a>

          <a href='https://www.elizabethrevestimentos.com.br' target='_blank' className='pt-12 md:pt-24 hover:opacity-80 hover:transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100 duration-300	z-50'>
            <p className='py-10 text-2xl text-center'>Elizabeth Revestimentos</p>
            <ParallaxBanner
              layers={[{ image: 'elizabeth.jpg', speed: 10 }]}
              className="aspect-[3/1]">
            </ParallaxBanner>
          </a>
        </div>

        <div className='h-[100vh] py-12 flex flex-col justify-center'>
          <p data-aos='fade-left' data-aos-duration="700" className='pl-10 pb-5 md:pl-24 text-2xl'>tá querendo um site novo?</p>
          <p data-aos='fade-left' data-aos-duration="700" data-aos-delay="300" className='pl-10 pb-16 md:pl-24 text-2xl'>me chama:</p>
          <div data-aos='fade-up' data-aos-duration="700" data-aos-delay="500" className='hidden md:flex flex-wrap justify-evenly md:grid-cols-5 mx-12 md:mx-24'>
            <motion.div
              className="container cursor-pointer w-[120px] h-[120px] mx-3 my-3 flex justify-center items-center bg-white rounded-3xl"
              whileHover={{ scale: 1.2, borderRadius: "100%", rotate: 20 }}
              whileTap={{ scale: 0.8, borderRadius: "100%" }}>
              <a className='flex justify-center w-full h-full items-center' target='_blank' href='https://wa.me/5511959375818' rel="noreferrer">
                <Image className='text-black fill-red-500 absolute' src={'/whatsapp.svg'} width={80} height={80} alt='whatsapp' />
              </a>
            </motion.div>

            <motion.div
              className="container cursor-pointer w-[120px] h-[120px] mx-3 my-3 flex justify-center items-center bg-white rounded-3xl"
              whileHover={{ scale: 1.2, borderRadius: "100%", rotate: 20 }}
              whileTap={{ scale: 0.8, borderRadius: "100%" }}>
              <a className='flex justify-center w-full h-full items-center' target='_blank' href='mailto:mateuspachecosete@gmail.com?subject=Cotação de Site' rel="noreferrer">
                <Image className='text-black fill-red-500 absolute' src={'/gmail.svg'} width={80} height={80} alt='whatsapp' />
              </a>
            </motion.div>

            <motion.div
              className="container cursor-pointer w-[120px] h-[120px] mx-3 my-3 flex justify-center items-center bg-white rounded-3xl"
              whileHover={{ scale: 1.2, borderRadius: "100%", rotate: 20 }}
              whileTap={{ scale: 0.8, borderRadius: "100%" }}>
              <a className='flex justify-center w-full h-full items-center' target='_blank' href='https://www.linkedin.com/in/mateus-pacheco-petrin/' rel="noreferrer">
                <Image className='text-black fill-red-500 absolute' src={'/linkedin.svg'} width={80} height={80} alt='whatsapp' />
              </a>
            </motion.div>

            <motion.div
              className="container cursor-pointer w-[120px] h-[120px] mx-3 my-3 flex justify-center items-center bg-white rounded-3xl"
              whileHover={{ scale: 1.2, borderRadius: "100%", rotate: 20 }}
              whileTap={{ scale: 0.8, borderRadius: "100%" }}>
              <a className='flex justify-center w-full h-full items-center' target='_blank' href='https://www.instagram.com/pacheco_mateus/' rel="noreferrer">
                <Image className='text-black fill-red-500 absolute' src={'/instagram.svg'} width={80} height={80} alt='whatsapp' />
              </a>
            </motion.div>

            <motion.div
              className="container cursor-pointer w-[120px] h-[120px] mx-3 my-3 flex justify-center items-center bg-white rounded-3xl"
              whileHover={{ scale: 1.2, borderRadius: "100%", rotate: 20 }}
              whileTap={{ scale: 0.8, borderRadius: "100%" }}>
              <a className='flex justify-center w-full h-full items-center' target='_blank' href='https://github.com/pachecomateus' rel="noreferrer">
                <Image className='text-black fill-red-500 absolute' src={'/github.svg'} width={80} height={80} alt='whatsapp' />
              </a>
            </motion.div>
          </div>

          <div className='md:hidden flex flex-wrap justify-evenly md:grid-cols-5 mx-12 md:mx-24'>
            <div
              data-aos='fade-up' data-aos-duration="700" data-aos-delay="500"
              className="container cursor-pointer w-[120px] h-[120px] mx-3 my-3 flex justify-center items-center bg-white rounded-3xl">
              <a className='flex justify-center w-full h-full items-center' target='_blank' href='https://wa.me/5511959375818' rel="noreferrer">
                <Image className='text-black fill-red-500 absolute' src={'/whatsapp.svg'} width={80} height={80} alt='whatsapp' />
              </a>
            </div>

            <div
              data-aos='fade-up' data-aos-duration="700" data-aos-delay="600"
              className="container cursor-pointer w-[120px] h-[120px] mx-3 my-3 flex justify-center items-center bg-white rounded-3xl">
              <a className='flex justify-center w-full h-full items-center' target='_blank' href='mailto:mateuspachecosete@gmail.com?subject=Cotação de Site' rel="noreferrer">
                <Image className='text-black fill-red-500 absolute' src={'/gmail.svg'} width={80} height={80} alt='whatsapp' />
              </a>
            </div>

            <div
              data-aos='fade-up' data-aos-duration="700" data-aos-delay="700"
              className="container cursor-pointer w-[120px] h-[120px] mx-3 my-3 flex justify-center items-center bg-white rounded-3xl">
              <a className='flex justify-center w-full h-full items-center' target='_blank' href='https://www.linkedin.com/in/mateus-pacheco-petrin/' rel="noreferrer">
                <Image className='text-black fill-red-500 absolute' src={'/linkedin.svg'} width={80} height={80} alt='whatsapp' />
              </a>
            </div>

            <div
              data-aos='fade-up' data-aos-duration="700" data-aos-delay="800"
              className="container cursor-pointer w-[120px] h-[120px] mx-3 my-3 flex justify-center items-center bg-white rounded-3xl">
              <a className='flex justify-center w-full h-full items-center' target='_blank' href='https://www.instagram.com/pacheco_mateus/' rel="noreferrer">
                <Image className='text-black fill-red-500 absolute' src={'/instagram.svg'} width={80} height={80} alt='whatsapp' />
              </a>
            </div>

            <div
              data-aos='fade-up' data-aos-duration="700" data-aos-delay="900"
              className="container cursor-pointer w-[120px] h-[120px] mx-3 my-3 flex justify-center items-center bg-white rounded-3xl">
              <a className='flex justify-center w-full h-full items-center' target='_blank' href='https://github.com/pachecomateus' rel="noreferrer">
                <Image className='text-black fill-red-500 absolute' src={'/github.svg'} width={80} height={80} alt='whatsapp' />
              </a>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
