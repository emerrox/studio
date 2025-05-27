
"use client";

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import emailjs from '@emailjs/browser';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { contactFormSchema, type ContactFormData } from '@/lib/actions';
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
  const [isProcessing, setIsProcessing] = useState(false);

  const { control, handleSubmit, reset, formState: { errors: clientErrors } } = useForm<ContactFormData>({
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
    setIsProcessing(true);

    const SERVICE_ID = 'service_0tb90sq';
    const TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID'; // MAKE SURE TO REPLACE THIS
    const PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY'; // MAKE SURE TO REPLACE THIS

    const templateParams = {
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      course: data.course || '',
      message: data.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      toast({
        title: 'Message Sent!',
        description: "Thank you for your message. We'll be in touch shortly.",
        variant: 'default',
      });
      reset();
    } catch (error: any) {
      // Enhanced error logging
      console.log('Raw EmailJS error object:', error);
      if (error && typeof error === 'object') {
        console.log('Detailed EmailJS Error JSON:', JSON.stringify(error, Object.getOwnPropertyNames(error), 2));
        if ('status' in error) {
          console.log('EmailJS error status:', error.status);
        }
        if ('text' in error) {
          console.log('EmailJS error text:', error.text);
        }
      }
      console.error('EmailJS send error summary:', error); // Original log for comparison

      const errorText = (error && typeof error === 'object' && 'text' in error && typeof error.text === 'string') ? error.text : "Please try again later.";
      
      toast({
        title: 'Error Sending Message',
        description: `There was an issue sending your message. ${errorText}`,
        variant: 'destructive',
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name" className="flex items-center mb-1">
          <User className="w-4 h-4 mr-2 text-primary" /> Full Name
        </Label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <Input id="name" placeholder="John Doe" {...field} aria-invalid={!!clientErrors.name} />}
        />
        {clientErrors.name && (
          <p className="text-sm text-destructive mt-1">
            {clientErrors.name?.message}
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
          render={({ field }) => <Input id="email" type="email" placeholder="you@example.com" {...field} aria-invalid={!!clientErrors.email} />}
        />
        {clientErrors.email && (
          <p className="text-sm text-destructive mt-1">
            {clientErrors.email?.message}
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
          render={({ field }) => <Input id="phone" type="tel" placeholder="+1 234 567 8900" {...field} aria-invalid={!!clientErrors.phone} />}
        />
         {clientErrors.phone && (
          <p className="text-sm text-destructive mt-1">
            {clientErrors.phone?.message}
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
                <SelectTrigger id="course" aria-invalid={!!clientErrors.course}>
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
        {clientErrors.course && (
          <p className="text-sm text-destructive mt-1">
            {clientErrors.course?.message}
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
          render={({ field }) => <Textarea id="message" placeholder="Your inquiry or message..." rows={5} {...field} aria-invalid={!!clientErrors.message} />}
        />
         {clientErrors.message && (
          <p className="text-sm text-destructive mt-1">
            {clientErrors.message?.message}
          </p>
        )}
      </div>

      <SubmitButton pending={isProcessing} />
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

