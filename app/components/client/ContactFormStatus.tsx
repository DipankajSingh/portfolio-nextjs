"use client";

import { useFormStatus, useFormState } from "react-dom";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const initialState = {
  success: null,
  message: null,
};

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full mt-4" disabled={pending}>
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export default function ContactFormStatus({
  sendEmail,
  children,
}: {
  sendEmail: any;
  children: React.ReactNode;
}) {
  const [state, formAction] = useFormState(sendEmail, initialState);

  return (
    <form action={formAction} className="space-y-4">
      {children}
      <FormButton />
      {state.success === true && (
        <Alert variant="default" className="mt-4">
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}
      {state.success === false && (
        <Alert variant="destructive" className="mt-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}
    </form>
  );
}
