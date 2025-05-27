
"use client";

import { useState, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { contactFormSchema, type ContactFormData, type ContactFormState } from '@/lib/actions';
import { User, Mail, Phone, BookOpenText, MessageSquare, Loader2 } from 'lucide-react';


const courseOptions = [
  'GWO Basic Safety Training (BST)',
  'GWO Basic Technical Training (BTT)',
  'GWO Advanced Rescue Training (ART)',
  'GWO Sea Survival Training',
  'Other/General Inquiry',
];

function SubmitButton({ pending }: { pending: boolean }) {
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
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionState, setSubmissionState] = useState<ContactFormState>({
    message: '',
    status: 'idle',
    errors: null,
  });

  const { control, handleSubmit, reset, formState: { errors: clientErrors }, setError } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      course: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmissionState({ message: '', status: 'idle', errors: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result: ContactFormState = await response.json();
      setSubmissionState(result);

      if (response.ok && result.status === 'success') {
        toast({
          title: 'Message Sent!',
          description: result.message,
          variant: 'default',
        });
        reset(); 
      } else {
        toast({
          title: 'Error',
          description: result.message || "An unexpected error occurred.",
          variant: 'destructive',
        });
        if (result.errors) {
          Object.entries(result.errors).forEach(([key, value]) => {
            if (key !== '_form' && value && value.length > 0) {
              setError(key as keyof ContactFormData, { type: 'server', message: value[0] });
            }
          });
        }
      }
    } catch (error) {
      console.error("Submission error:", error);
      const errorMsg = 'Failed to send message. Please try again later.';
      toast({
        title: 'Error',
        description: errorMsg,
        variant: 'destructive',
      });
      setSubmissionState({ message: errorMsg, status: 'error', errors: { _form: ["Network error."] } });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const getCombinedErrors = (fieldName: keyof ContactFormData) => 
    clientErrors[fieldName] || 
    (submissionState.errors && submissionState.errors[fieldName]?.[0] ? { message: submissionState.errors[fieldName]?.[0] } : undefined);


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name" className="flex items-center mb-1">
          <User className="w-4 h-4 mr-2 text-primary" /> Full Name
        </Label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <Input id="name" placeholder="John Doe" {...field} aria-invalid={!!getCombinedErrors('name')} />}
        />
        {getCombinedErrors('name') && (
          <p className="text-sm text-destructive mt-1">
            {getCombinedErrors('name')?.message}
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
          render={({ field }) => <Input id="email" type="email" placeholder="you@example.com" {...field} aria-invalid={!!getCombinedErrors('email')} />}
        />
        {getCombinedErrors('email') && (
          <p className="text-sm text-destructive mt-1">
            {getCombinedErrors('email')?.message}
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
          render={({ field }) => <Input id="phone" type="tel" placeholder="+1 234 567 8900" {...field} aria-invalid={!!getCombinedErrors('phone')} />}
        />
         {getCombinedErrors('phone') && (
          <p className="text-sm text-destructive mt-1">
            {getCombinedErrors('phone')?.message}
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
              <Select onValueChange={field.onChange} defaultValue={field.value || ''} value={field.value || ''}>
                <SelectTrigger id="course" aria-invalid={!!getCombinedErrors('course')}>
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
        {getCombinedErrors('course') && (
          <p className="text-sm text-destructive mt-1">
            {getCombinedErrors('course')?.message}
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
          render={({ field }) => <Textarea id="message" placeholder="Your inquiry or message..." rows={5} {...field} aria-invalid={!!getCombinedErrors('message')} />}
        />
         {getCombinedErrors('message') && (
          <p className="text-sm text-destructive mt-1">
            {getCombinedErrors('message')?.message}
          </p>
        )}
      </div>
      
      {submissionState.errors?._form && (
         <p className="text-sm font-medium text-destructive">{submissionState.errors._form.join(', ')}</p>
      )}
      {submissionState.status === 'error' && submissionState.message && !submissionState.errors?._form && (
         <p className="text-sm font-medium text-destructive">{submissionState.message}</p>
      )}
       {submissionState.status === 'success' && submissionState.message && (
         <p className="text-sm font-medium text-green-600">{submissionState.message}</p>
      )}

      <SubmitButton pending={isSubmitting} />
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
