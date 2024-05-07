'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button, Modal,Card } from 'flowbite-react';
import { useState } from 'react';

const Service = () => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  return (
    <section id="services" className='container mx-auto relative'>
        <div className='z-10'>
          <div className="absolute top-[40%] left-[35%] w-[200px] h-1/2 aspect-video bg-colorfull-purple blur-[250px]" />
          <div className="absolute top-[40%] left-0 w-[200px] h-1/2 aspect-video bg-colorfull-purple blur-[250px]" />
          <div className="absolute top-[40%] right-0 w-[200px] h-1/2 aspect-video bg-colorfull-purple blur-[250px]" />
        </div>
        <div className='flex flex-col justify-center items-center w-full h-auto py-20'>
          <div className="container flex justify-center items-center mb-10">
          <h1 className="text-xl sm:text-3xl md:text-5xl uppercase flex flex-col gap-y-2 text-center">
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='font-semibold'
            >
              Our Service 
            </motion.span>
            <motion.span
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Is All YOU <span className='font-bold text-blue-500'>NEED</span>
            </motion.span>
          </h1>
        </div>

        <div className="flex justify-around flex-col md:flex-row flex-wrap items-center gap-[50px]">
        <Card
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="/images/hero-section1.png"
          className="m-6 sm:m-0 max-w-[300px] max-h-[600px] z-[50] shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>
              Web Developer
            </p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span className='line-clamp-3 lg:line-clamp-5'>
            Techdigi.id adalah sebuah perusahaan yang bergerak di bidang pengembangan web yang inovatif dan kreatif. Kami berkomitmen untuk menyediakan solusi web yang menghadirkan pengalaman pengguna yang menakjubkan dan memberikan nilai tambah bagi klien kami. Dengan tim yang terampil dan berpengalaman, kami mampu merancang dan membangun situs web yang responsif, estetis, dan berperforma tinggi untuk berbagai jenis bisnis dan organisasi. Dari desain visual yang menarik hingga integrasi teknologi canggih, kami mengutamakan kualitas dan kesempurnaan dalam setiap proyek yang kami kerjakan. Bersama kami, Anda dapat mempercayakan kebutuhan web Anda kepada partner yang dapat mewujudkan visi Anda dalam dunia digital dengan hasil yang memukau dan berdaya saing.
            </span>
          </p>
            <button type="button" className="place-self-end text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 my-2">Read More</button>
        </Card>
        <Card
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="/images/hero-section1.png"
          className="m-6 sm:m-0 max-w-[300px] max-h-[600px] z-[50] shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>
              Branding Marketing
            </p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span className='line-clamp-3 lg:line-clamp-5'>
              Dalam dunia bisnis yang kompetitif, brand marketing memegang peran sentral dalam membangun kesan positif dan mengkomunikasikan nilai unik suatu merek kepada konsumen. Brand marketing melibatkan strategi yang cermat untuk mengidentifikasi tujuan dan audiens target, serta menciptakan kampanye kreatif yang mencerminkan identitas merek. Dengan pendekatan yang terencana, brand marketing memperkuat citra merek, menciptakan kepercayaan, dan meningkatkan loyalitas pelanggan. Dalam era digital, brand marketing juga mengoptimalkan kehadiran online merek melalui media sosial, iklan digital, dan konten yang relevan. Dengan fokus yang kuat pada kesan merek yang positif dan pengalaman pelanggan yang luar biasa, brand marketing membuka pintu kesempatan bagi perusahaan untuk tumbuh dan berhasil di pasar yang semakin dinamis.
            </span>
          </p>
            <button type="button" className="place-self-end text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 my-2">Read More</button>
        </Card>
        <Card
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="/images/hero-section1.png"
          className="m-6 sm:m-0 max-w-[300px] max-h-[600px] z-[50] shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>
              Technology and Networking
            </p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span className='line-clamp-3 lg:line-clamp-4'>
            Dalam era digital yang terus berkembang, teknologi dan networking memainkan peran penting dalam mendukung konektivitas dan efisiensi operasional. Bidang teknologi dan networking melibatkan studi dan implementasi infrastruktur teknologi, perangkat lunak, dan layanan jaringan yang mendukung sistem komunikasi dan pertukaran data. Para ahli dalam bidang ini bertanggung jawab untuk merancang, membangun, mengkonfigurasi, dan mengelola jaringan komputer serta infrastruktur server. Dengan penguasaan teknologi terkini, mereka memastikan keamanan data dan konektivitas yang stabil, sehingga memungkinkan suatu organisasi untuk beroperasi dengan efisien dan produktif. Melalui teknologi dan networking yang handal, dunia digital menjadi lebih terhubung dan masyarakat dapat saling berinteraksi dengan lebih mudah dan efektif.
            </span>
          </p>
            <button type="button" className="place-self-end text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 my-2">Read More</button>
        </Card>

        </div>


      </div>
    </section>

  )
}

export default Service
