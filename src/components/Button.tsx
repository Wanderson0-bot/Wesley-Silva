import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
export type ButtonSize = 'small' | 'medium' | 'large' | 'icon'

type SharedProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

type IconLabel = { iconOnly: true; 'aria-label': string }
type TextLabel = { iconOnly?: false; 'aria-label'?: string }

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & SharedProps & (IconLabel | TextLabel) & {
  loading?: boolean
}

function classes(variant: ButtonVariant, size: ButtonSize, className = '') {
  return ['ui-button', `ui-button--${variant}`, `ui-button--${size}`, className].filter(Boolean).join(' ')
}

export function Button({ variant = 'secondary', size = 'medium', className, loading = false, disabled, iconOnly: _iconOnly, children, type = 'button', ...props }: ButtonProps) {
  return <button {...props} type={type} className={classes(variant, size, className)} disabled={disabled || loading} aria-busy={loading || undefined}>
    {loading && <span className="ui-button__spinner" aria-hidden="true" />}
    {children}
  </button>
}

export type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & SharedProps & {
  children: ReactNode
}

export function ButtonLink({ variant = 'secondary', size = 'medium', className, ...props }: ButtonLinkProps) {
  return <a {...props} className={classes(variant, size, className)} />
}
