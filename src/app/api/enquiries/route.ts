import { NextResponse } from 'next/server';
import { addEnquiry } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate inputs
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and Phone number are required fields' },
        { status: 400 }
      );
    }

    const newEnquiry = await addEnquiry({
      name,
      email: email || '',
      phone,
      service: service || 'General Inquiry',
      message: message || ''
    });

    // Console notification for the server logs
    console.log(`[LEAD RECEIVED] ${newEnquiry.name} (${newEnquiry.phone}) interested in ${newEnquiry.service}`);

    return NextResponse.json(
      { success: true, enquiry: newEnquiry },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error saving lead:', error);
    return NextResponse.json(
      { error: 'Internal Server Error saving enquiry: ' + error.message },
      { status: 500 }
    );
  }
}
