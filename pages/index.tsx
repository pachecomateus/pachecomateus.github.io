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



        <div className='py-12 flex flex-col items-center'>
          <p data-aos='fade-left' data-aos-duration="700" className='text-center py-5 text-2xl'>alguns projetos que participei:</p>

          <div className='flex flex-wrap justify-center mt-10'>

            <div className='flex flex-col items-center'>
              <p data-aos='fade-right' data-aos-duration="700" className='mt-10'>Casa Tegra</p>
              <a data-aos='fade-right' data-aos-duration="700" href='https://www.casategra.com.br' target='_blank' className=''>
                <motion.div
                  className="cursor-pointer bg-[url('../public/casa-tegra.jpg')] bg-cover bg-no-repeat bg-center md:w-[45vw] w-[90vw] md:h-[45vh] h-[25vh] mx-5 my-5 flex justify-center items-center bg-white rounded-3xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{
                  scale: 0.8,
                  borderRadius: "24px"
                }}>
                </motion.div>
              </a>
            </div>

            <div className='flex flex-col items-center'>
              <p data-aos='fade-left' data-aos-duration="700" className='mt-10'>Seed Incorp</p>
              <a data-aos='fade-left' data-aos-duration="700" href='https://www.seedincorp.com.br/' target='_blank' className=''>
                <motion.div
                  className="cursor-pointer bg-[url('../public/seed.png')] bg-cover bg-no-repeat bg-left md:w-[45vw] w-[90vw] md:h-[45vh] h-[25vh] mx-5 my-5 flex justify-center items-center bg-white rounded-3xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{
                  scale: 0.8,
                  borderRadius: "24px"
                }}>
                </motion.div>
              </a>
            </div>

            <div className='flex flex-col items-center'>
              <p data-aos='fade-right' data-aos-duration="700" className='mt-10'>Seed Incorp</p>
              <a data-aos='fade-right' data-aos-duration="700" href='https://sioux.ag' target='_blank' className=''>
                <motion.div
                  className="cursor-pointer bg-[url('../public/sioux.jpg')] bg-cover bg-no-repeat bg-left md:w-[45vw] w-[90vw] md:h-[45vh] h-[25vh] mx-5 my-5 flex justify-center items-center bg-white rounded-3xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{
                  scale: 0.8,
                  borderRadius: "24px"
                }}>
                </motion.div>
              </a>
            </div>

            <div className='flex flex-col items-center'>
              <p data-aos='fade-left' data-aos-duration="700" className='mt-10'>Seed Incorp</p>
              <a data-aos='fade-left' data-aos-duration="700" href='https://vitacon.com.br' target='_blank' className=''>
                <motion.div
                  className="cursor-pointer bg-[url('../public/vitacon.jpg')] bg-cover bg-no-repeat bg-left md:w-[45vw] w-[90vw] md:h-[45vh] h-[25vh] mx-5 my-5 flex justify-center items-center bg-white rounded-3xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{
                  scale: 0.8,
                  borderRadius: "24px"
                }}>
                </motion.div>
              </a>
            </div>

            <div className='flex flex-col items-center'>
              <p data-aos='fade-right' data-aos-duration="700" className='mt-10'>Seed Incorp</p>
              <a data-aos='fade-right' data-aos-duration="700" href='https://www.elizabethrevestimentos.com.br' target='_blank' className=''>
                <motion.div
                  className="cursor-pointer bg-[url('../public/elizabeth.jpg')] bg-cover bg-no-repeat bg-left md:w-[45vw] w-[90vw] md:h-[45vh] h-[25vh] mx-5 my-5 flex justify-center items-center bg-white rounded-3xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{
                  scale: 0.8,
                  borderRadius: "24px"
                }}>
                </motion.div>
              </a>
            </div>

          </div>
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
