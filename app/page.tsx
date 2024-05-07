import About from '@/components/pages/landing-page/About'
import Project from '@/components/pages/landing-page/Project'
import Contact from '@/components/pages/landing-page/Contact'
import Hero from '@/components/pages/landing-page/Hero'

import Service from '@/components/pages/landing-page/Service'

export default function Home() {
  return (
      <>      
            <Hero 
                  heading='"Seiring perkemabangan teknologi keamanan cyber merupakan tantangan kita semua, ayo lindungi data kita bersama!! "' 
                  message='~AES Project'
            />
            <About/>
            <Service/>
            <Project/>
            <Contact/>
      </>
  )
}

