import { readDb } from '@/lib/db';
import FAQAccordion from '@/components/FAQAccordion';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function FAQPage() {
  const db = await readDb();
  const { faqs } = db;

  return (
    <div className="animate-fade-in">
      <FAQAccordion faqs={faqs} />
    </div>
  );
}
