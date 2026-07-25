import { readDb } from '@/lib/db';
import ContactSection from '@/components/ContactSection';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ContactPage() {
  const db = await readDb();
  const { services, settings } = db;

  return (
    <div className="animate-fade-in">
      <ContactSection
        services={services}
        phone={settings.phone}
        whatsapp={settings.whatsapp}
        email={settings.email}
      />
    </div>
  );
}
