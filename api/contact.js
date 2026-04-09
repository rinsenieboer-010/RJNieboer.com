import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message, site } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Vereiste velden ontbreken' });
  }

  try {
    await resend.emails.send({
      from: 'support@rjnieboer.com',
      to: 'hello@rjnieboer.com',
      replyTo: email,
      subject: `[${site}] ${subject || 'Supportverzoek'}`,
      html: `
        <p><strong>Van:</strong> ${name} (${email})</p>
        <p><strong>Site:</strong> ${site}</p>
        <p><strong>Onderwerp:</strong> ${subject || '—'}</p>
        <hr />
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Versturen mislukt' });
  }
}
