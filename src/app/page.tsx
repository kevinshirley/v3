import { LinkedInLogoIcon, GitHubLogoIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';

export default function Home() {
  return (
    <div className='bg-slate-900 lg:py-0 lg:px-24 min-h-screen'>
      <div className='flex flex-col lg:flex-row max-w-screen-xl mx-auto'>
        <header className='w-1/2 lg:sticky top-0 lg:max-h-screen'>
          <div>
            <h1 className='text-5xl'>Kevin Shirley</h1>
            <h2>Software Developer</h2>
            <p>I build tools for the web and beyond.</p>
            <ul className='lg:hidden'>
              <li>
                <LinkedInLogoIcon />
              </li>
              <li>
                <GitHubLogoIcon />
              </li>
              <li>
                <EnvelopeClosedIcon />
              </li>
            </ul>
            <nav className=''>
              <ul>
                <li>
                  <span className="nav-indicator"></span>
                  <span>About</span>
                </li>
                <li>
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span>Experience</span>
                </li>
                <li>
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span>Projects</span>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className='w-1/2'>
          <section>
            <h2>About</h2>
          </section>
          <section>
            <h2>Experience</h2>
          </section>
          <section>
            <h2>Projects</h2>
          </section>
          <section className='mt-10 mb-10'>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </section>
          <section className='mt-10 mb-10'>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </section>
          <section className='mt-10 mb-10'>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </section>
          <section className='mt-10 mb-10'>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </section>
          <section className='mt-10 mb-10'>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </section>
          <section className='mt-10 mb-10'>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </section>
        </main>
      </div>
    </div>
  )
}
