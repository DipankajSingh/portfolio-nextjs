import { Resend } from "resend";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import ContactFormStatus from "../client/ContactFormStatus";

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail(prevState: any, formData: FormData) {
  "use server";

  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const { data, error } = await resend.emails.send({
      from: `${process.env.EMAIL}`,
      to: ["dipankajsingh25@gmail.com", "hey@dipdev.tech"],
      subject: "Someone Want's To Contact You",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    if (error) {
      console.error("Error sending email:", error);
      return {
        success: false,
        message: "Failed to send email. Please try again.",
      };
    }

    console.log("Email sent successfully:", data);
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error in sendEmail:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    };
  }
}

export default function ContactForm() {
  return (
    <div className="max-w-md mx-auto p-6 rounded-lg shadow-md">
      <ContactFormStatus sendEmail={sendEmail}>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message here..."
              required
              className="mt-1"
            />
          </div>
        </div>
      </ContactFormStatus>
    </div>
  );
}
