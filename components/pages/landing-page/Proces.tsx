'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button, Modal,Card } from 'flowbite-react';
import { useState } from 'react';
import {TbTargetArrow} from 'react-icons/tb'
import {HiMiniTrophy} from 'react-icons/hi2'
import {SlCalender} from 'react-icons/sl'

function Proces() {
  return (
    <section id="process" className='container mx-auto relative'>
      <div className='z-10'>
        <div className="absolute top-[30%] right-[30%] w-[600px] h-1/2 aspect-video bg-colorfull-blue blur-[250px] " />
        <div className="absolute bottom-[5%] left-[0%] w-[300px] h-1/2 aspect-video bg-colorfull-blue blur-[250px] " />
        <div className="absolute top-[5%] right-[0%] w-[300px] h-1/2 aspect-video bg-colorfull-blue blur-[250px] " />
      </div>
      <div className='flex flex-col justify-center items-center w-full h-auto py-20'>
        <div className="container flex justify-center items-center mb-2">
          <h1 className="text-xl sm:text-3xl md:text-5xl uppercase flex flex-col gap-y-2 z-[50]">
            <motion.span
              className='font-semibold'
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Procces 
            </motion.span>
            <motion.span
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              With <span className='font-bold text-blue-500'>You?</span>
            </motion.span>
          </h1>
        </div>

        <div className="container flex flex-col w-full h-auto sm:h-[600px] md:flex-row">
          
          <div className="flex justify-end items-end mx-auto my-4">
            <Card
              className="m-6 sm:m-2 max-w-sm z-[50] shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            >
              <TbTargetArrow size={50}/>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <span>
                  Making Project
                </span>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <span>
                Tdi membuat program dan
                    konten bersama dengan
                    mitra bisnis. Program yang
                    ditawarkan menyangkut
                    dengan teknologi dan
                    marketing online. Program
                    bisa diambil dari project
                    yang tersedia di atau
                    melakukan penyesuaian
                    dengan kebutuhan mitra
                    bisnis.
                </span>
              </p>
            </Card>
          </div>
          <div className="flex justify-center items-center mx-auto my-4">
            <Card
              className="m-6 sm:m-2 max-w-sm z-[50] shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            >
              <HiMiniTrophy size={50}/>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <span>
                  Management Project
                </span>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <span>
                melakukan analisis bisnis
                model serta melakukan
                management process
                berupa optimalisasi project
                time line, untuk
                menghasilkan output berupa
                tata kelola management,
                tata kelola basis data dan
                branding product/company.
                </span>
              </p>
            </Card>
          </div>
          <div className="flex justify-start items-start mx-auto my-4">
            <Card
              className="m-6 sm:m-2 max-w-sm z-[50] shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            >
              <SlCalender size={50}/>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <span>
                  Monitoring Project
                </span>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <span>
                Monitoring
                dilakukan agar kami
                bisa melakukan Pengawasan
                secara umum sebagai bahan
                analisis dan perbaikan/saran
                pada system yang ada pada
                mitra kerja.
                </span>
              </p>
            </Card>
          </div>
    

        </div>

      </div>
    </section>
  )
}

export default Proces