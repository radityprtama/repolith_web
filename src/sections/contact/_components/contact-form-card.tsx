import { useServerFn } from "@tanstack/react-start";
import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormActions } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/toast";
import {
  type ContactFormValues,
  contactSchema,
} from "@/sections/contact/_constants/contact-schema";
import { sendContactMessage } from "@/sections/contact/_server/send-contact-message";

type ContactErrors = Partial<Record<keyof ContactFormValues, string>>;

export default function ContactFormCard() {
  const sendContactMessageFn = useServerFn(sendContactMessage);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const values: ContactFormValues = {
      firstName: formData.get("firstName")?.toString().trim() ?? "",
      lastName: formData.get("lastName")?.toString().trim() ?? "",
      email: formData.get("email")?.toString().trim() ?? "",
      subject: formData.get("subject")?.toString().trim() ?? "",
      message: formData.get("message")?.toString().trim() ?? "",
    };

    const parsed = contactSchema.safeParse(values);

    const submit = async () => {
      if (!parsed.success) {
        const nextErrors: ContactErrors = {};
        for (const issue of parsed.error.issues) {
          const field = issue.path[0];
          if (
            typeof field === "string" &&
            !nextErrors[field as keyof ContactErrors]
          ) {
            nextErrors[field as keyof ContactErrors] = issue.message;
          }
        }
        setErrors(nextErrors);
        const firstIssue = parsed.error.issues[0];
        toast.warning({
          title: "Please review your details",
          description:
            firstIssue?.message ??
            "Add your team and demo requirements before continuing.",
        });
        setIsSubmitting(false);
        return;
      }

      setErrors({});
      try {
        await sendContactMessageFn({ data: parsed.data });
        form.reset();
        toast.success({
          title: "Demo request received",
          description:
            "Thanks! We’ll reach out shortly to schedule your Repolith walkthrough.",
        });
      } catch (error) {
        console.error(error);
        toast.error({
          title: "Unable to send request",
          description:
            "We couldn’t submit your demo inquiry right now. Please try again in a moment.",
        });
      } finally {
        setIsSubmitting(false);
      }
    };

    void submit();
  };

  return (
    <Card className="relative w-full max-w-xl z-10">
      <CardContent>
        <Form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Input
              label="First name"
              name="firstName"
              placeholder="Alex"
              required
              wrapperClassName="w-full bg-[color-mix(in_oklch,var(--color-background)_60%,var(--color-card)_40%)]"
              variant={errors.firstName ? "error" : "default"}
            />
            <Input
              label="Last name"
              name="lastName"
              placeholder="Rivera"
              required
              wrapperClassName="w-full bg-[color-mix(in_oklch,var(--color-background)_60%,var(--color-card)_40%)]"
              variant={errors.lastName ? "error" : "default"}
            />
          </div>
          <Input
            type="email"
            label="Work email"
            name="email"
            placeholder="alex@company.com"
            required
            wrapperClassName="w-full bg-[color-mix(in_oklch,var(--color-background)_60%,var(--color-card)_40%)]"
            variant={errors.email ? "error" : "default"}
          />
          <Input
            label="Company or team"
            name="subject"
            placeholder="Acme Platform Team"
            wrapperClassName="w-full bg-[color-mix(in_oklch,var(--color-background)_60%,var(--color-card)_40%)]"
            variant={errors.subject ? "error" : "default"}
          />
          <Textarea
            label="What would you like to see in the demo?"
            name="message"
            placeholder="Tell us about your current PR review workflow, pain points, and what you want to improve with Repolith."
            rows={5}
            required
            wrapperClassName="w-full bg-[color-mix(in_oklch,var(--color-background)_60%,var(--color-card)_40%)]"
            variant={errors.message ? "error" : "default"}
          />
          <FormActions align="right">
            <Button type="submit" size="md" disabled={isSubmitting}>
              {isSubmitting ? "Submitting request..." : "Request demo"}
            </Button>
          </FormActions>
        </Form>
      </CardContent>
    </Card>
  );
}
