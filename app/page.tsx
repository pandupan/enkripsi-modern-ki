import About from '@/components/pages/landing-page/About'
import Project from '@/components/pages/landing-page/Project'
import Contact from '@/components/pages/landing-page/Contact'
import Hero from '@/components/pages/landing-page/Hero'
import Proces from '@/components/pages/landing-page/Proces'
import Service from '@/components/pages/landing-page/Service'

export default function Home() {
  return (
      <>      
            <Hero 
                  heading='"Teknologi adalah investasi masa depan, saat orang lain sudah memulainya lebih dulu, maka kita jangan memulainya nanti!"' 
                  message='~Techdigi.id'
            />
            <About/>
            <Service/>
            <Proces/>
            <Project/>
            <Contact/>
      </>
  )
}

