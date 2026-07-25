import { readDb } from '@/lib/db';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function TestimonialsPage() {
  const db = await readDb();
  const { testimonials } = db;

  return (
    <div className="animate-fade-in">
      <TestimonialsCarousel testimonials={testimonials} />
    </div>
  );
}
