'use server';

import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';
import { resumeData } from '@/lib/resume';

// Initialize lazily to avoid crash if API key is missing during module evaluation
let resendInstance: Resend | null = null;

function getResend() {
  if (!resendInstance) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return null;
    }
    resendInstance = new Resend(apiKey);
  }
  return resendInstance;
}

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { error: 'Please fill in all fields.' };
  }

  const resend = getResend();
  if (!resend) {
    console.error('RESEND_API_KEY is not configured');
    return { error: 'Email service is not configured. Please set RESEND_API_KEY.' };
  }

  try {
    const toEmail = process.env.CONTACT_EMAIL || 'lavjeetkumarrai@gmail.com';
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [toEmail],
      subject: `New message from ${name}`,
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      console.error('Resend error:', error);
      return { error: 'Failed to send message. Please try again later.' };
    }

    return { success: true };
  } catch (err) {
    console.error('Email action error:', err);
    return { error: 'An unexpected error occurred.' };
  }
}
