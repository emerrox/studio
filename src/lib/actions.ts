
import { z } from "zod";

// Define the schema for form validation
export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional().or(z.literal('')), // Allow empty string or make it truly optional
  course: z.string().optional().or(z.literal('')),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Simplified state for client-side only form
export type ContactFormState = {
  message: string;
  status: "success" | "error" | "idle"; // 'error' might not be used if only client validation
  // errors are no longer expected from a server response in this setup
};

// The API route logic previously in /src/app/api/contact/route.ts
// has been removed to ensure static export compatibility.
// Email sending functionality from this Next.js app is disabled.
