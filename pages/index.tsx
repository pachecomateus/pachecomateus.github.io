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
        <h1 data-aos='fade-down' data-aos-duration="1000" className='flex items-center justify-center h-[100vh] text-9xl p-12 lg:p-24'>
          oi!
        </h1>
        <div className='h-[50vh]'>
          <p data-aos='fade-right' data-aos-duration="700" className='pl-12 pb-5 lg:pl-24 text-2xl'>Meu nome é Mateus</p>
          <p data-aos='fade-left' data-aos-duration="700" data-aos-delay="500" className='pl-12 lg:pl-24 text-2xl'>{'Sou desenvolvedor (ou programador) web'}</p>
        </div>
        <div className='h-[100vh] py-12 flex flex-col items-center justify-center'>
          <p data-aos='fade-up' data-aos-duration="700" data-aos-delay="500" className='flex items-center justify-center text-2xl pb-5'>ou seja:</p>
          <p data-aos='fade-up' data-aos-duration="700" data-aos-delay="600" className='flex items-center justify-center text-8xl'>eu</p>
          <p data-aos='fade-up' data-aos-duration="700" data-aos-delay="700" className='flex items-center justify-center text-8xl'>faço</p>
          <p data-aos='fade-up' data-aos-duration="700" data-aos-delay="800" className='flex items-center justify-center text-8xl'>sites!</p>
        </div>
        <div className='h-[100vh]'>
          <p data-aos='fade-left' data-aos-duration="700" className='pl-12 pb-5 lg:pl-24 text-2xl'>tá querendo um site novo?</p>
          <p data-aos='fade-left' data-aos-duration="700" className='pl-12 pb-5 lg:pl-24 text-2xl'>me chama:</p>
          <motion.div
          className="container w-[150px] h-[150px] ml-12 flex justify-center items-center bg-white rounded-3xl"
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{ scale: 0.8, borderRadius: "100%" }}>
            <a className='text-black absolute' href='https://www.google.com' target='_blank'>link</a>
          </motion.div>
        </div>
      </div>
      
    </main>
  )
}
