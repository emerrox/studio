// src/components/contact-form.tsx
"use client";

import { useEffect } from 'react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card'; // Ensured import
import { useToast } from '@/hooks/use-toast';
import { submitContactForm, type ContactFormState } from '@/lib/actions';
import { User, Mail, Phone, BookOpenText, MessageSquare, Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  course: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

const courseOptions = [
  'GWO Basic Safety Training (BST)',
  'GWO Basic Technical Training (BTT)',
  'GWO Advanced Rescue Training (ART)',
  'GWO Sea Survival Training',
  'Other/General Inquiry',
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        'Send Message'
      )}
    </Button>
  );
}

const ContactForm = () => {
  const { toast } = useToast();
  
  const initialState: ContactFormState = { message: '', status: 'idle', errors: null, fieldValues: {name: '', email: '', message: ''} };
  const [state, formAction] = useActionState(submitContactForm, initialState);

  const { control, handleSubmit, reset, formState: { errors: clientErrors }, setValue } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: state.fieldValues?.name || '',
      email: state.fieldValues?.email || '',
      phone: state.fieldValues?.phone || '',
      course: state.fieldValues?.course || '',
      message: state.fieldValues?.message || '',
    },
  });

  useEffect(() => {
    if (state.status === 'success') {
      toast({
        title: 'Message Sent!',
        description: state.message,
        variant: 'default',
      });
      reset(); // Reset form fields on success
    } else if (state.status === 'error' && state.message) {
      toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
      // Re-populate form with submitted values if server error
      if (state.fieldValues) {
        setValue('name', state.fieldValues.name || '');
        setValue('email', state.fieldValues.email || '');
        setValue('phone', state.fieldValues.phone || '');
        setValue('course', state.fieldValues.course || '');
        setValue('message', state.fieldValues.message || '');
      }
    }
  }, [state, toast, reset, setValue]);

  const serverErrors = state.errors;

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <Label htmlFor="name" className="flex items-center mb-1">
          <User className="w-4 h-4 mr-2 text-primary" /> Full Name
        </Label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <Input id="name" placeholder="John Doe" {...field} aria-invalid={!!(clientErrors.name || serverErrors?.name)} />}
        />
        {(clientErrors.name || serverErrors?.name) && (
          <p className="text-sm text-destructive mt-1">
            {clientErrors.name?.message || serverErrors?.name?.[0]}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="flex items-center mb-1">
          <Mail className="w-4 h-4 mr-2 text-primary" /> Email Address
        </Label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <Input id="email" type="email" placeholder="you@example.com" {...field} aria-invalid={!!(clientErrors.email || serverErrors?.email)} />}
        />
        {(clientErrors.email || serverErrors?.email) && (
          <p className="text-sm text-destructive mt-1">
            {clientErrors.email?.message || serverErrors?.email?.[0]}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="phone" className="flex items-center mb-1">
          <Phone className="w-4 h-4 mr-2 text-primary" /> Phone Number (Optional)
        </Label>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => <Input id="phone" type="tel" placeholder="+1 234 567 8900" {...field} aria-invalid={!!(clientErrors.phone || serverErrors?.phone)} />}
        />
        {(clientErrors.phone || serverErrors?.phone) && (
          <p className="text-sm text-destructive mt-1">
            {clientErrors.phone?.message || serverErrors?.phone?.[0]}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="course" className="flex items-center mb-1">
          <BookOpenText className="w-4 h-4 mr-2 text-primary" /> Course of Interest (Optional)
        </Label>
        <Controller
            name="course"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger id="course" aria-invalid={!!(clientErrors.course || serverErrors?.course)}>
                  <SelectValue placeholder="Select a course" />
                </SelectTrigger>
                <SelectContent>
                  {courseOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        {(clientErrors.course || serverErrors?.course) && (
          <p className="text-sm text-destructive mt-1">
            {clientErrors.course?.message || serverErrors?.course?.[0]}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className="flex items-center mb-1">
          <MessageSquare className="w-4 h-4 mr-2 text-primary" /> Message
        </Label>
        <Controller
          name="message"
          control={control}
          render={({ field }) => <Textarea id="message" placeholder="Your inquiry or message..." rows={5} {...field} aria-invalid={!!(clientErrors.message || serverErrors?.message)} />}
        />
         {(clientErrors.message || serverErrors?.message) && (
          <p className="text-sm text-destructive mt-1">
            {clientErrors.message?.message || serverErrors?.message?.[0]}
          </p>
        )}
      </div>
      
      {state.errors?._form && (
         <p className="text-sm font-medium text-destructive">{state.errors._form.join(', ')}</p>
      )}

      <SubmitButton />
    </form>
  );
};


const ContactFormSection = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Get in Touch</h2>
            <p className="mt-4 text-lg text-foreground/70">
              Have questions or ready to enroll? Fill out the form below, and our team will contact you shortly.
            </p>
          </div>
          <Card className="p-6 sm:p-8 lg:p-10 shadow-xl">
            <ContactForm />
          </Card>
        </div>
      </div>
    </section>
  );
};


export default ContactFormSection;

    
