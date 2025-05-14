// src/lib/actions.ts
"use server";

import { z } from "zod";

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
  errors?: Record<keyof z.infer<typeof contactFormSchema> | "_form", string[]> | null;
  fieldValues?: z.infer<typeof contactFormSchema>;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") || undefined, // Ensure undefined if empty for Zod optional
    course: formData.get("course") || undefined,
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Form validation failed. Please check the fields below.",
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
      fieldValues: { // Keep previous values
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string | undefined,
        course: formData.get("course") as string | undefined,
        message: formData.get("message") as string,
      }
    };
  }

  const { name, email, phone, course, message } = validatedFields.data;
  const recipientEmail = "web@totalhse.com";

  // In a real application, you would use an email sending service here.
  // For example, using Resend, Nodemailer, AWS SES, etc.
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // try {
  //   await resend.emails.send({
  //     from: 'GWO Training Solutions <noreply@yourdomain.com>', // Replace with your domain
  //     to: recipientEmail,
  //     reply_to: email, // Set reply-to to the submitter's email
  //     subject: `New GWO Course Inquiry from ${name}`,
  //     html: `
  //       <h2>New Contact Form Submission</h2>
  //       <p><strong>Name:</strong> ${name}</p>
  //       <p><strong>Email:</strong> ${email}</p>
  //       ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
  //       ${course ? `<p><strong>Course of Interest:</strong> ${course}</p>` : ''}
  //       <p><strong>Message:</strong></p>
  //       <p>${message.replace(/\n/g, '<br>')}</p>
  //     `,
  //   });
  //  console.log("Email sent successfully via email provider.");
  //  return { message: "Thank you! Your message has been sent successfully.", status: "success" };
  // } catch (error) {
  //   console.error("Email sending error:", error);
  //   return { 
  //     message: "Failed to send message due to a server error. Please try again later.", 
  //     status: "error",
  //     errors: { _form: ["Server error during email dispatch."] },
  //     fieldValues: validatedFields.data
  //   };
  // }

  // Placeholder for email sending logic (simulating success)
  console.log("--- Contact Form Submission (Simulated) ---");
  console.log("Recipient:", recipientEmail);
  console.log("Name:", name);
  console.log("Email:", email);
  if (phone) console.log("Phone:", phone);
  if (course) console.log("Course:", course);
  console.log("Message:", message);
  console.log("--- End of Submission ---");
  
  // Simulate a short delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { 
    message: "Thank you! Your message has been sent successfully (simulated). We will get back to you shortly.", 
    status: "success",
    errors: null,
  };
}
