'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Modal, Card } from 'flowbite-react';

const Service = () => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  
  // State untuk menentukan apakah Card sedang dalam mode "show more" atau "show less"
  const [showMore, setShowMore] = useState<Array<boolean>>([false, false, false]);

  // Fungsi untuk mengubah status showMore pada indeks tertentu
  const toggleShowMore = (index: number) => {
    const newShowMore = [...showMore];
    newShowMore[index] = !newShowMore[index];
    setShowMore(newShowMore);
  };

  return (
    <section id="services" className='container mx-auto relative w-full h-full'>
      <div className='z-10'>
        <div className="absolute top-[40%] left-[35%] w-[200px] h-1/2 aspect-video bg-colorfull-purple blur-[250px]" />
        <div className="absolute top-[40%] left-0 w-[200px] h-1/2 aspect-video bg-colorfull-purple blur-[250px]" />
        <div className="absolute top-[40%] right-0 w-[200px] h-1/2 aspect-video bg-colorfull-purple blur-[250px]" />
      </div>
      <div className='flex flex-col justify-center items-center w-full h- py-20'>
        <div className="container flex justify-center items-center mb-10">
          <h1 className="text-xl sm:text-3xl md:text-5xl uppercase flex flex-col gap-y-2 text-center">
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='font-semibold'
            >
              Our Algorithm
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

        <div className="flex justify-around flex-col md:flex-row flex-wrap items-center gap-[50px] h-full">
          {[0, 1, 2].map((index) => (
            <div key={index} className={`m-6 sm:m-0 max-w-[300px] max-h-full z-[50] shadow-[0_3px_10px_rgb(0,0,0,0.2)] ${showMore[index] ? 'h-full' : ''}`}>
              <Card
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="/images/secure.jpg"
                className="h-full"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>
                    {index === 0 ? 'Tahap Substitusi (SubBytes)' : index === 1 ? 'Tahap Transposisi (ShiftRows dan MixColumns)' : 'Tahap Putaran Kunci (AddRoundKey)'}
                  </p>
                </h5>
                <p className={`font-normal text-gray-700 dark:text-gray-400 ${showMore[index] ? '' : 'line-clamp-3 lg:line-clamp-5'}`}>
                  {index === 0 ? 'Pada tahap ini, setiap byte dalam blok data diubah menggunakan sebuah tabel substitusi yang disebut S-box. S-box ini adalah tabel 16x16 yang menggantikan setiap byte dengan byte lainnya berdasarkan aturan yang telah ditentukan sebelumnya. Proses substitusi ini membantu dalam menyembunyikan pola-pola dalam data yang dienkripsi, membuatnya sulit untuk dianalisis. Substitusi ini juga memberikan sifat non-linier ke dalam algoritma, yang meningkatkan keamanannya terhadap berbagai jenis serangan.' : index === 1 ? 'Pada tahap ini, blok data diubah secara transposisi atau pergeseran. Ada dua langkah yang terjadi di tahap ini: ShiftRows dan MixColumns. ShiftRows: Setiap baris dalam blok data bergeser ke kiri sejumlah langkah tertentu. Baris pertama tidak bergeser, baris kedua bergeser satu langkah ke kiri, baris ketiga bergeser dua langkah ke kiri, dan baris keempat bergeser tiga langkah ke kiri. Langkah ini membantu dalam merandomisasi data, sehingga pola-pola tertentu sulit untuk dikenali. MixColumns: Kolom-kolom dalam blok data diubah menggunakan operasi perkalian matriks. Setiap kolom dianggap sebagai vektor dalam ruang Galois, dan vektor ini dikalikan dengan matriks tetap tertentu. Proses ini memberikan tambahan konfusius ke dalam algoritma, menyebarkan informasi yang ada di seluruh blok data.' : 'Pada tahap ini, blok data diubah dengan menambahkannya secara bit-by-bit dengan kunci rahasia yang sesuai dengan putaran enkripsi saat ini. Kunci ini telah dijadikan turunan dari kunci enkripsi asli melalui serangkaian langkah pemrosesan tambahan. Penambahan ini dilakukan menggunakan operasi XOR, di mana setiap bit dari blok data di-XOR dengan bit yang sesuai dari kunci putaran. Proses ini memberikan efek yang sangat sensitif terhadap perubahan kunci, sehingga bahkan perubahan kecil pada kunci akan menghasilkan perubahan besar dalam keluaran enkripsi. Setelah putaran ini selesai, prosesnya berulang sejumlah putaran tertentu, tergantung pada panjang kunci yang digunakan. Setiap putaran terdiri dari serangkaian langkah Substitusi, Transposisi, dan Putaran Kunci seperti yang dijelaskan di atas. Proses ini menghasilkan tingkat keamanan yang tinggi, sambil mempertahankan efisiensi operasional yang baik.'}
                </p>
                <button type="button" onClick={() => toggleShowMore(index)} className="place-self-end text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 my-2">
                  {showMore[index] ? 'Show Less' : 'Read More'}
                </button>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
