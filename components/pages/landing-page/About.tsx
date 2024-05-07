/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { itemShow } from '@/components/lib/animate'
import { Carousel } from 'flowbite-react';
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'


const About = () => {
  return (
    <section id="about" className='relative'>
      <div className='z-10'>
        <div className="absolute top-[10%] -right-[400px] w-[600px] h-1/2 aspect-video bg-colorfull-blue blur-[250px]" />
        <div className="absolute bottom-[10%] left-[-100px] h-[80%] w-[300px] aspect-video bg-colorfull-blue blur-[250px]" />
      </div>
      <div className='flex flex-wrap justify-evenly -mt-[10rem] container mx-auto h-auto'>
        <div className='flex items-center justify-center w-[250px] sm:w-[500px] md:w-1/4 lg:w-1/4 h-[650px] rounded-md sm:mt-[200px]'>
          <Carousel slideInterval={5000} >
            <img
              alt="..."
              src="https://i.ibb.co/B4ZBD45/photography.png"
              className='object-contain rounded-md'
            />
            <img
              alt="..."
              src="https://i.ibb.co/B4ZBD45/photography.png"
              className='object-contain rounded-md'
            />
            <img
              alt="..."
              src="https://i.ibb.co/B4ZBD45/photography.png"
              className='object-contain rounded-md'
            />
            <img
              alt="..."
              src="https://i.ibb.co/B4ZBD45/photography.png"
              className='object-contain rounded-md'
            />
            <img
              alt="..."
              src="https://i.ibb.co/B4ZBD45/photography.png"
              className='object-contain rounded-md'
            />
          </Carousel>
        </div>
      
        <div className="px-4 py-4 sm:py-20 z-50">
          <div className="sm:container overflow-x-hidden">
            <h1 className="ml-2 sm:ml-0 text-xl sm:text-3xl md:text-5xl uppercase flex flex-col lg:max-h-[40px] lg:gap-2 lg:mt-[130px]">
            <motion.span
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='font-semibold'
              >
                Introducing
              </motion.span>
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                About <span className='font-bold text-blue-500'>Us</span>
              </motion.span>
            </h1>
            <motion.div
              variants={itemShow()}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 'all' }}
              className="max-w-[800px] mx-auto p-6 sm:px-8 sm:py-12 rounded-md bg-white border border-gray-600 mt-4 md:[90px] lg:mt-[120px]"
            >
              <h1 className="text-xl sm:text-2xl tracking-widest uppercase font-bold">Tech Digi Indonesia.</h1>
              <p className="sm:text-lg max-w-2xl mt-4 mb-6 text-left sm:text-justify">
                <span className="text-colorfull-blue font-semibold">Techdigi.id</span>  bergerak dibidang jasa berbasis teknologi diantaran pembuatan<span className="text-blue-500 font-semibold">  Creative Content, Branding Marketing, Web developer, Mobile Apps, Fotography, serta Konsulatasi digital.</span> perusahaan yang memiliki visioner yang terfokus pada pengembangan bisnis terintegrasi berbasis teknologi dan informasi
              </p>
              <Disclosure>              
                {({open}) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-base font-medium text-gray-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                      <span>Pengembangan sistem bisnis berbasis teknologi dan informasi.</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-blue-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500">
                    Pengembangan sistem bisnis berbasis teknologi dan informasi merupakan suatu proses yang bertujuan untuk menciptakan, meningkatkan, atau mengintegrasikan teknologi dan informasi ke dalam berbagai aspek bisnis. Hal ini dilakukan dengan tujuan untuk meningkatkan efisiensi operasional, mengoptimalkan kinerja bisnis, dan memberikan nilai tambah bagi pelanggan dan pemangku kepentingan lainnya. 
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 mb-2 text-left text-base font-medium text-gray-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                      <span>Berafiliasi dengan Owner bisnis dalam pembangunan UMKM</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-blue-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500">
                      Berafiliasi dengan pemilik bisnis dalam pembangunan Usaha Mikro, Kecil, dan Menengah (UMKM) merupakan langkah strategis yang dapat memberikan dampak positif bagi perkembangan UMKM. Melalui afiliasi ini, UMKM dapat memanfaatkan pengetahuan, pengalaman, dan sumber daya yang dimiliki oleh pemilik bisnis untuk meningkatkan kualitas dan daya saing usaha mereka. Pemilik bisnis dapat memberikan mentorship, pelatihan, dan dukungan keuangan kepada UMKM untuk membantu mereka mengatasi tantangan dalam mengelola bisnis. Selain itu, akses ke jaringan dan pelanggan yang dimiliki oleh pemilik bisnis dapat membantu UMKM memperluas pangsa pasar dan meningkatkan visibilitas brand mereka.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>              
                {({open}) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-base font-medium text-gray-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                      <span>Pengembangan kualitas SDM dibidang teknologi dan bisnis</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-blue-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500">
                    Pengembangan kualitas Sumber Daya Manusia (SDM) di bidang teknologi dan bisnis merupakan faktor kunci dalam menciptakan tenaga kerja yang kompeten dan siap menghadapi tuntutan era digital dan pasar global yang dinamis. Dalam dunia yang semakin terintegrasi dengan teknologi, investasi pada pengembangan SDM menjadi sangat penting bagi perusahaan maupun individu.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
