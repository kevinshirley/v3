import CustomCursor from '@/components/custom-cursor';
import Header from '@/components/header';
import About from '@/components/about';
import Experiences from '@/components/experiences';
import Projects from '@/components/projects';

export default function Home() {
  return (
    <div className='relative'>
      <div className='bg-slate-900 lg:py-0 lg:px-24'>
        <div className='flex flex-col lg:flex-row max-w-screen-xl mx-auto'>
          <Header />
          <main className='w-1/2 lg:pt-24'>
            <About />
            <Experiences />
            <Projects />
          </main>
        </div>
      </div>
      <CustomCursor />
    </div>
  )
}
