import Home from '@/components/home';

// Regenerate daily so the years of experience stay current without a deploy.
export const revalidate = 86400;

export default function Page() {
  return <Home locale='en' />;
}
