import { NextRequest } from "next/server";



// eslint-disable-next-line @typescript-eslint/no-require-imports
const nodemailer = require('nodemailer')

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log(data)


  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: false,

    auth: {
      user: 'ctrldevelopers4@gmail.com',
      pass: 'syag sdgz mqij egsy'
    }
  });

  const mailOptions = {
    from: data.email,
    to: 'ctrldevelopers04@gmail.com',
    subject: `Customer contact: ${data.reason}`,
    text: JSON.stringify(data)
  };


  const mailOptions2 = {
    from: 'ctrldevelopers4@gmail.com',
    to: data.email,
    subject: "Confirmation of Contact Information Receipt - Ctrl Developers",
    text: `Dear ${data.name},

Thank you for submitting your contact information to Ctrl Developer. We appreciate you taking the time to reach out and share your interest in our website services.

We wanted to let you know that we have received your information and have added it to our database. Someone from our team will be in touch with you shortly to discuss how we can best assist you with your web development needs.

In the meantime, please don't hesitate to reach out if you have any other questions. We are always happy to hear from prospective clients and help however we can.

Thank you again for considering Ctrl Developers. We look forward to speaking with you soon!

Sincerely,
Ctrl Developers
    `
}


  try {
    const info = await transporter.sendMail(mailOptions);
    const info2 = await transporter.sendMail(mailOptions2); 
    console.log('Email sent: ' + info.response + info2.response);
    return new Response('Success', { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response('Error', { status: 500 });
  }
}