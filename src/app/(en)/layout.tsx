import RootDocument from '@/components/root-document';
import { buildMetadata } from '@/data/seo';

export const metadata = buildMetadata('en');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <RootDocument locale='en'>{children}</RootDocument>;
}
