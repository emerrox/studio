
// No longer a server action file in the traditional sense for form submission.
// Schemas and types can still be defined here.

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

export type ContactFormState = {
  message: string;
  status: "success" | "error" | "idle";
  errors?: Partial<Record<keyof ContactFormData | "_form", string[]>> | null;
  fieldValues?: ContactFormData; // This might be less relevant if not using useActionState's progressive enhancement
};

// The submitContactForm Server Action has been removed.
// Its logic is now in /src/app/api/contact/route.ts
