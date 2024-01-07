import { LinkedInLogoIcon, GitHubLogoIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';

export default function Home() {
  return (
    <div className='bg-slate-900 min-h-screen lg:py-0 lg:px-24'>
      <div className='flex flex-col md:flex-row w-full'>
        <header className='w-1/2'>
          <h1>Kevin Shirley</h1>
          <h2>Software Developer</h2>
          <p>I build tools for the web and beyond.</p>
          <ul>
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
        </main>
      </div>
    </div>
  )
}
