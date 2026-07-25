import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link'
type ButtonSize = 'lg' | 'md' | 'sm' | 'xs'
type ButtonWidth = 'full' | 'half'
type ButtonState = 'loading' | 'success' | 'error'

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700',
  secondary: 'bg-brand-50 text-brand-700 hover:bg-brand-100',
  ghost: 'border border-brand-600 bg-transparent text-brand-600 hover:bg-brand-50',
  link: 'bg-transparent text-brand-600 underline hover:no-underline',
}

const sizeClasses: Record<ButtonSize, string> = {
  lg: 'px-6 py-3 text-lg',
  md: 'px-4 py-2 text-base',
  sm: 'px-3 py-1.5 text-sm',
  xs: 'px-2 py-1 text-xs',
}

const widthClasses: Record<ButtonWidth, string> = {
  full: 'w-full',
  half: 'w-1/2',
}

const stateColorClasses: Record<ButtonState, string> = {
  loading: '',
  success: 'bg-success text-white',
  error: 'bg-error text-white',
}

function StateIcon({ state }: { state: ButtonState }) {
  if (state === 'loading') {
    return (
      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
      </svg>
    )
  }
  if (state === 'success') return <span>✓</span>
  return <span>✗</span>
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  width?: ButtonWidth
  state?: ButtonState
  icon?: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  width,
  state,
  icon,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  const hasState = state !== undefined

  const classes = [
    'inline-flex cursor-pointer items-center justify-center gap-2 rounded font-medium transition-colors',
    'disabled:cursor-not-allowed disabled:opacity-50',
    state ? stateColorClasses[state] : variantClasses[variant],
    sizeClasses[size],
    width ? widthClasses[width] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button type="button" className={classes} disabled={disabled || hasState} {...props}>
      {hasState ? <StateIcon state={state} /> : icon}
      {children && <span>{children}</span>}
    </button>
  )
}
