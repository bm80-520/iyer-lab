import { OriginalPage } from '@/components/original-page';
import { pages } from '@/lib/content';

export default function Home() {
  return <OriginalPage page={pages.find(page => page.slug === '')!} />;
}
