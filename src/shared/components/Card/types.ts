/**
 * FROZEN CONTRACT — do not change this interface without a documented
 * reason and operator approval. Modules built in parallel depend on
 * this exact shape. Last frozen: 2026-07-25.
 */
import { HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual style variant (solid background vs glassmorphism) */
  variant?: 'solid' | 'glass';
  /** Inner padding scale (maps to spacing tokens) */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Border radius scale */
  radius?: 'md' | 'lg' | 'xl' | '2xl';
  children: ReactNode;
}
