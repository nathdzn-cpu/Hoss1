import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

type FormValue = string | number | boolean | undefined | null;
type FormData = Record<string, FormValue>;

// Strip CR/LF to prevent email header injection and normalise whitespace.
function sanitize(input: FormValue): string {
  if (input === undefined || input === null) return '';
  return String(input).replace(/[\r\n]+/g, ' ').trim();
}

function formatObjectForEmail(data: FormData): string {
  const { formType: _formType, ...rest } = data;
  return Object.entries(rest)
    .map(([key, value]) => {
      const label = key.charAt(0).toUpperCase() + key.slice(1);
      return `${label}: ${sanitize(value) || 'N/A'}`;
    })
    .join('\n');
}

function getAllowedOrigins(): string[] {
  return (process.env.ALLOWED_ORIGINS || '')
    .split(',')
    .map((o) => o.trim())
    .filter(Boolean);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const origin = (req.headers.origin as string) || '';
  const allowedOrigins = getAllowedOrigins();
  const isAllowedOrigin = allowedOrigins.length === 0 || allowedOrigins.includes(origin);

  if (isAllowedOrigin && origin) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }

  if (req.method === 'OPTIONS') {
    return res.status(isAllowedOrigin ? 204 : 403).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  if (!isAllowedOrigin) {
    return res.status(403).json({ success: false, error: 'Origin not allowed' });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) {
    console.error('SMTP configuration missing');
    return res.status(500).json({ success: false, error: 'Email service not configured' });
  }

  const { formType, ...formData } = (req.body ?? {}) as FormData & { formType?: string };

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT || '465', 10),
      secure: true,
      auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
    });

    let subject = '';
    let text = '';

    if (formType === 'contact') {
      const formSubject = sanitize(formData.subject);
      subject = `New Contact Form Submission: ${formSubject || 'General Inquiry'}`;
      text = `You have a new message from your website's contact form.\n\n---\n\n${formatObjectForEmail(formData)}`;
    } else if (formType === 'demo') {
      const company = sanitize(formData.company);
      subject = `New Demo Request from ${company || 'Unknown Company'}`;
      text = `You have a new demo request.\n\n---\n\n${formatObjectForEmail(formData)}`;
    } else {
      return res.status(400).json({ success: false, error: 'Invalid or missing formType in request body' });
    }

    await transporter.sendMail({
      from: `"HOSS Website" <${SMTP_USER}>`,
      to: 'info@thehoss.co.uk',
      subject,
      text,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Nodemailer Error:', error);
    return res.status(500).json({ success: false, error: 'Failed to send email' });
  }
}
