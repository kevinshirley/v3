import { LinkedInLogoIcon, GitHubLogoIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';
import CustomCursor from '@/components/custom-cursor'

export default function Home() {
  return (
    <>
      <div className='bg-slate-900 lg:py-0 lg:px-24 relative'>
        <div className='flex flex-col lg:flex-row max-w-screen-xl mx-auto z-30'>
          <header className='w-1/2 lg:sticky top-0 lg:max-h-screen lg:py-24 flex justify-between flex-col'>
            <div>
              <div>
                <h1 className='text-5xl text-slate-200 font-bold'>Kevin Shirley</h1>
                <h2 className='text-slate-200 font-medium mt-3 sm:text-xl'>Software Developer</h2>
                <p className='text-slate-400 mt-4 max-w-xs'>Building intuitive web solutions, coding the future of user-centric experiences for a connected world.</p>
                <ul className='lg:hidden'>
                  <li className='text-slate-200'>
                    <LinkedInLogoIcon />
                  </li>
                  <li className='text-slate-200'>
                    <GitHubLogoIcon />
                  </li>
                  <li className='text-slate-200'>
                    <EnvelopeClosedIcon />
                  </li>
                </ul>
              </div>
              <nav className='mt-10 ml-1'>
                <ul className='w-max'>
                  <li className='list-margin-start-removed nav-item-hover'>
                    <a href='/' className='flex items-center py-3'>
                      <span className='nav-indicator nav-indicator-selected mr-4'></span>
                      <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500'>About</span>
                    </a>
                  </li>
                  <li className='list-margin-start-removed nav-item-hover'>
                    <a href='/' className='flex items-center py-3'>
                      <span className='nav-indicator nav-indicator-selected mr-4'></span>
                      <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500'>Experience</span>
                    </a>
                  </li>
                  <li className='list-margin-start-removed nav-item-hover'>
                    <a href='/' className='flex items-center py-3'>
                      <span className='nav-indicator nav-indicator-selected mr-4'></span>
                      <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500'>Projects</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <ul className='flex justify-start gap-x-6'>
                <li className='text-slate-200'>
                  <LinkedInLogoIcon className='w-6 h-6 text-slate-400' />
                </li>
                <li className='text-slate-200'>
                  <GitHubLogoIcon className='w-6 h-6 text-slate-400' />
                </li>
                <li className='text-slate-200'>
                  <EnvelopeClosedIcon className='w-6 h-6 text-slate-400' />
                </li>
              </ul>
            </div>
          </header>
          <main className='w-1/2 lg:pt-24'>
            <section>
              <div className='hidden'>
                <h2 className='text-slate-200'>About</h2>
              </div>
            </section>
            <section>
              <div className='hidden'>
                <h2 className='text-slate-400'>Experience</h2>
              </div>
            </section>
            <section>
              <div className='hidden'>
                <h2 className='text-slate-400'>Projects</h2>
              </div>
            </section>
            <section className='mt-10 mb-10 text-slate-400'>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </section>
            <section className='mt-10 mb-10 text-slate-400'>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </section>
            <section className='mt-10 mb-10 text-slate-400'>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </section>
            <section className='mt-10 mb-10 text-slate-400'>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </section>
            <section className='mt-10 mb-10 text-slate-400'>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </section>
            <section className='mt-10 mb-10 text-slate-400'>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </section>
          </main>
        </div>
      </div>
      <CustomCursor />
    </>
  )
}
