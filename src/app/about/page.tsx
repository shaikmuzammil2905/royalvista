import { readDb } from '@/lib/db';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function AboutPage() {
  const db = await readDb();
  const { settings } = db;

  return (
    <div className="animate-fade-in">
      <AboutSection settings={settings} />
      <SkillsSection />
    </div>
  );
}
