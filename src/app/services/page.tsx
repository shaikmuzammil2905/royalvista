import { readDb } from '@/lib/db';
import ServicesSection from '@/components/ServicesSection';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ServicesPage() {
  const db = await readDb();
  const { services } = db;

  return (
    <div className="animate-fade-in">
      <ServicesSection services={services} />
    </div>
  );
}
