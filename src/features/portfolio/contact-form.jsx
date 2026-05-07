import { startTransition } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "./content";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  message: z.string().trim().min(20, "Please add a little more detail so the message is useful."),
});

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function isEmailJsConfigured() {
  return Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    if (!isEmailJsConfigured()) {
      toast.error("Email sending is not configured yet. Add your EmailJS keys to enable it.");
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          reply_to: values.email,
          from_email: values.email,
          message: values.message,
          to_name: profile.fullName,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
          limitRate: {
            throttle: 1000,
          },
        },
      );

      toast.success("Message sent successfully.");
      startTransition(() => reset());
    } catch (error) {
      console.error(error);
      toast.error("Message sending failed. Please check your EmailJS setup and try again.");
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      className="p-8 rounded-2xl border border-border bg-card space-y-5 h-fit"
    >
      <div>
        <h3 className="text-xl font-bold">Contact Form</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Have a project idea, internship opportunity, or collaboration in mind? Feel free to send
          me a message. I'm always open to discussing web development projects, software solutions,
          and new opportunities.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="Your name"
          aria-invalid={errors.name ? "true" : "false"}
          {...register("name")}
        />
        {errors.name ? <p className="text-sm text-destructive">{errors.name.message}</p> : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          aria-invalid={errors.email ? "true" : "false"}
          {...register("email")}
        />
        {errors.email ? <p className="text-sm text-destructive">{errors.email.message}</p> : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell me a little about the opportunity or project."
          aria-invalid={errors.message ? "true" : "false"}
          {...register("message")}
        />
        {errors.message ? (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        ) : null}
      </div>

      <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting}>
        <Send className="w-4 h-4" />
        {isSubmitting ? "Preparing Message..." : "Send Message"}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Phone: {profile.phoneDisplay} | Email: {profile.email}
      </p>
    </form>
  );
}
