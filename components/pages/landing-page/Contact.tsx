'use client'

import React, {useState, ChangeEvent} from 'react'
import { motion } from 'framer-motion'
import { containerShow, itemShow } from '@/components/lib/animate'
import Link from 'next/link'
import { contacts } from '@/constants'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [subjectError, setSubjectError] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(`${name}: ${value}`);
  };

  const handleEmailClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Check for validations
    if (!validateName(formData.name)) {
      setNameError('Name should have at least 2 words.');
      return;
    } else {
      setNameError(null);
    }

    if (!validateEmail(formData.email)) {
      setEmailError('Invalid email address.');
      return;
    } else {
      setEmailError(null);
    }

    if (!validateSubject(formData.subject)) {
      setSubjectError('Subject should have at least 2 words.');
      return;
    } else {
      setSubjectError(null);
    }

    if (!validateMessage(formData.message)) {
      setMessageError('Message should have at least 5 words.');
      return;
    } else {
      setMessageError(null);
    }

    const { name, email, subject, message } = formData;
    const messageText = `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`;

    const mailtoLink = `mailto:227006017@student.unsil.ac.id?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(messageText)}`;

    window.location.href = mailtoLink;

    // Show success toast when the email is sent successfully
    toast.success('Email sent successfully!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

    // Reset form after successful email send
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleWhatsAppClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Check for validations
    if (!validateName(formData.name)) {
      setNameError('Name should have at least 2 words.');
      return;
    } else {
      setNameError(null);
    }

    if (!validateEmail(formData.email)) {
      setEmailError('Invalid email address.');
      return;
    } else {
      setEmailError(null);
    }

    if (!validateSubject(formData.subject)) {
      setSubjectError('Subject should have at least 2 words.');
      return;
    } else {
      setSubjectError(null);
    }

    if (!validateMessage(formData.message)) {
      setMessageError('Message should have at least 5 words.');
      return;
    } else {
      setMessageError(null);
    }

    const { name, email, subject, message } = formData;

    const messageText = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

    const whatsappLink = `https://wa.me/+6285870980885?text=${encodeURIComponent(messageText)}`;

    window.open(whatsappLink, '_blank');

    // Show success toast when the WhatsApp message is sent successfully
    toast.success('Message sent via WhatsApp!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

    // Reset form after successful WhatsApp message send
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  // Validation functions
  const validateName = (name: string) => {
    return name.trim().split(' ').filter(Boolean).length >= 2;
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateSubject = (subject: string) => {
    return subject.trim().split(' ').filter(Boolean).length >= 2;
  };

  const validateMessage = (message: string) => {
    return message.trim().split(' ').filter(Boolean).length >= 5;
  };

  return (
    <section id="contact" className='relative'>
        <div className='z-10'>
          <div className="absolute top-[10%] -left-[400px] w-[600px] h-1/2 aspect-video bg-colorfull-blue blur-[250px]" />
          <div className="absolute bottom-[10%] right-[-100px] h-1/2 w-[300px] aspect-video bg-colorfull-blue blur-[250px]" />
      </div>
      <div className="container flex items-center justify-center w-full min-h-[500px] py-20 mx-auto">
        <div className="px-4 container py-20 z-[50]">
          <div className="flex flex-col lg:flex-row items-center sm:px-10 gap-x-4 gap-y-10 ">
            <div className="lg:basis-[50%] font-semibold sm:px-4 lg:px-0">
            <h1 className="text-3xl sm:text-3xl md:text-5xl uppercase flex flex-col lg:max-h-[150px] gap-2 mb-4 sm:mb-8">
              <motion.span
                className='font-semibold'
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Have
              </motion.span>
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className='font-bold text-blue-500'>Any Question?</span>
              </motion.span>
            </h1>
              <h4 className="text-lg text-blue-500">Get In Touch</h4>
              <h2 className="text-4xl sm:text-5xl">Let&apos;s Encrypt Together!</h2>
              <motion.div
                variants={containerShow}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 'all' }}
                className="mt-5 sm:mt-10 grid grid-cols-1 gap-4"
                >
                {contacts.map((item) => {
                  if (item?.link) return (
                    <motion.div key={item.id} variants={itemShow()}>
                      <Link target="_blank" rel="noopener noreferrer" href={item.link} className="flex items-center font-medium gap-4 text-colorfull-black">
                        <item.Icon fontSize={24} />
                        <span className="text-lg sm:text-base text-black underline underline-offset-4">{item.value}</span>
                      </Link>
                    </motion.div>
                  );
                  
                  return (
                    <motion.div variants={itemShow()} key={item.id} className="flex items-center font-medium gap-4 text-black">
                      <item.Icon fontSize={24} />
                      <span className="text-black text-lg sm:text-base">{item.value}</span>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
            <div className="lg:basis-[50%]">
            <form>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    className="w-full bg-transparent rounded-md border-2 border-gray-800 px-4 py-2 outline-none placeholder:text-black"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    name="name"
                  />
                  {nameError && <span className="text-red-500">{nameError}</span>}
                </div>
                <div>
                  <input
                    type="email"
                    className="w-full bg-transparent rounded-md border-2 border-gray-800 px-4 py-2 outline-none placeholder:text-black"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    name="email"
                  />
                  {emailError && <span className="text-red-500">{emailError}</span>}
                </div>
                <div className="col-span-2">
                  <input
                    type="text"
                    className="w-full bg-transparent rounded-md border-2 border-gray-800 px-4 py-2 outline-none placeholder:text-black"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    name="subject"
                  />
                  {subjectError && <span className="text-red-500">{subjectError}</span>}
                </div>
                <div className="col-span-2">
                  <textarea
                    className="w-full h-[200px] sm:h-[250px] bg-transparent rounded-md border-2 border-gray-800 px-4 py-2 outline-none placeholder:text-black resize-none"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    name="message"
                  />
                  {messageError && <span className="text-red-500">{messageError}</span>}
                </div>
                <div className="col-span-2">
                  <button className="w-full px-10 py-4 rounded-full bg-colorfull-blue text-white" onClick={handleEmailClick}>
                    Contact Us Via Email
                  </button>
                  <button className="w-full px-10 py-4 rounded-full bg-colorfull-green text-white my-2 " onClick={handleWhatsAppClick}>
                    Contact Us Via Whatsapp
                  </button>
                </div>
              </div>
            </form>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact