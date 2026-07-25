import { NextResponse } from 'next/server';
import {
  readDb,
  writeDb,
  updateSettings,
  saveService,
  deleteService,
  savePortfolioItem,
  deletePortfolioItem,
  saveTestimonial,
  deleteTestimonial,
  saveFAQ,
  deleteFAQ,
  saveBlog,
  deleteBlog,
  updateEnquiryStatus,
  deleteEnquiry
} from '@/lib/db';

const PASSCODE = process.env.ADMIN_PASSCODE || 'royalvista2026';

function verifyAuth(request: Request): boolean {
  const passcode = request.headers.get('x-admin-passcode');
  return passcode === PASSCODE;
}

export async function GET(request: Request) {
  if (!verifyAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized. Invalid passcode.' }, { status: 401 });
  }

  try {
    const db = await readDb();
    return NextResponse.json({ success: true, db });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to read database: ' + error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!verifyAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized. Invalid passcode.' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { action, payload } = body;

    if (!action) {
      return NextResponse.json({ error: 'Missing action field' }, { status: 400 });
    }

    let result: any;

    switch (action) {
      case 'updateSettings':
        result = await updateSettings(payload);
        break;
      case 'saveService':
        result = await saveService(payload);
        break;
      case 'deleteService':
        result = await deleteService(payload);
        break;
      case 'savePortfolio':
        result = await savePortfolioItem(payload);
        break;
      case 'deletePortfolio':
        result = await deletePortfolioItem(payload);
        break;
      case 'saveTestimonial':
        result = await saveTestimonial(payload);
        break;
      case 'deleteTestimonial':
        result = await deleteTestimonial(payload);
        break;
      case 'saveFAQ':
        result = await saveFAQ(payload);
        break;
      case 'deleteFAQ':
        result = await deleteFAQ(payload);
        break;
      case 'saveBlog':
        result = await saveBlog(payload);
        break;
      case 'deleteBlog':
        result = await deleteBlog(payload);
        break;
      case 'updateEnquiryStatus':
        result = await updateEnquiryStatus(payload.id, payload.status);
        break;
      case 'deleteEnquiry':
        result = await deleteEnquiry(payload);
        break;
      default:
        return NextResponse.json({ error: `Invalid action: ${action}` }, { status: 400 });
    }

    return NextResponse.json({ success: true, result });
  } catch (error: any) {
    console.error(`Admin API error [${error.message}]:`, error);
    return NextResponse.json({ error: 'Admin action execution failed: ' + error.message }, { status: 500 });
  }
}
