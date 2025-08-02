import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    const { firstName, lastName, email, message } = data;

    if (!firstName || !lastName || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // TLS
      auth: {
        user: process.env.SMTP_USER, // your gmail address
        pass: process.env.SMTP_PASS, // your app password
      },
    });

    const mailOptions = {
      from: `"Sign Vivid Contact" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL, // your personal email to receive messages
      subject: `New Contact Message from ${firstName} ${lastName}`,
      html: `
        <h3>Contact Message Details</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
