import RootDocument from '@/components/root-document';
import { buildMetadata } from '@/data/seo';

export function generateMetadata() {
  return buildMetadata('fr');
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <RootDocument locale='fr'>{children}</RootDocument>;
}
