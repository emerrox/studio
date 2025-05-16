"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

// SMTP test credentials (hardcoded for testing purposes)
const TEST_SMTP = {
  host: 'smtp.mail.ovh.net',
  port: 465,
  secure: true,
  user: 'app@totalhse.com',
  pass: 'trabajosenaltura23',
  from: 'app@totalhse.com',
};

// Define the schema for form validation from the server-side
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional().or(z.literal('')), // Allow empty string or make it truly optional
  course: z.string().optional().or(z.literal('')),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  status: "success" | "error" | "idle";
  errors?: Partial<Record<keyof z.infer<typeof contactFormSchema> | "_form", string[]>> | null;
  fieldValues?: z.infer<typeof contactFormSchema>;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") || undefined,
    course: formData.get("course") || undefined,
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors;
    return {
      message: "Form validation failed. Please check the fields below.",
      status: "error",
      errors: { ...fieldErrors, _form: ["Validation failed"] },
      fieldValues: {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string | undefined,
        course: formData.get("course") as string | undefined,
        message: formData.get("message") as string,
      }
    };
  }

  const { name, email, phone, course, message } = validatedFields.data;
  const recipientEmail = "app@totalhse.com";

  // Configure SMTP transporter using test data
  const transporter = nodemailer.createTransport({
    host: TEST_SMTP.host,
    port: TEST_SMTP.port,
    secure: TEST_SMTP.secure,
    auth: {
      user: TEST_SMTP.user,
      pass: TEST_SMTP.pass,
    },
  });

  try {
    await transporter.sendMail({
      from: `\"${name}\" <${TEST_SMTP.from}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New GWO Course Inquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${course ? `<p><strong>Course of Interest:</strong> ${course}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log("Email sent successfully via SMTP test server.");
    return {
      message: "Thank you! Your message has been sent successfully.",
      status: "success",
      errors: null,
    };
  } catch (error) {
    console.error("Error sending email via SMTP test server:", error);
    return {
      message: "Failed to send message due to a server error. Please try again later.",
      status: "error",
      errors: { _form: ["Server error during email dispatch."] },
      fieldValues: validatedFields.data,
    };
  }
}
