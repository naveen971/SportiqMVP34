/**
 * Simple email validation using a standard regex pattern.
 */
export function isValidEmail(email: string): boolean {
  if (!email) return false;
  // A basic email regex that catches most common errors
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
