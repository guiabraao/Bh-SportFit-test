import { type ReactNode } from 'react'
import { cn } from '../../utils/cn'
import './SectionTitle.css'

interface SectionTitleProps {
  eyebrow: string
  title: ReactNode
  align?: 'left' | 'center'
  className?: string
}

/**
 * Small uppercase eyebrow label + heading, used to introduce every major section.
 * Styles live in ./SectionTitle.css.
 */
export default function SectionTitle({ eyebrow, title, align = 'center', className }: SectionTitleProps) {
  return (
    <div className={cn('section-title', `section-title--${align}`, className)}>
      <span className="section-title__eyebrow">{eyebrow}</span>
      <h2 className="section-title__heading">{title}</h2>
    </div>
  )
}
