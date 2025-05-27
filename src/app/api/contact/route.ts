
import { type NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';
import { contactFormSchema, type ContactFormState, type ContactFormData } from '@/lib/actions';

// SMTP test credentials (hardcoded for testing purposes - should be env vars in production)
const TEST_SMTP = {
  host: 'smtp.mail.ovh.net',
  port: 465,
  secure: true, // use SSL
  user: 'app@totalhse.com', // Sender email address
  pass: 'trabajosenaltura23', // Sender email password
  from: 'app@totalhse.com',  // This should match the user
};

const recipientEmail = "app@totalhse.com"; // The email address that will receive the form submissions

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedFields = contactFormSchema.safeParse(body);

    if (!validatedFields.success) {
      const response: ContactFormState = {
        message: "Form validation failed. Please check the fields.",
        errors: validatedFields.error.flatten().fieldErrors,
        status: "error",
      };
      return NextResponse.json(response, { status: 400 });
    }

    const { name, email, phone, course, message } = validatedFields.data;

    const transporter = nodemailer.createTransport({
      host: TEST_SMTP.host,
      port: TEST_SMTP.port,
      secure: TEST_SMTP.secure,
      auth: {
        user: TEST_SMTP.user,
        pass: TEST_SMTP.pass,
      },
    });

    await transporter.sendMail({
      from: `\"${name}\" <${TEST_SMTP.from}>`, // Display name for the sender
      to: recipientEmail,
      replyTo: email, // So replies go to the form submitter's email
      subject: `New GWO Course Inquiry from ${name} (via API)`,
      html: `
        <h2>New Contact Form Submission (via API)</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${course ? `<p><strong>Course of Interest:</strong> ${course}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });
    
    console.log("Email sent successfully via SMTP test server (API).");
    const successResponse: ContactFormState = {
      message: "Thank you! Your message has been sent successfully.",
      status: "success",
    };
    return NextResponse.json(successResponse, { status: 200 });

  } catch (error) {
    console.error("Error processing contact form via API:", error);
    const errorResponse: ContactFormState = {
      message: "Failed to send message due to a server error. Please try again later.",
      status: "error",
      errors: { _form: ["Server error during API processing."] }
    };
    return NextResponse.json(errorResponse, { status: 500 });
  }
}
