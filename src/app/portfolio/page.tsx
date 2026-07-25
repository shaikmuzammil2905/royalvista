import { readDb } from '@/lib/db';
import PortfolioGrid from '@/components/PortfolioGrid';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function PortfolioPage() {
  const db = await readDb();
  const { portfolio } = db;

  return (
    <div className="animate-fade-in">
      <PortfolioGrid portfolio={portfolio} />
    </div>
  );
}
