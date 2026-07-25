/**
 * FROZEN CONTRACT — do not change this interface without a documented
 * reason and operator approval. Modules built in parallel depend on
 * this exact shape. Last frozen: 2026-07-25.
 */
import { HTMLAttributes, ReactNode } from 'react';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  /** Visual stylistic variant (maps to font size, weight, and letter spacing) */
  variant?: 'h1' | 'h2' | 'h3' | 'subtitle' | 'body' | 'caption' | 'label';
  /** Underlying HTML element to render (defaults based on variant if omitted) */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label';
  /** Text color */
  color?: 'primary' | 'secondary' | 'brand' | 'error' | 'inherit';
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Font weight override */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  children: ReactNode;
}
