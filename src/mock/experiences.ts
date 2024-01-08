export interface ExperienceType {
  id: number;
  from: string;
  to: string;
  role: string;
  company: string;
  jobType: string;
  tasks: string[],
  skills?: string[],
}

export const experiences: ExperienceType[] = [
  {
    id: 1,
    from: 'Nov. 2022',
    to: 'Present',
    role: 'Senior Software Engineer',
    company: 'Morningstar',
    jobType: 'Contract',
    tasks: [
      'Develop and maintain web applications using React, Vue.js, and Node.js.',
      'Design and implement scalable AWS infrastructures for applications.',
      'Build and manage CI/CD pipelines using AWS services.',
      'Mentor junior engineers and conduct code reviews.',
      'Optimize application performance and troubleshoot issues.',
      'Collaborate with cross-functional teams and stakeholders.',
    ],
    skills: [
      'React',
      'Vue',
      'NodeJs',
      'AWS',
      'CI/CD',
      'Javascript',
      'Typescript',
      'Testing',
    ],
  },
  {
    id: 2,
    from: 'June 2021',
    to: 'Nov. 2022',
    role: 'Full Stack Developer',
    company: 'Desjardins',
    jobType: 'Contract',
    tasks: [
      'Develop new components and new functionalities for their internal Design System',
      'Create reusable code and libraries for future use',
      'Ensure technical feasibility of UI/UX designs',
      'Ensure user technical accessibility in UI/UX designs',
      'Optimize components for maximum speed and scalability',
      'Collaborate with other team members and stakeholders',
      'Deploy Design System source code to servers using tools such as Concourse and more',
      'Stencil, JavaScript, Angular, React, TypeScript, NodeJS',
      'Manage builds, testing, deployments with CI/CD pipelines',
    ],
    skills: [
      'React',
      'Vue',
      'NodeJs',
      'AWS',
      'CI/CD',
      'Javascript',
      'Typescript',
      'Stencil',
      'Angular',
      'Testing',
    ],
  },
];
