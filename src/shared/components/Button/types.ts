/**
 * FROZEN CONTRACT — do not change this interface without a documented
 * reason and operator approval. Modules built in parallel depend on
 * this exact shape. Last frozen: 2026-07-25.
 */
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'ghost' | 'icon';
  /** 
   * Size affects height, padding, and text size.
   * Note: 'md' maps to 44px (e.g., LoginScreen), 'lg' maps to 56px (e.g., SignUpScreen)
   */
  size?: 'sm' | 'md' | 'lg';
  /** 
   * Controls border radius.
   * Note: 'default' maps to radius-md (e.g., LoginScreen), 'pill' maps to radius-full (e.g., SignUpScreen)
   */
  shape?: 'default' | 'pill' | 'square';
  /** If true, button takes 100% of container width */
  fullWidth?: boolean;
  /** Disables button and shows loading indicator */
  isLoading?: boolean;
  /** Optional icon to render before the text */
  leadingIcon?: ReactNode;
  /** Optional icon to render after the text */
  trailingIcon?: ReactNode;
  children?: ReactNode;
}
