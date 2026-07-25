/**
 * FROZEN CONTRACT — do not change this interface without a documented
 * reason and operator approval. Modules built in parallel depend on
 * this exact shape. Last frozen: 2026-07-25.
 */
import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** The accessible label for the input */
  label: string;
  /** If true, the label is visually hidden (sr-only) but still accessible */
  hideLabel?: boolean;
  /** Error message to display below the input and trigger error styling */
  error?: string;
  /** Optional icon to render inside the input on the left */
  leadingIcon?: ReactNode;
  /** Optional icon or element (like a button) to render inside the input on the right */
  trailingIcon?: ReactNode;
  /** Hint text displayed below the input (hidden if error is present) */
  helperText?: string;
}
