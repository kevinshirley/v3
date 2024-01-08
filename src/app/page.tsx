import { LinkedInLogoIcon, GitHubLogoIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';
import { Badge } from '@radix-ui/themes';
import CustomCursor from '@/components/custom-cursor';
import { experiences, ExperienceType } from '@/mock/experiences';

export default function Home() {
  return (
    <div className='relative'>
      <div className='bg-slate-900 lg:py-0 lg:px-24'>
        <div className='flex flex-col lg:flex-row max-w-screen-xl mx-auto'>
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
            <section className='mb-36'>
              <div className='hidden'>
                <h2 className='text-slate-200'>About</h2>
              </div>
              <div>
                <p className='mb-4 text-slate-400'>Back in 2015, I decided to learn SEO, got introduced to HTML tags, got very curious about it and dived head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for a travel company, an e-commerce brand and financial institutions.</p>
                <p className='mb-4 text-slate-400'>My main focus these days is building products and leading projects for fortune 500 enterprises. In my free time, I build software products for start-ups as a freelance.</p>
                <p className='mb-4 text-slate-400'>When I’m not at the computer, I’m usually at the gym, hanging out with my wife and my son, or looking for my next travel destination.</p>
              </div>
            </section>
            <section className='mt-10 mb-10'>
              <div className='hidden'>
                <h2 className='text-slate-400'>Experience</h2>
              </div>
              <div>
                {experiences.map((experience: ExperienceType) => (
                  <div key={experience.id} className='mb-8 flex flex-between gap-x-3'>
                    <div className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'>
                      {experience.from} ⎯ {experience.to}
                    </div>
                    <div>
                      <h2 className='text-slate-200 font-bold'>{experience.role} • {experience.company}</h2>
                      <h2 className='text-slate-500'>{experience.jobType}</h2>
                      <ul className='my-2'>
                        {experience.tasks.map((task: string, index: number) => (
                          <li key={index} className='text-slate-400 flex items-center py-2'>
                            <span className='mr-4'>⎯</span>
                            <span className='text-xs tracking-widest text-slate-400'>{task}</span>
                          </li>
                        ))}
                      </ul>
                      <ul className='flex flex-wrap'>
                        {experience.skills?.map((skill: string, index: number) => (
                          <li key={index} className='text-slate-400 flex items-center py-2'>
                            <Badge className='text-xs tracking-widest text-slate-400 mr-4' variant="solid" radius="full" color="cyan">
                              {skill}
                            </Badge>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section className='mt-10 mb-10'>
              <div className='hidden'>
                <h2 className='text-slate-400'>Projects</h2>
              </div>
            </section>
          </main>
        </div>
      </div>
      <CustomCursor />
    </div>
  )
}
