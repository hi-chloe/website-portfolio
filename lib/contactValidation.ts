/** Shared rules keep browser feedback and server validation consistent. */
export const CONTACT_LIMITS = { name: 100, email: 200, subject: 150, message: 4000 };
export type ContactFieldErrors = Partial<Record<"name" | "email" | "message", string>>;

export function validateContact({ name, email, message }: {
  name: string; email: string; message: string;
}): ContactFieldErrors {
  const errors: ContactFieldErrors = {};
  if (!name.trim()) errors.name = "Please add your name.";
  if (!email.trim()) errors.email = "Please add an email so I can reply.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
    errors.email = "That email doesn't look right.";
  }
  if (!message.trim()) errors.message = "Please add a message.";
  else if (message.trim().length < 10) errors.message = "A little more detail would help.";
  return errors;
}
