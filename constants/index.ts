import { BiLogoInstagramAlt } from "react-icons/bi";
import { HiPhone } from "react-icons/hi";
import { MdEmail, MdLocationPin } from "react-icons/md";


export const contacts = [
  {
    id: 'email',
    Icon: MdEmail,
    value: '227006017@student.unsil.ac.id'
  },
  {
    id: 'phone',
    Icon: HiPhone,
    value: '0858-7098-0885'
  },
  {
    id: 'address',
    Icon: MdLocationPin,
    value: 'Jl Cikoneng, RT/RW 004/003, sukamajukaler, indihiang'
  },
  {
    id: 'instagram',
    Icon: BiLogoInstagramAlt,
    value: '@techdigi.id',
    link: 'https://www.instagram.com/pandupan__'
  },
];

export const navigation = [
  {
    id: 'home',
    href: '#hero',
    title: 'Home'
  },
  {
    id: 'about',
    href: '#about',
    title: 'About Us'
  },
  {
    id: 'services',
    href: '#services',
    title: 'Services'
  },
  {
    id: 'process',
    href: '#process',
    title: 'Process'
  },
  {
    id: 'projects',
    href: '#projects',
    title: 'Projects'
  },
  {
    id: 'contact',
    href: '#contact',
    title: 'Contact Me'
  },
]

export const works = [
  {
    id: 'work-1',
    imageUrl: '/images/works/app-development.webp',
    type: 'App Development',
    title: 'Title'
  },
  {
    id: 'work-2',
    imageUrl: '/images/works/digital-marketing-seo.jpg',
    type: 'Digital Marketing & SEO',
    title: 'Title'
  },
  {
    id: 'work-3',
    imageUrl: '/images/works/graphic-design.jpg',
    type: 'Graphic Design',
    title: 'Title'
  },
  {
    id: 'work-4',
    imageUrl: '/images/works/social-media.jpg',
    type: 'Soc-Med Management',
    title: 'Title'
  },
  {
    id: 'work-5',
    imageUrl: '/images/works/video-editing.webp',
    type: 'Video Editing',
    title: 'Title'
  },
  {
    id: 'work-6',
    imageUrl: '/images/works/web-design.png',
    type: 'Web Design',
    title: 'Title'
  },
];