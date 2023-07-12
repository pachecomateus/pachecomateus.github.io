/* eslint-disable react/no-string-refs */
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { motion } from "framer-motion";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`min-h-screen bg-black text-white ${inter.className}`}
    >
      <div className='overflow-hidden'>
        <div className='flex flex-col justify-between items-center h-[100vh]'>
          <h1 data-aos='fade-down' data-aos-duration="1000" className='mt-[40vh] text-9xl'>
            oi!
          </h1>
          <Image data-aos='fade-up' data-aos-duration="1000" data-aos-delay="900" className='pb-[30vh]' width={60} height={60} src={'/arrowdown.png'} alt='' />
        </div>
        
        <div className='h-[50vh] flex flex-col items-center'>
          <Image data-aos='fade-up' className='w-1/2 mt-20 lg:w-1/5' src={'/mateusmemoji.gif'} alt={'memoji'} width={600} height={450}/>
          <p data-aos='fade-right' data-aos-duration="700" className='py-5 text-2xl'>meu nome é Mateus</p>
          <p data-aos='fade-left' data-aos-duration="700" data-aos-delay="500" className='text-2xl'>sou desenvolvedor web</p> 
        </div>
        <div className='h-[100vh] py-12 flex flex-col items-center justify-center'>
          <p data-aos='fade-up' data-aos-duration="700" data-aos-delay="500" className='flex items-center justify-center text-2xl pb-5'>ou seja:</p>
          <p data-aos='fade-up' data-aos-duration="700" data-aos-delay="600" className='flex items-center justify-center text-8xl lg:text-9xl'>eu</p>
          <p data-aos='fade-up' data-aos-duration="700" data-aos-delay="700" className='flex items-center justify-center text-8xl lg:text-9xl'>faço</p>
          <p data-aos='fade-up' data-aos-duration="700" data-aos-delay="800" className='flex items-center justify-center text-8xl lg:text-9xl'>sites!</p>
        </div>
        <div className='h-[100vh] py-12'>
          <p data-aos='fade-left' data-aos-duration="700" className='pl-10 pb-5 lg:pl-24 text-2xl'>tá querendo um site novo?</p>
          <p data-aos='fade-left' data-aos-duration="700" data-aos-delay="400" className='pl-10 pb-16 lg:pl-24 text-2xl'>me chama:</p>
          <div data-aos='fade-up' data-aos-duration="700" data-aos-delay="500" className='hidden lg:flex flex-wrap justify-evenly lg:grid-cols-5 mx-12 lg:mx-24'>
            <motion.div
            className="container cursor-pointer w-[120px] h-[120px] mx-3 my-3 flex justify-center items-center bg-white rounded-3xl"
            whileHover={{ scale: 1.2, borderRadius: "100%", rotate: 20 }}
            whileTap={{ scale: 0.8, borderRadius: "100%" }}>
              <a className='flex justify-center w-full h-full items-center' target='_blank' href='https://wa.me/5511959375818'>
                <Image className='text-black fill-red-500 absolute' src={'/whatsapp.svg'} width={80} height={80} alt='whatsapp'/>
              </a>
            </motion.div>

            <motion.div
            className="container cursor-pointer w-[120px] h-[120px] mx-3 my-3 flex justify-center items-center bg-white rounded-3xl"
            whileHover={{ scale: 1.2, borderRadius: "100%", rotate: 20 }}
            whileTap={{ scale: 0.8, borderRadius: "100%" }}>
              <a className='flex justify-center w-full h-full items-center' target='_blank' href='mailto:mateuspachecosete@gmail.com?subject=Cotação de Site'>
                <Image className='text-black fill-red-500 absolute' src={'/gmail.svg'} width={80} height={80} alt='whatsapp'/>
              </a>
            </motion.div>

            <motion.div
            className="container cursor-pointer w-[120px] h-[120px] mx-3 my-3 flex justify-center items-center bg-white rounded-3xl"
            whileHover={{ scale: 1.2, borderRadius: "100%", rotate: 20 }}
            whileTap={{ scale: 0.8, borderRadius: "100%" }}>
              <a className='flex justify-center w-full h-full items-center' target='_blank' href='https://www.linkedin.com/in/mateus-pacheco-petrin/'>
                <Image className='text-black fill-red-500 absolute' src={'/linkedin.svg'} width={80} height={80} alt='whatsapp'/>
              </a>
            </motion.div>

            <motion.div
            className="container cursor-pointer w-[120px] h-[120px] mx-3 my-3 flex justify-center items-center bg-white rounded-3xl"
            whileHover={{ scale: 1.2, borderRadius: "100%", rotate: 20 }}
            whileTap={{ scale: 0.8, borderRadius: "100%" }}>
              <a className='flex justify-center w-full h-full items-center' target='_blank' href='https://www.instagram.com/pacheco_mateus/'>
                <Image className='text-black fill-red-500 absolute' src={'/instagram.svg'} width={80} height={80} alt='whatsapp'/>
              </a>
            </motion.div>

            <motion.div
            className="container cursor-pointer w-[120px] h-[120px] mx-3 my-3 flex justify-center items-center bg-white rounded-3xl"
            whileHover={{ scale: 1.2, borderRadius: "100%", rotate: 20 }}
            whileTap={{ scale: 0.8, borderRadius: "100%" }}>
              <a className='flex justify-center w-full h-full items-center' target='_blank' href='https://github.com/pachecomateus'>
                <Image className='text-black fill-red-500 absolute' src={'/github.svg'} width={80} height={80} alt='whatsapp'/>
              </a>
            </motion.div>
          </div>

          <div data-aos='fade-up' data-aos-duration="700" data-aos-delay="500" className='lg:hidden flex flex-wrap justify-evenly lg:grid-cols-5 mx-12 lg:mx-24'>
            <div
            className="container cursor-pointer w-[120px] h-[120px] mx-3 my-3 flex justify-center items-center bg-white rounded-3xl">
              <a className='flex justify-center w-full h-full items-center' target='_blank' href='https://wa.me/5511959375818'>
                <Image className='text-black fill-red-500 absolute' src={'/whatsapp.svg'} width={80} height={80} alt='whatsapp'/>
              </a>
            </div>

            <div
            className="container cursor-pointer w-[120px] h-[120px] mx-3 my-3 flex justify-center items-center bg-white rounded-3xl">
              <a className='flex justify-center w-full h-full items-center' target='_blank' href='mailto:mateuspachecosete@gmail.com?subject=Cotação de Site'>
                <Image className='text-black fill-red-500 absolute' src={'/gmail.svg'} width={80} height={80} alt='whatsapp'/>
              </a>
            </div>

            <div
            className="container cursor-pointer w-[120px] h-[120px] mx-3 my-3 flex justify-center items-center bg-white rounded-3xl">
              <a className='flex justify-center w-full h-full items-center' target='_blank' href='https://www.linkedin.com/in/mateus-pacheco-petrin/'>
                <Image className='text-black fill-red-500 absolute' src={'/linkedin.svg'} width={80} height={80} alt='whatsapp'/>
              </a>
            </div>

            <div
            className="container cursor-pointer w-[120px] h-[120px] mx-3 my-3 flex justify-center items-center bg-white rounded-3xl">
              <a className='flex justify-center w-full h-full items-center' target='_blank' href='https://www.instagram.com/pacheco_mateus/'>
                <Image className='text-black fill-red-500 absolute' src={'/instagram.svg'} width={80} height={80} alt='whatsapp'/>
              </a>
            </div>

            <div
            className="container cursor-pointer w-[120px] h-[120px] mx-3 my-3 flex justify-center items-center bg-white rounded-3xl">
              <a className='flex justify-center w-full h-full items-center' target='_blank' href='https://github.com/pachecomateus'>
                <Image className='text-black fill-red-500 absolute' src={'/github.svg'} width={80} height={80} alt='whatsapp'/>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  )
}
