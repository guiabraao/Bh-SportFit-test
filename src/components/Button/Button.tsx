import { type ReactNode, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'
import './Button.css'

type Variant = 'solid' | 'outline'
type Size = 'md' | 'sm'

interface BaseProps {
  variant?: Variant
  size?: Size
  icon?: ReactNode
  className?: string
  children: ReactNode
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

/**
 * Shared CTA button. Renders as an <a> when `href` is provided, otherwise a <button>.
 * Styles live in ./Button.css (`.btn`, `.btn--solid`, `.btn--outline`, `.btn--sm`, `.btn--md`).
 */
export default function Button({
  variant = 'solid',
  size = 'md',
  icon,
  className,
  children,
  href,
  ...rest
}: ButtonProps) {
  const classes = cn('btn', `btn--${size}`, `btn--${variant}`, className)

  if (href) {
    return (
      <a href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        <span>{children}</span>
        {icon && <span className="btn__icon">{icon}</span>}
      </a>
    )
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      <span>{children}</span>
      {icon && <span className="btn__icon">{icon}</span>}
    </button>
  )
}
