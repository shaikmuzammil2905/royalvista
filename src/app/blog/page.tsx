import { readDb } from '@/lib/db';
import BlogSection from '@/components/BlogSection';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function BlogPage() {
  const db = await readDb();
  const { blogs } = db;

  return (
    <div className="animate-fade-in">
      <BlogSection blogs={blogs} />
    </div>
  );
}
